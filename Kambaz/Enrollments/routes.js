import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {
  // Test route to verify enrollment routes are working
  app.get("/api/enrollments/test", (req, res) => {
    res.json({ message: "Enrollment routes are working!", timestamp: new Date() });
  });

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
      console.log(`=== ENROLLMENT DEBUG: Finding enrollments for user ${userId} ===`);
      
      const enrollments = await dao.findEnrollmentsForUser(userId);
      console.log(`Found ${enrollments?.length || 0} enrollments for user ${userId}:`, enrollments);
      
      res.json(enrollments || []);
    } catch (error) {
      console.error("Error fetching enrollments for user:", error);
      res.status(500).json({ message: "Error fetching enrollments", error: error.message });
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
      console.log(`=== ENROLLMENT DEBUG: Enrolling user ${userId} in course ${courseId} ===`);
      
      const enrollment = await dao.enrollUserInCourse(userId, courseId);
      console.log(`Enrollment created:`, enrollment);
      
      res.json(enrollment);
    } catch (error) {
      console.error("Error enrolling user in course:", error);
      res.status(500).json({ message: "Error enrolling user in course", error: error.message });
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