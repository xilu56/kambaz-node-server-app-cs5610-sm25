import model from "./model.js";
import ModuleModel from "../Modules/model.js";

export async function findAllCourses() {
  return await model.find();
}

export async function findCoursesForEnrolledUser(userId) {
  // This would need to be implemented with proper enrollment relationships
  // For now, return all courses - this should be updated when enrollment system is MongoDB-based
  return await model.find();
}

export async function createCourse(course) {
  // Generate a custom ID if not provided
  if (!course._id) {
    // Generate a simple ID based on course number or timestamp
    const prefix = course.number ? course.number.substring(0, 2).toUpperCase() : "CS";
    const timestamp = Date.now().toString().slice(-4);
    course._id = `${prefix}${timestamp}`;
  }
  return await model.create(course);
}

export async function deleteCourse(courseId) {
  // First check if course exists
  const existingCourse = await model.findById(courseId);
  if (!existingCourse) {
    throw new Error("Course not found");
  }
  
  // Delete all modules associated with this course (cascade delete)
  await ModuleModel.deleteMany({ course: courseId });
  
  // Delete the course
  const result = await model.deleteOne({ _id: courseId });
  
  if (result.deletedCount === 0) {
    throw new Error("Failed to delete course");
  }
  
  return result;
}

export async function updateCourse(courseId, courseUpdates) {
  // First check if course exists
  const existingCourse = await model.findById(courseId);
  if (!existingCourse) {
    throw new Error("Course not found");
  }
  
  // Validate required fields - check for both undefined and empty strings
  if (courseUpdates.hasOwnProperty('name') && (!courseUpdates.name || courseUpdates.name.trim() === "")) {
    throw new Error("Course name is required");
  }
  
  if (courseUpdates.hasOwnProperty('number') && (!courseUpdates.number || courseUpdates.number.trim() === "")) {
    throw new Error("Course number is required");
  }
  
  if (courseUpdates.hasOwnProperty('description') && (!courseUpdates.description || courseUpdates.description.trim() === "")) {
    throw new Error("Course description is required");
  }
  
  // Validate date logic
  if (courseUpdates.startDate && courseUpdates.endDate) {
    if (new Date(courseUpdates.startDate) >= new Date(courseUpdates.endDate)) {
      throw new Error("End date must be after start date");
    }
  } else if (courseUpdates.startDate && existingCourse.endDate) {
    if (new Date(courseUpdates.startDate) >= new Date(existingCourse.endDate)) {
      throw new Error("Start date must be before existing end date");
    }
  } else if (courseUpdates.endDate && existingCourse.startDate) {
    if (new Date(existingCourse.startDate) >= new Date(courseUpdates.endDate)) {
      throw new Error("End date must be after existing start date");
    }
  }
  
  // Validate credits
  if (courseUpdates.hasOwnProperty('credits')) {
    const credits = Number(courseUpdates.credits);
    if (isNaN(credits) || credits < 1 || credits > 10) {
      throw new Error("Credits must be a number between 1 and 10");
    }
  }
  
  // Remove _id from updates to prevent modification
  const { _id, ...safeUpdates } = courseUpdates;
  
  // Update the course
  const result = await model.updateOne({ _id: courseId }, { $set: safeUpdates });
  
  if (result.matchedCount === 0) {
    throw new Error("Course not found");
  }
  
  if (result.modifiedCount === 0) {
    throw new Error("No changes were made to the course");
  }
  
  // Return the updated course
  return await model.findById(courseId);
}

export async function findCourseById(courseId) {
  return await model.findById(courseId);
}

export async function findModulesForCourse(courseId) {
  return await ModuleModel.find({ course: courseId });
} 