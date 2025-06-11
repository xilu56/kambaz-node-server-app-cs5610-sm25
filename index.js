import "dotenv/config";
import express from "express";
import session from "express-session";
import cors from "cors";

// Import routes (make sure these files exist and paths are correct)
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import AssignmentRoutes from "./Kambaz/Assignments/routes.js";
import EnrollmentRoutes from "./Kambaz/Enrollments/routes.js";

const app = express();

// ✅ CORS: allow credentials and specific origins
const allowedOrigins = [
  process.env.NETLIFY_URL,
  process.env.RENDER_FRONTEND_URL || "https://kambaz-react-web-app-cs5610-sm25.onrender.com",
  "http://localhost:5173",
  "http://localhost:4000",
  "http://localhost:3000"
].filter(Boolean);

app.use(cors({
  credentials: true,
  origin: allowedOrigins,
}));

// ✅ Session config
const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kambaz",
  resave: false,
  saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN, // no protocol
  };
}

app.use(session(sessionOptions));

// ✅ JSON body parser
app.use(express.json());

// ✅ Route registration
Hello(app);
Lab5(app); // make sure Lab5.js exports a function: (app) => { ... }
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollmentRoutes(app);

// ✅ Port setup
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
