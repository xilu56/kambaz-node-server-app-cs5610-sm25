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

// Add session debugging middleware
app.use((req, res, next) => {
  console.log("=== REQUEST DEBUG ===");
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Origin:", req.headers.origin);
  console.log("Incoming cookies:", req.headers.cookie);
  
  // Parse cookie manually to see session ID
  if (req.headers.cookie) {
    const cookies = req.headers.cookie.split(';').reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split('=');
      acc[key] = value;
      return acc;
    }, {});
    console.log("Parsed cookies:", cookies);
    console.log("Expected session ID from cookie:", cookies['kambaz.sid']);
  }
  
  next();
});

app.use(session({
  secret: process.env.SESSION_SECRET || "kambaz-secret-key",
  name: "kambaz.sid", // Custom session name
  resave: true, // Force session save
  saveUninitialized: true, // Changed to true to ensure cookie is set
  cookie: {
    secure: true, // MUST be true for SameSite=none
    httpOnly: false, // Keep false for debugging
    sameSite: "none", // Required for cross-site cookies
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    path: "/", // Explicit path
    domain: undefined // Let browser decide
  },
  // Add store debugging
  store: new session.MemoryStore(),
  // Add genid function to debug session ID generation
  genid: (req) => {
    const cookieSessionId = req.headers.cookie && req.headers.cookie.split(';').find(c => c.trim().startsWith('kambaz.sid='));
    if (cookieSessionId) {
      const sessionId = cookieSessionId.split('=')[1];
      console.log("Using existing session ID from cookie:", sessionId);
      return sessionId;
    }
    const newId = require('uuid').v4();
    console.log("Generated new session ID:", newId);
    return newId;
  }
}));

// Add session restoration debugging
app.use((req, res, next) => {
  console.log("=== SESSION RESTORATION DEBUG ===");
  console.log("Session ID assigned:", req.sessionID);
  console.log("Session data loaded:", req.session);
  console.log("Current user in session:", req.session ? req.session.currentUser : 'no session');
  next();
});

// Add response debugging middleware
app.use((req, res, next) => {
  const originalSend = res.send;
  res.send = function(data) {
    console.log("=== RESPONSE DEBUG ===");
    console.log("Status:", res.statusCode);
    console.log("Response headers:", res.getHeaders());
    console.log("Session ID:", req.sessionID);
    console.log("Session exists:", !!req.session);
    return originalSend.call(this, data);
  };
  next();
});
Lab5(app);
UserRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollmentRoutes(app);
CourseRoutes(app);
app.listen(process.env.PORT)
