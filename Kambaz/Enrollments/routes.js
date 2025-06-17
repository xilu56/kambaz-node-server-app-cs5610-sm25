import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  const findAllEnrollments = async (req, res) => {
    try {
      const enrollments = await dao.findAllEnrollments();
      res.json(enrollments);
    } catch (error) {
      console.error("Error fetching all enrollments:", error);
      res.status(500).json({ message: "Error fetching enrollments" });
    }
  };

  const findEnrollmentById = async (req, res) => {
    try {
      const { enrollmentId } = req.params;
      const enrollment = await dao.findEnrollmentById(enrollmentId);
      if (enrollment) {
        res.json(enrollment);
      } else {
        res.status(404).json({ message: "Enrollment not found" });
      }
    } catch (error) {
      console.error("Error fetching enrollment:", error);
      res.status(500).json({ message: "Error fetching enrollment" });
    }
  };

  const findEnrollmentsForUser = async (req, res) => {
    try {
      const { userId } = req.params;
      const enrollments = await dao.findEnrollmentsForUser(userId);
      res.json(enrollments || []);
    } catch (error) {
      console.error("Error fetching enrollments for user:", error);
      res.status(500).json({ message: "Error fetching enrollments" });
    }
  };

  const findEnrollmentsForCourse = async (req, res) => {
    try {
      const { courseId } = req.params;
      const enrollments = await dao.findEnrollmentsForCourse(courseId);
      res.json(enrollments || []);
    } catch (error) {
      console.error("Error fetching enrollments for course:", error);
      res.status(500).json({ message: "Error fetching enrollments" });
    }
  };

  const enrollUserInCourse = async (req, res) => {
    try {
      const { userId, courseId } = req.params;
      const enrollment = await dao.enrollUserInCourse(userId, courseId);
      res.json(enrollment);
    } catch (error) {
      console.error("Error enrolling user in course:", error);
      res.status(500).json({ message: "Error enrolling user in course" });
    }
  };

  const unenrollUserFromCourse = async (req, res) => {
    try {
      const { userId, courseId } = req.params;
      await dao.unenrollUserFromCourse(userId, courseId);
      res.sendStatus(204);
    } catch (error) {
      console.error("Error unenrolling user from course:", error);
      res.status(500).json({ message: "Error unenrolling user from course" });
    }
  };

  app.get("/api/enrollments", findAllEnrollments);
  app.get("/api/enrollments/:enrollmentId", findEnrollmentById);
  app.get("/api/enrollments/user/:userId", findEnrollmentsForUser);
  app.get("/api/enrollments/course/:courseId", findEnrollmentsForCourse);
  app.post("/api/users/:userId/courses/:courseId", enrollUserInCourse);
  app.delete("/api/users/:userId/courses/:courseId", unenrollUserFromCourse);
} 