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

// Import database data
import Database from "./Kambaz/Database/index.js";
import CourseModel from "./Kambaz/Courses/model.js";
import ModuleModel from "./Kambaz/Modules/model.js";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING;
mongoose.connect(CONNECTION_STRING);

const app = express();
Hello(app);

// Initialize database with sample data
const initializeDatabase = async () => {
  try {
    // Check if data already exists
    const existingCourses = await CourseModel.countDocuments();
    const existingModules = await ModuleModel.countDocuments();
    
    console.log(`Found ${existingCourses} courses and ${existingModules} modules in database`);
    
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

// Configure CORS to allow both local development and production
const allowedOrigins = [
  'http://localhost:5173', // Local development frontend
  'https://kambaz-react-web-app-cs5610-sm25.netlify.app', // Production frontend
  'https://kambaz-react-web-app-cs5610-sm25.onrender.com', // Alternative production URL
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
    secure: false, // set to true in production with HTTPS
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

Lab5(app);
UserRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollmentRoutes(app);
CourseRoutes(app);

app.listen(process.env.PORT || 4000);