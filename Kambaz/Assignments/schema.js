import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    _id: String,
    title: { type: String, required: true },
    course: { type: String, ref: "CourseModel", required: true },
    description: String,
    points: { type: Number, default: 100 },
    dueDate: Date,
    availableDate: Date,
    availableUntilDate: Date,
    submissionType: {
      type: String,
      enum: ["ONLINE", "ON_PAPER"],
      default: "ONLINE"
    },
    assignmentGroup: {
      type: String,
      enum: ["ASSIGNMENTS", "QUIZZES", "EXAMS", "PROJECT"],
      default: "ASSIGNMENTS"
    },
    displayGradeAs: {
      type: String,
      enum: ["POINTS", "PERCENTAGE", "LETTER_GRADE", "PASS_FAIL", "NOT_GRADED"],
      default: "POINTS"
    },
    published: { type: Boolean, default: false }
  },
  { collection: "assignments" }
);

export default assignmentSchema; 