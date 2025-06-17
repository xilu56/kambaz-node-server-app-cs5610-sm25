import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {
  const findAllAssignments = async (req, res) => {
    try {
      const assignments = await dao.findAllAssignments();
      res.json(assignments);
    } catch (error) {
      console.error("Error fetching all assignments:", error);
      res.status(500).json({ message: "Error fetching assignments" });
    }
  };

  const findAssignmentById = async (req, res) => {
    try {
      const { assignmentId } = req.params;
      const assignment = await dao.findAssignmentById(assignmentId);
      if (assignment) {
        res.json(assignment);
      } else {
        res.status(404).json({ message: "Assignment not found" });
      }
    } catch (error) {
      console.error("Error fetching assignment:", error);
      res.status(500).json({ message: "Error fetching assignment" });
    }
  };

  const findAssignmentsForCourse = async (req, res) => {
    try {
      const { courseId } = req.params;
      const assignments = await dao.findAssignmentsForCourse(courseId);
      res.json(assignments);
    } catch (error) {
      console.error("Error fetching assignments for course:", error);
      res.status(500).json({ message: "Error fetching assignments" });
    }
  };

  const createAssignment = async (req, res) => {
    try {
      const assignment = await dao.createAssignment(req.body);
      res.json(assignment);
    } catch (error) {
      console.error("Error creating assignment:", error);
      res.status(500).json({ message: "Error creating assignment" });
    }
  };

  const createAssignmentForCourse = async (req, res) => {
    try {
      const { courseId } = req.params;
      const assignment = { ...req.body, course: courseId };
      const newAssignment = await dao.createAssignment(assignment);
      res.json(newAssignment);
    } catch (error) {
      console.error("Error creating assignment for course:", error);
      res.status(500).json({ message: "Error creating assignment" });
    }
  };

  const updateAssignment = async (req, res) => {
    try {
      const { assignmentId } = req.params;
      const updatedAssignment = await dao.updateAssignment(assignmentId, req.body);
      if (updatedAssignment) {
        res.json(updatedAssignment);
      } else {
        res.status(404).json({ message: "Assignment not found" });
      }
    } catch (error) {
      console.error("Error updating assignment:", error);
      res.status(500).json({ message: "Error updating assignment" });
    }
  };

  const deleteAssignment = async (req, res) => {
    try {
      const { assignmentId } = req.params;
      await dao.deleteAssignment(assignmentId);
      res.sendStatus(204);
    } catch (error) {
      console.error("Error deleting assignment:", error);
      res.status(500).json({ message: "Error deleting assignment" });
    }
  };

  app.get("/api/assignments", findAllAssignments);
  app.get("/api/assignments/:assignmentId", findAssignmentById);
  app.get("/api/courses/:courseId/assignments", findAssignmentsForCourse);
  app.post("/api/assignments", createAssignment);
  app.post("/api/courses/:courseId/assignments", createAssignmentForCourse);
  app.put("/api/assignments/:assignmentId", updateAssignment);
  app.delete("/api/assignments/:assignmentId", deleteAssignment);
} 