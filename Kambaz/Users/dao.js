import model from "./model.js";

export const createUser = async (user) => {
  try {
    // Generate a unique ID if not provided
    if (!user._id) {
      // Generate a simple numeric ID based on timestamp and random number
      user._id = Date.now().toString() + Math.floor(Math.random() * 1000).toString();
    }
    const newUser = await model.create(user);
    return newUser;
  } catch (error) {
    throw error;
  }
};

export const findAllUsers = async () => {
  try {
    const users = await model.find();
    return users;
  } catch (error) {
    throw error;
  }
};

export const findUserById = (userId) => model.findOne({ _id: userId });

export const findUserByUsername = async (username) => {
  try {
    const user = await model.findOne({ username: username });
    return user;
  } catch (error) {
    throw error;
  }
};

export const findUserByCredentials = async (username, password) => {
  try {
    const user = await model.findOne({ username, password });
    return user;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (userId, user) => {
  try {
    const result = await model.updateOne({ _id: userId }, { $set: user });
    if (result.modifiedCount > 0) {
      const updatedUser = await model.findOne({ _id: userId });
      return updatedUser;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    const result = await model.deleteOne({ _id: userId });
    return result;
  } catch (error) {
    throw error;
  }
};

export const findUsersByRole = async (role) => {
  try {
    const users = await model.find({ role: role });
    return users;
  } catch (error) {
    throw error;
  }
};

export const findUsersByPartialName = async (partialName) => {
  try {
    const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
    const users = await model.find({
      $or: [
        { firstName: { $regex: regex } }, 
        { lastName: { $regex: regex } },
        { username: { $regex: regex } }
      ],
    });
    return users;
  } catch (error) {
    throw error;
  }
};
