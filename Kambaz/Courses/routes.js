import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
import * as enrollmentsDao from "../Enrollments/dao.js";

export default function CourseRoutes(app) {
  
  // Get all courses
  app.get("/api/courses", async (req, res) => {
    try {
      const courses = await dao.findAllCourses();
      res.send(courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
      res.status(500).json({ message: "Error fetching courses" });
    }
  });

  // Get a specific course by ID
  app.get("/api/courses/:courseId", async (req, res) => {
    try {
      const { courseId } = req.params;
      const course = await dao.findCourseById(courseId);
      if (course) {
        res.send(course);
      } else {
        res.status(404).json({ message: "Course not found" });
      }
    } catch (error) {
      console.error("Error fetching course:", error);
      res.status(500).json({ message: "Error fetching course" });
    }
  });

  // Get modules for a specific course
  app.get("/api/courses/:courseId/modules", async (req, res) => {
    try {
      const { courseId } = req.params;
      const modules = await dao.findModulesForCourse(courseId);
      res.json(modules);
    } catch (error) {
      console.error("Error fetching modules for course:", error);
      res.status(500).json({ message: "Error fetching modules for course" });
    }
  });

  // Create a new module for a specific course
  app.post("/api/courses/:courseId/modules", async (req, res) => {
    try {
      const { courseId } = req.params;
      
      // Verify the course exists first
      const course = await dao.findCourseById(courseId);
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      
      const module = {
        ...req.body,
        course: courseId,  // Ensure the course reference is set
      };
      const newModule = await modulesDao.createModule(module);
      res.send(newModule);
    } catch (error) {
      console.error("Error creating module:", error);
      res.status(500).json({ message: "Error creating module" });
    }
  });

  // Create a new course
  app.post("/api/courses", async (req, res) => {
    try {
      const newCourse = await dao.createCourse(req.body);
      
      // Auto-enroll faculty who create the course
      const currentUser = req.session["currentUser"];
      if (currentUser && (currentUser.role === "FACULTY" || currentUser.role === "ADMIN")) {
        try {
          await enrollmentsDao.enrollUserInCourse(currentUser._id, newCourse._id);
          console.log(`Auto-enrolled faculty ${currentUser.username} in course ${newCourse._id}`);
        } catch (enrollError) {
          console.warn("Failed to auto-enroll faculty in course:", enrollError);
          // Continue without failing the course creation
        }
      }
      
      res.send(newCourse);
    } catch (error) {
      console.error("Error creating course:", error);
      res.status(500).json({ message: "Error creating course" });
    }
  });

  // Update a course
  app.put("/api/courses/:courseId", async (req, res) => {
    try {
      const { courseId } = req.params;
      const courseUpdates = req.body;
      const updatedCourse = await dao.updateCourse(courseId, courseUpdates);
      res.send(updatedCourse);
    } catch (error) {
      console.error("Error updating course:", error);
      res.status(500).json({ message: "Error updating course" });
    }
  });

  // Delete a course (and its associated modules)
  app.delete("/api/courses/:courseId", async (req, res) => {
    try {
      const { courseId } = req.params;
      await dao.deleteCourse(courseId);
      res.sendStatus(204);
    } catch (error) {
      console.error("Error deleting course:", error);
      res.status(500).json({ message: "Error deleting course" });
    }
  }); 
}