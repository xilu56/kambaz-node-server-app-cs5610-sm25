import * as dao from "./dao.js";
import * as courseDao from "../Courses/dao.js";

export default function UserRoutes(app) {

  const createUser = (req, res) => {
    const user = dao.createUser(req.body);
    res.json(user);
  };

  const deleteUser = (req, res) => {
    const { userId } = req.params;
    dao.deleteUser(userId);
    res.sendStatus(200);
  };

  const findAllUsers = (req, res) => {
    const users = dao.findAllUsers();
    res.json(users);
  };

  const findUserById = (req, res) => {
    const { userId } = req.params;
    const user = dao.findUserById(userId);
    res.json(user);
  };

  const updateUser = (req, res) => {
    const userId = req.params.userId;
    const userUpdates = req.body;
    dao.updateUser(userId, userUpdates);
    const currentUser = dao.findUserById(userId);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
  };

  const signup = (req, res) => {
    const user = dao.findUserByUsername(req.body.username);
    if (user) {
      res.status(400).json({ message: "Username already taken" });
      return;
    }
    const currentUser = dao.createUser(req.body);
    req.session["currentUser"] = currentUser;
    res.json(currentUser);
  };

  const signin = (req, res) => {
    console.log("=== SIGNIN DEBUG ===");
    console.log("Origin:", req.headers.origin);
    console.log("User-Agent:", req.headers['user-agent']);
    console.log("Session ID before signin:", req.sessionID);
    console.log("Session data before signin:", req.session);
    console.log("Cookies sent by browser:", req.headers.cookie);
    
    const { username, password } = req.body;
    const currentUser = dao.findUserByCredentials(username, password);
    if (currentUser) {
      req.session["currentUser"] = currentUser;
      console.log("Session ID after signin:", req.sessionID);
      console.log("Session data after signin:", req.session);
      
      // Force session save and log response headers
      req.session.save((err) => {
        if (err) console.log("Session save error:", err);
        else console.log("Session saved successfully");
        
        console.log("Response headers being sent:", res.getHeaders());
        console.log("SUCCESS: User signed in successfully");
        res.json(currentUser);
      });
    } else {
      console.log("ERROR: Invalid credentials");
      res.status(401).json({ message: "Unable to login. Try again later." });
    }
  };

  const signout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  };

  const profile = (req, res) => {
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      res.sendStatus(401);
      return;
    }
    res.json(currentUser);
  };

  const updateProfile = (req, res) => {
    console.log("=== UPDATE PROFILE DEBUG ===");
    console.log("Session currentUser:", req.session["currentUser"]);
    console.log("Request body:", req.body);
    
    const currentUser = req.session["currentUser"];
    if (!currentUser) {
      console.log("ERROR: No current user in session");
      res.status(401).json({ message: "Not signed in" });
      return;
    }

    const { userId, ...updateData } = req.body;
    const userIdToUpdate = userId || currentUser._id;
    
    console.log("User ID to update:", userIdToUpdate);
    console.log("Update data:", updateData);
    
    // Update the user in the database
    const updatedUser = dao.updateUser(userIdToUpdate, updateData);
    console.log("Updated user result:", updatedUser);
    
    if (updatedUser) {
      // Update the session with the new user data
      req.session["currentUser"] = updatedUser;
      console.log("SUCCESS: Profile updated successfully");
      res.json(updatedUser);
    } else {
      console.log("ERROR: Failed to update user in DAO");
      res.status(400).json({ message: "Failed to update profile" });
    }
  };

  const findCoursesForEnrolledUser = (req, res) => {
    let { userId } = req.params;
    if (userId === "current") {
      const currentUser = req.session["currentUser"];
      if (!currentUser) {
        res.sendStatus(401);
        return;
      }
      userId = currentUser._id;
    }
    const courses = courseDao.findCoursesForEnrolledUser(userId);
    res.json(courses);
  };

  // Register routes - IMPORTANT: specific routes before parameterized routes
  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/profile", profile);
  app.put("/api/users/profile", updateProfile);
  app.get("/api/users/:userId/courses", findCoursesForEnrolledUser);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
} 