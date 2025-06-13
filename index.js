import express from "express";
import Lab5 from "./Lab5/index.js";
import Hello from "./Hello.js";
import cors from "cors";
import UserRoutes from "./Kambaz/Users/routes.js";
import ModuleRoutes from "./Kambaz/Modules/routes.js";
import AssignmentRoutes from "./Kambaz/Assignments/routes.js";
import EnrollmentRoutes from "./Kambaz/Enrollments/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
const app = express();
Hello(app);
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
Lab5(app);
UserRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollmentRoutes(app);
CourseRoutes(app);
app.listen(process.env.PORT)
