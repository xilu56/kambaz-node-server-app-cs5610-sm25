import model from "./model.js";

export const findAllAssignments = async () => {
  const assignments = await model.find();
  return assignments;
};

export const findAssignmentById = async (assignmentId) => {
  const assignment = await model.findById(assignmentId);
  return assignment;
};

export const findAssignmentsForCourse = async (courseId) => {
  const assignments = await model.find({ course: courseId });
  return assignments;
};

export const createAssignment = async (assignment) => {
  // Generate ID if not provided
  if (!assignment._id) {
    assignment._id = new Date().getTime().toString();
  }
  const newAssignment = await model.create(assignment);
  return newAssignment;
};

export const updateAssignment = async (assignmentId, assignmentUpdates) => {
  const updatedAssignment = await model.findByIdAndUpdate(
    assignmentId,
    { $set: assignmentUpdates },
    { new: true, runValidators: true }
  );
  return updatedAssignment;
};

export const deleteAssignment = async (assignmentId) => {
  const result = await model.deleteOne({ _id: assignmentId });
  return result;
}; 