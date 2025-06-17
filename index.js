import express from "express";
import Lab5 from "./Lab5/index.js";
import Hello from "./Hello.js";
import cors from "cors";
import session from "express-session";
import UserRoutes from "./Kambaz/Users/routes.js";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import AssignmentRoutes from "./Kambaz/Assignments/routes.js";
import EnrollmentRoutes from "./Kambaz/Enrollments/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
const app = express();
Hello(app);

// Configure CORS to allow both local development and production
const allowedOrigins = [
  'http://localhost:5173', // Local development frontend
  'https://kambaz-react-web-app-cs5610-sm25.netlify.app', // Production frontend
  'https://a5--kambaz-react-web-app-cs5610-sm25.netlify.app', // Alternative production URL
  /^https:\/\/.*\.netlify\.app$/, // Any Netlify subdomain
  /^https:\/\/.*--kambaz-react-web-app-cs5610-sm25\.netlify\.app$/ // Netlify branch deploys
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
app.use(express.json());
// Check if running in production environment  
const isProduction = process.env.NODE_ENV === "production" || process.env.RENDER || process.env.PORT;

console.log("=== SESSION CONFIG DEBUG ===");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("RENDER:", process.env.RENDER);
console.log("PORT:", process.env.PORT);
console.log("isProduction:", isProduction);

app.use(session({
  secret: process.env.SESSION_SECRET || "kambaz-secret-key",
  resave: false,
  saveUninitialized: true, // Changed to true to ensure cookie is set
  cookie: {
    secure: false, // Temporarily disabled for debugging
    httpOnly: false, // Changed to false for debugging
    sameSite: "lax", // Temporarily changed from "none"
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    domain: undefined // Let browser decide
  }
}));
Lab5(app);
UserRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollmentRoutes(app);
CourseRoutes(app);
app.listen(process.env.PORT)
