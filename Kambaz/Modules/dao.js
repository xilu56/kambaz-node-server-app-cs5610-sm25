import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export function findModulesForCourse(courseId) {
 return model.find({ course: courseId });
}

export function createModule(module) {
 const newModule = { ...module, _id: uuidv4() };
 return model.create(newModule);
}

export function deleteModule(moduleId) {
 return model.deleteOne({ _id: moduleId });
}

export async function updateModule(moduleId, moduleUpdates) {
  try {
    // Remove fields that shouldn't be updated
    const { __v, ...safeUpdates } = moduleUpdates;
    
    // Use $set to ensure proper update
    const result = await model.updateOne(
      { _id: moduleId }, 
      { $set: safeUpdates }
    );
    
    console.log(`Update result for module ${moduleId}:`, result);
    
    // Return the updated document
    if (result.matchedCount > 0) {
      return await model.findById(moduleId);
    } else {
      throw new Error("Module not found");
    }
  } catch (error) {
    console.error("Error in updateModule:", error);
    throw error;
  }
}

export async function findAllModules() {
  return await model.find();
}

export async function findModuleById(moduleId) {
  return await model.findById(moduleId);
}