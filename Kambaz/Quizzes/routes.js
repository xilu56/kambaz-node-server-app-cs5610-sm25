import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  const findAllQuizzes = async (req, res) => {
    try {
      const quizzes = await dao.findAllQuizzes();
      res.json(quizzes);
    } catch (error) {
      console.error("Error fetching all quizzes:", error);
      res.status(500).json({ message: "Error fetching quizzes" });
    }
  };

  const findQuizById = async (req, res) => {
    try {
      const { quizId } = req.params;
      const quiz = await dao.findQuizById(quizId);
      if (quiz) {
        res.json(quiz);
      } else {
        res.status(404).json({ message: "Quiz not found" });
      }
    } catch (error) {
      console.error("Error fetching quiz:", error);
      res.status(500).json({ message: "Error fetching quiz" });
    }
  };

  const findQuizzesForCourse = async (req, res) => {
    try {
      const { courseId } = req.params;
      const quizzes = await dao.findQuizzesForCourse(courseId);
      res.json(quizzes);
    } catch (error) {
      console.error("Error fetching quizzes for course:", error);
      res.status(500).json({ message: "Error fetching quizzes" });
    }
  };

  const createQuiz = async (req, res) => {
    try {
      const quiz = await dao.createQuiz(req.body);
      res.json(quiz);
    } catch (error) {
      console.error("Error creating quiz:", error);
      res.status(500).json({ message: "Error creating quiz" });
    }
  };

  const createQuizForCourse = async (req, res) => {
    try {
      const { courseId } = req.params;
      const quiz = { ...req.body, course: courseId };
      const newQuiz = await dao.createQuiz(quiz);
      res.json(newQuiz);
    } catch (error) {
      console.error("Error creating quiz for course:", error);
      res.status(500).json({ message: "Error creating quiz" });
    }
  };

  const updateQuiz = async (req, res) => {
    try {
      const { quizId } = req.params;
      const updatedQuiz = await dao.updateQuiz(quizId, req.body);
      if (updatedQuiz) {
        res.json(updatedQuiz);
      } else {
        res.status(404).json({ message: "Quiz not found" });
      }
    } catch (error) {
      console.error("Error updating quiz:", error);
      res.status(500).json({ message: "Error updating quiz" });
    }
  };

  const deleteQuiz = async (req, res) => {
    try {
      const { quizId } = req.params;
      await dao.deleteQuiz(quizId);
      res.sendStatus(204);
    } catch (error) {
      console.error("Error deleting quiz:", error);
      res.status(500).json({ message: "Error deleting quiz" });
    }
  };

  // Question management routes
  const addQuestionToQuiz = async (req, res) => {
    try {
      const { quizId } = req.params;
      const quiz = await dao.addQuestionToQuiz(quizId, req.body);
      if (quiz) {
        res.json(quiz);
      } else {
        res.status(404).json({ message: "Quiz not found" });
      }
    } catch (error) {
      console.error("Error adding question:", error);
      res.status(500).json({ message: "Error adding question" });
    }
  };

  const updateQuestionInQuiz = async (req, res) => {
    try {
      const { quizId, questionId } = req.params;
      const quiz = await dao.updateQuestionInQuiz(quizId, questionId, req.body);
      if (quiz) {
        res.json(quiz);
      } else {
        res.status(404).json({ message: "Quiz or question not found" });
      }
    } catch (error) {
      console.error("Error updating question:", error);
      res.status(500).json({ message: "Error updating question" });
    }
  };

  const deleteQuestionFromQuiz = async (req, res) => {
    try {
      const { quizId, questionId } = req.params;
      const quiz = await dao.deleteQuestionFromQuiz(quizId, questionId);
      if (quiz) {
        res.json(quiz);
      } else {
        res.status(404).json({ message: "Quiz or question not found" });
      }
    } catch (error) {
      console.error("Error deleting question:", error);
      res.status(500).json({ message: "Error deleting question" });
    }
  };

  // Quiz attempt routes
  const submitQuizAttempt = async (req, res) => {
    try {
      const { quizId } = req.params;
      const currentUser = req.session["currentUser"];
      
      if (!currentUser) {
        res.status(401).json({ message: "User not authenticated" });
        return;
      }

      const { answers } = req.body;
      const attempt = await dao.submitQuizAttempt(quizId, currentUser._id, answers);
      
      if (attempt) {
        res.json(attempt);
      } else {
        res.status(404).json({ message: "Quiz not found" });
      }
    } catch (error) {
      console.error("Error submitting quiz attempt:", error);
      res.status(500).json({ message: "Error submitting quiz attempt" });
    }
  };

  const getQuizAttemptsForStudent = async (req, res) => {
    try {
      const { quizId } = req.params;
      const currentUser = req.session["currentUser"];
      
      if (!currentUser) {
        res.status(401).json({ message: "User not authenticated" });
        return;
      }

      const attempts = await dao.getQuizAttemptsForStudent(quizId, currentUser._id);
      res.json(attempts);
    } catch (error) {
      console.error("Error fetching quiz attempts:", error);
      res.status(500).json({ message: "Error fetching quiz attempts" });
    }
  };

  const getLatestAttemptForStudent = async (req, res) => {
    try {
      const { quizId } = req.params;
      const currentUser = req.session["currentUser"];
      
      if (!currentUser) {
        res.status(401).json({ message: "User not authenticated" });
        return;
      }

      const attempt = await dao.getLatestAttemptForStudent(quizId, currentUser._id);
      res.json(attempt);
    } catch (error) {
      console.error("Error fetching latest attempt:", error);
      res.status(500).json({ message: "Error fetching latest attempt" });
    }
  };

  // Register routes
  app.get("/api/quizzes", findAllQuizzes);
  app.get("/api/quizzes/:quizId", findQuizById);
  app.get("/api/courses/:courseId/quizzes", findQuizzesForCourse);
  app.post("/api/quizzes", createQuiz);
  app.post("/api/courses/:courseId/quizzes", createQuizForCourse);
  app.put("/api/quizzes/:quizId", updateQuiz);
  app.delete("/api/quizzes/:quizId", deleteQuiz);

  // Question management routes
  app.post("/api/quizzes/:quizId/questions", addQuestionToQuiz);
  app.put("/api/quizzes/:quizId/questions/:questionId", updateQuestionInQuiz);
  app.delete("/api/quizzes/:quizId/questions/:questionId", deleteQuestionFromQuiz);

  // Quiz attempt routes
  app.post("/api/quizzes/:quizId/attempts", submitQuizAttempt);
  app.get("/api/quizzes/:quizId/attempts", getQuizAttemptsForStudent);
  app.get("/api/quizzes/:quizId/attempts/latest", getLatestAttemptForStudent);
} 