import mongoose from "mongoose";

const choiceSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, default: false }
}, { _id: false });

const questionSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  type: { 
    type: String, 
    enum: ["Multiple Choice", "True/False", "Fill in the Blank"],
    required: true
  },
  title: { type: String, required: true },
  points: { type: Number, default: 1 },
  questionText: { type: String, required: true },
  // For Multiple Choice questions
  choices: [choiceSchema],
  // For True/False questions
  answer: Boolean,
  // For Fill in the Blank questions
  correctAnswers: [String]
}, { _id: false });

const quizAttemptSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  student: { type: String, ref: "UserModel", required: true },
  quiz: { type: String, ref: "QuizModel", required: true },
  answers: [{
    questionId: String,
    answer: mongoose.Schema.Types.Mixed, // Can be string, boolean, or array
    isCorrect: Boolean,
    points: Number
  }],
  score: { type: Number, default: 0 },
  totalPoints: { type: Number, default: 0 },
  startedAt: { type: Date, default: Date.now },
  submittedAt: Date,
  attemptNumber: { type: Number, default: 1 }
}, { _id: false });

const quizSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  course: { type: String, ref: "CourseModel", required: true },
  description: String,
  quizType: { 
    type: String, 
    enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
    default: "Graded Quiz"
  },
  points: { type: Number, default: 0 },
  assignmentGroup: {
    type: String,
    enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECT"],
    default: "QUIZZES"
  },
  shuffleAnswers: { type: Boolean, default: true },
  timeLimit: { type: Number, default: 20 }, // in minutes
  multipleAttempts: { type: Boolean, default: false },
  howManyAttempts: { type: Number, default: 1 },
  showCorrectAnswers: {
    type: String,
    enum: ["Immediately", "After due date", "Never"],
    default: "Immediately"
  },
  accessCode: String,
  oneQuestionAtATime: { type: Boolean, default: true },
  webcamRequired: { type: Boolean, default: false },
  lockQuestionsAfterAnswering: { type: Boolean, default: false },
  published: { type: Boolean, default: false },
  dueDate: Date,
  availableDate: Date,
  untilDate: Date,
  questions: [questionSchema],
  attempts: [quizAttemptSchema]
}, { 
  collection: "quizzes",
  strict: false 
});

export default quizSchema; 