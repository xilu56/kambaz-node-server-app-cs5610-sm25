import express from "express";
import Lab5 from "./Lab5/index.js";
import Hello from "./Hello.js";
import cors from "cors";
const app = express();
Hello(app);
app.use(cors());
app.use(express.json());
Lab5(app);
app.listen(process.env.PORT || 4000)
