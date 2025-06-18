export default [
  {
    "_id": "Q101",
    "title": "Rocket Propulsion Basics",
    "course": "RS101",
    "description": "Fundamental concepts of rocket propulsion systems",
    "quizType": "Graded Quiz",
    "points": 15,
    "assignmentGroup": "QUIZZES",
    "shuffleAnswers": true,
    "timeLimit": 30,
    "multipleAttempts": false,
    "howManyAttempts": 1,
    "showCorrectAnswers": "Immediately",
    "accessCode": "",
    "oneQuestionAtATime": true,
    "webcamRequired": false,
    "lockQuestionsAfterAnswering": false,
    "published": true,
    "dueDate": new Date("2025-05-15T23:59:00"),
    "availableDate": new Date("2025-05-01T00:00:00"),
    "untilDate": new Date("2025-05-15T23:59:00"),
    "questions": [
      {
        "_id": "Q101Q1",
        "type": "Multiple Choice",
        "title": "Rocket Thrust Equation",
        "points": 5,
        "questionText": "What is the fundamental equation that describes rocket thrust?",
        "choices": [
          { "text": "F = ma", "isCorrect": false },
          { "text": "F = ṁve + (pe - pa)Ae", "isCorrect": true },
          { "text": "F = mv²/r", "isCorrect": false },
          { "text": "F = GMm/r²", "isCorrect": false }
        ]
      },
      {
        "_id": "Q101Q2",
        "type": "True/False",
        "title": "Specific Impulse",
        "points": 5,
        "questionText": "Specific impulse is measured in units of time (seconds).",
        "answer": true
      },
      {
        "_id": "Q101Q3",
        "type": "Fill in the Blank",
        "title": "Rocket Performance",
        "points": 5,
        "questionText": "The efficiency of a rocket engine is often measured by its _____ impulse.",
        "correctAnswers": ["specific", "Specific"]
      }
    ],
    "attempts": []
  },
  {
    "_id": "Q102",
    "title": "Combustion Chamber Design",
    "course": "RS101",
    "description": "Understanding combustion processes in rocket engines",
    "quizType": "Practice Quiz",
    "points": 10,
    "assignmentGroup": "QUIZZES",
    "shuffleAnswers": false,
    "timeLimit": 20,
    "multipleAttempts": true,
    "howManyAttempts": 3,
    "showCorrectAnswers": "After due date",
    "accessCode": "",
    "oneQuestionAtATime": false,
    "webcamRequired": false,
    "lockQuestionsAfterAnswering": false,
    "published": false,
    "dueDate": new Date("2025-05-20T23:59:00"),
    "availableDate": new Date("2025-05-05T00:00:00"),
    "untilDate": new Date("2025-05-20T23:59:00"),
    "questions": [
      {
        "_id": "Q102Q1",
        "type": "Multiple Choice",
        "title": "Combustion Temperature",
        "points": 5,
        "questionText": "What factors affect combustion chamber temperature?",
        "choices": [
          { "text": "Fuel type only", "isCorrect": false },
          { "text": "Oxidizer type only", "isCorrect": false },
          { "text": "Fuel-to-oxidizer ratio", "isCorrect": true },
          { "text": "Chamber size only", "isCorrect": false }
        ]
      },
      {
        "_id": "Q102Q2",
        "type": "True/False",
        "title": "Chamber Pressure",
        "points": 5,
        "questionText": "Higher chamber pressure always leads to better engine performance.",
        "answer": false
      }
    ],
    "attempts": []
  },
  {
    "_id": "Q201",
    "title": "Aerodynamics Fundamentals",
    "course": "RS102",
    "description": "Basic principles of aerodynamics and flow analysis",
    "quizType": "Graded Quiz",
    "points": 20,
    "assignmentGroup": "QUIZZES",
    "shuffleAnswers": true,
    "timeLimit": 45,
    "multipleAttempts": false,
    "howManyAttempts": 1,
    "showCorrectAnswers": "Immediately",
    "accessCode": "",
    "oneQuestionAtATime": true,
    "webcamRequired": false,
    "lockQuestionsAfterAnswering": true,
    "published": true,
    "dueDate": new Date("2025-06-05T23:59:00"),
    "availableDate": new Date("2025-06-01T00:00:00"),
    "untilDate": new Date("2025-06-05T23:59:00"),
    "questions": [
      {
        "_id": "Q201Q1",
        "type": "Multiple Choice",
        "title": "Bernoulli's Equation",
        "points": 7,
        "questionText": "Bernoulli's equation relates which of the following?",
        "choices": [
          { "text": "Pressure, velocity, and elevation", "isCorrect": true },
          { "text": "Force, mass, and acceleration", "isCorrect": false },
          { "text": "Temperature and pressure only", "isCorrect": false },
          { "text": "Velocity and time", "isCorrect": false }
        ]
      },
      {
        "_id": "Q201Q2",
        "type": "Fill in the Blank",
        "title": "Reynolds Number",
        "points": 6,
        "questionText": "The Reynolds number is used to predict flow regime and is defined as ρVL/μ where μ represents _____.",
        "correctAnswers": ["viscosity", "dynamic viscosity", "Viscosity"]
      },
      {
        "_id": "Q201Q3",
        "type": "True/False",
        "title": "Supersonic Flow",
        "points": 7,
        "questionText": "In supersonic flow, disturbances can propagate upstream.",
        "answer": false
      }
    ],
    "attempts": []
  },
  {
    "_id": "Q301",
    "title": "Spacecraft Systems",
    "course": "RS103",
    "description": "Overview of spacecraft subsystems and integration",
    "quizType": "Graded Quiz",
    "points": 25,
    "assignmentGroup": "QUIZZES",
    "shuffleAnswers": true,
    "timeLimit": 60,
    "multipleAttempts": true,
    "howManyAttempts": 2,
    "showCorrectAnswers": "Immediately",
    "accessCode": "SPACE2025",
    "oneQuestionAtATime": true,
    "webcamRequired": true,
    "lockQuestionsAfterAnswering": false,
    "published": true,
    "dueDate": new Date("2025-07-01T23:59:00"),
    "availableDate": new Date("2025-06-20T00:00:00"),
    "untilDate": new Date("2025-07-01T23:59:00"),
    "questions": [
      {
        "_id": "Q301Q1",
        "type": "Multiple Choice",
        "title": "Power Systems",
        "points": 8,
        "questionText": "Which is the most common power source for deep space missions?",
        "choices": [
          { "text": "Solar panels", "isCorrect": false },
          { "text": "Radioisotope thermoelectric generators (RTGs)", "isCorrect": true },
          { "text": "Fuel cells", "isCorrect": false },
          { "text": "Batteries", "isCorrect": false }
        ]
      },
      {
        "_id": "Q301Q2",
        "type": "Fill in the Blank",
        "title": "Communication Systems",
        "points": 9,
        "questionText": "Deep space communication often uses _____ frequency bands for better signal penetration.",
        "correctAnswers": ["X-band", "X", "x-band", "x"]
      },
      {
        "_id": "Q301Q3",
        "type": "True/False",
        "title": "Attitude Control",
        "points": 8,
        "questionText": "Reaction wheels can be used for spacecraft attitude control without expending propellant.",
        "answer": true
      }
    ],
    "attempts": []
  }
]; 