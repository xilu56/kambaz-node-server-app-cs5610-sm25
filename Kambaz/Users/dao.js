import db from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export const createUser = (user) => {
  const newUser = { ...user, _id: uuidv4() };
  db.users = [...db.users, newUser];
  return newUser;
};

export const findAllUsers = () => db.users;

export const findUserById = (userId) => db.users.find((user) => user._id === userId);

export const findUserByUsername = (username) => db.users.find((user) => user.username === username);

export const findUserByCredentials = (username, password) =>
  db.users.find((user) => user.username === username && user.password === password);

export const updateUser = (userId, updates) => {
  console.log("=== DAO UPDATE USER DEBUG ===");
  console.log("User ID:", userId);
  console.log("Updates:", updates);
  console.log("Current users array:", db.users);
  
  const userIndex = db.users.findIndex((user) => user._id === userId);
  console.log("User index found:", userIndex);
  
  if (userIndex === -1) {
    console.log("ERROR: User not found");
    return null;
  }
  
  console.log("User before update:", db.users[userIndex]);
  
  // Merge existing user data with updates
  const updatedUser = { ...db.users[userIndex], ...updates };
  db.users[userIndex] = updatedUser;
  
  console.log("User after update:", db.users[userIndex]);
  console.log("Updated users array:", db.users);
  
  return updatedUser;
};

export const deleteUser = (userId) => (db.users = db.users.filter((u) => u._id !== userId)); 