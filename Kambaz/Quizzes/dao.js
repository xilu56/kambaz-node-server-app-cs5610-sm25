import model from "./model.js";

export const findAllQuizzes = async () => {
  const quizzes = await model.find();
  return quizzes;
};

export const findQuizById = async (quizId) => {
  const quiz = await model.findById(quizId);
  return quiz;
};

export const findQuizzesForCourse = async (courseId) => {
  const quizzes = await model.find({ course: courseId });
  return quizzes;
};

export const createQuiz = async (quiz) => {
  // Generate ID if not provided
  if (!quiz._id) {
    quiz._id = new Date().getTime().toString();
  }
  // Initialize empty questions array if not provided
  if (!quiz.questions) {
    quiz.questions = [];
  }
  // Calculate total points based on questions
  quiz.points = quiz.questions.reduce((total, question) => total + (question.points || 0), 0);
  
  const newQuiz = await model.create(quiz);
  return newQuiz;
};

export const updateQuiz = async (quizId, quizUpdates) => {
  // Recalculate points if questions are updated
  if (quizUpdates.questions) {
    quizUpdates.points = quizUpdates.questions.reduce((total, question) => total + (question.points || 0), 0);
  }
  
  const updatedQuiz = await model.findByIdAndUpdate(
    quizId,
    { $set: quizUpdates },
    { new: true, runValidators: true }
  );
  return updatedQuiz;
};

export const deleteQuiz = async (quizId) => {
  const result = await model.deleteOne({ _id: quizId });
  return result;
};

// Question management
export const addQuestionToQuiz = async (quizId, question) => {
  if (!question._id) {
    question._id = new Date().getTime().toString();
  }
  
  const quiz = await model.findByIdAndUpdate(
    quizId,
    { 
      $push: { questions: question },
      $inc: { points: question.points || 0 }
    },
    { new: true }
  );
  return quiz;
};

export const updateQuestionInQuiz = async (quizId, questionId, questionUpdates) => {
  const quiz = await model.findById(quizId);
  if (!quiz) return null;
  
  const questionIndex = quiz.questions.findIndex(q => q._id === questionId);
  if (questionIndex === -1) return null;
  
  const oldPoints = quiz.questions[questionIndex].points || 0;
  const newPoints = questionUpdates.points || 0;
  
  quiz.questions[questionIndex] = { ...quiz.questions[questionIndex].toObject(), ...questionUpdates };
  quiz.points = quiz.points - oldPoints + newPoints;
  
  await quiz.save();
  return quiz;
};

export const deleteQuestionFromQuiz = async (quizId, questionId) => {
  const quiz = await model.findById(quizId);
  if (!quiz) return null;
  
  const questionToDelete = quiz.questions.find(q => q._id === questionId);
  if (!questionToDelete) return null;
  
  quiz.questions = quiz.questions.filter(q => q._id !== questionId);
  quiz.points = quiz.points - (questionToDelete.points || 0);
  
  await quiz.save();
  return quiz;
};

// Quiz attempt management
export const submitQuizAttempt = async (quizId, studentId, answers) => {
  const quiz = await model.findById(quizId);
  if (!quiz) return null;
  
  // Calculate score
  let score = 0;
  const processedAnswers = [];
  
  for (const answer of answers) {
    const question = quiz.questions.find(q => q._id === answer.questionId);
    if (!question) continue;
    
    let isCorrect = false;
    let points = 0;
    
    if (question.type === "Multiple Choice") {
      const correctChoice = question.choices.find(c => c.isCorrect);
      isCorrect = correctChoice && correctChoice.text === answer.answer;
    } else if (question.type === "True/False") {
      isCorrect = question.answer === answer.answer;
    } else if (question.type === "Fill in the Blank") {
      isCorrect = question.correctAnswers.some(correct => 
        correct.toLowerCase().trim() === answer.answer.toLowerCase().trim()
      );
    }
    
    if (isCorrect) {
      points = question.points || 0;
      score += points;
    }
    
    processedAnswers.push({
      questionId: answer.questionId,
      answer: answer.answer,
      isCorrect,
      points
    });
  }
  
  // Get current attempt number
  const existingAttempts = quiz.attempts.filter(a => a.student === studentId);
  const attemptNumber = existingAttempts.length + 1;
  
  const attempt = {
    _id: new Date().getTime().toString(),
    student: studentId,
    quiz: quizId,
    answers: processedAnswers,
    score,
    totalPoints: quiz.points,
    submittedAt: new Date(),
    attemptNumber
  };
  
  quiz.attempts.push(attempt);
  await quiz.save();
  
  return attempt;
};

export const getQuizAttemptsForStudent = async (quizId, studentId) => {
  const quiz = await model.findById(quizId);
  if (!quiz) return [];
  
  return quiz.attempts.filter(attempt => attempt.student === studentId);
};

export const getLatestAttemptForStudent = async (quizId, studentId) => {
  const attempts = await getQuizAttemptsForStudent(quizId, studentId);
  if (attempts.length === 0) return null;
  
  return attempts.sort((a, b) => b.attemptNumber - a.attemptNumber)[0];
}; 