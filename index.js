import express from "express";
import Lab5 from "./Lab5/index.js";
import Hello from "./Hello.js";
import cors from "cors";
import session from "express-session";
import mongoose from "mongoose";
import UserRoutes from "./Kambaz/Users/routes.js";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import AssignmentRoutes from "./Kambaz/Assignments/routes.js";
import EnrollmentRoutes from "./Kambaz/Enrollments/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import "dotenv/config";


// Import database data
import Database from "./Kambaz/Database/index.js";
import CourseModel from "./Kambaz/Courses/model.js";
import ModuleModel from "./Kambaz/Modules/model.js";
import EnrollmentModel from "./Kambaz/Enrollments/model.js";
import UserModel from "./Kambaz/Users/model.js";
import AssignmentModel from "./Kambaz/Assignments/model.js";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;

// Add connection options for production
const connectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
  socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
};

mongoose.connect(CONNECTION_STRING, connectionOptions);

const app = express();
Hello(app);

// Initialize database with sample data
const initializeDatabase = async () => {
  try {
    // Check if data already exists
    const existingCourses = await CourseModel.countDocuments();
    const existingModules = await ModuleModel.countDocuments();
    const existingUsers = await UserModel.countDocuments();
    const existingEnrollments = await EnrollmentModel.countDocuments();
    const existingAssignments = await AssignmentModel.countDocuments();
    
    console.log(`Found ${existingCourses} courses, ${existingModules} modules, ${existingUsers} users, ${existingEnrollments} enrollments, ${existingAssignments} assignments in database`);
    
    // Only initialize if database is empty
    if (existingCourses === 0) {
      console.log("Initializing courses...");
      await CourseModel.insertMany(Database.courses);
      console.log(`Inserted ${Database.courses.length} courses`);
    }
    
    if (existingModules === 0) {
      console.log("Initializing modules...");
      await ModuleModel.insertMany(Database.modules);
      console.log(`Inserted ${Database.modules.length} modules`);
    }
    
    if (existingUsers === 0) {
      console.log("Initializing users...");
      await UserModel.insertMany(Database.users);
      console.log(`Inserted ${Database.users.length} users`);
    }
    
    if (existingEnrollments === 0) {
      console.log("Initializing enrollments...");
      await EnrollmentModel.insertMany(Database.enrollments);
      console.log(`Inserted ${Database.enrollments.length} enrollments`);
    }
    
    if (existingAssignments === 0) {
      console.log("Initializing assignments...");
      await AssignmentModel.insertMany(Database.assignments);
      console.log(`Inserted ${Database.assignments.length} assignments`);
    }
    
    console.log("Database initialization complete");
  } catch (error) {
    console.error("Error initializing database:", error);
  }
};

// Initialize database after connection
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  initializeDatabase();
});

// Add error handling for MongoDB connection
mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

// Configure CORS to allow both local development and production
const allowedOrigins = [
  'http://localhost:5173', // Local development frontend
  'https://kambaz-react-web-app-cs5610-sm25.netlify.app', // Production frontend
  'https://a6--kambaz-react-web-app-cs5610-sm25.netlify.app/', // Alternative production URL
  /^https:\/\/.*\.netlify\.app$/, // Any Netlify subdomain
  /^https:\/\/.*--kambaz-react-web-app-cs5610-sm25\.netlify\.app$/ // Netlify branch deploys
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json());
app.use(session({
  secret: "kambaz-secret-key",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === "production", // set to true in production with HTTPS
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

Lab5(app);

// Register routes in specific order to avoid conflicts
console.log("Registering routes...");
UserRoutes(app);
console.log("User routes registered");

EnrollmentRoutes(app);
console.log("Enrollment routes registered");

AssignmentRoutes(app);
console.log("Assignment routes registered");

ModuleRoutes(app);
console.log("Module routes registered");

CourseRoutes(app);
console.log("Course routes registered");

app.listen(process.env.PORT || 4000);