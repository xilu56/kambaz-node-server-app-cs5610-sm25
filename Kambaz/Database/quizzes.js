export default [
  {
    "_id": "Q101",
    "title": "Q1 - Rocket Fundamentals",
    "course": "RS101",
    "description": "Basic concepts of rocket propulsion",
    "quizType": "Graded Quiz",
    "points": 29,
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
    "dueDate": new Date("2024-09-21T13:00:00"),
    "availableDate": new Date("2024-09-21T11:40:00"),
    "untilDate": new Date("2024-09-21T13:00:00"),
    "questions": [
      {
        "_id": "Q101Q1",
        "type": "Multiple Choice",
        "title": "Rocket Thrust Equation",
        "points": 10,
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
        "points": 9,
        "questionText": "Specific impulse is measured in units of time (seconds).",
        "answer": true
      },
      {
        "_id": "Q101Q3",
        "type": "Fill in the Blank",
        "title": "Rocket Performance",
        "points": 10,
        "questionText": "The efficiency of a rocket engine is often measured by its _____ impulse.",
        "correctAnswers": ["specific", "Specific"]
      }
    ],
    "attempts": []
  },
  {
    "_id": "Q102",
    "title": "Q2 - Propulsion Systems",
    "course": "RS101",
    "description": "Understanding combustion processes in rocket engines",
    "quizType": "Graded Quiz", 
    "points": 32,
    "assignmentGroup": "QUIZZES",
    "shuffleAnswers": false,
    "timeLimit": 20,
    "multipleAttempts": false,
    "howManyAttempts": 1,
    "showCorrectAnswers": "Immediately",
    "accessCode": "",
    "oneQuestionAtATime": false,
    "webcamRequired": false,
    "lockQuestionsAfterAnswering": false,
    "published": true,
    "dueDate": new Date("2024-10-05T17:00:00"),
    "availableDate": new Date("2024-09-20T00:00:00"),
    "untilDate": new Date("2024-10-05T17:00:00"),
    "questions": [
      {
        "_id": "Q102Q1",
        "type": "Multiple Choice",
        "title": "Combustion Temperature",
        "points": 16,
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
        "points": 16,
        "questionText": "Higher chamber pressure always leads to better engine performance.",
        "answer": false
      }
    ],
    "attempts": []
  },
  {
    "_id": "Q103",
    "title": "EXAM 1 RS 101",
    "course": "RS101",
    "description": "Comprehensive exam covering propulsion fundamentals",
    "quizType": "Graded Quiz",
    "points": 113,
    "assignmentGroup": "EXAMS",
    "shuffleAnswers": true,
    "timeLimit": 90,
    "multipleAttempts": false,
    "howManyAttempts": 1,
    "showCorrectAnswers": "Never",
    "accessCode": "",
    "oneQuestionAtATime": true,
    "webcamRequired": true,
    "lockQuestionsAfterAnswering": true,
    "published": true,
    "dueDate": new Date("2024-10-26T17:30:00"),
    "availableDate": new Date("2024-10-26T15:00:00"),
    "untilDate": new Date("2024-10-26T17:30:00"),
    "questions": [
      {
        "_id": "Q103Q1",
        "type": "Multiple Choice",
        "title": "Rocket Equations",
        "points": 25,
        "questionText": "Which equation describes the relationship between thrust and mass flow rate?",
        "choices": [
          { "text": "F = ṁve", "isCorrect": true },
          { "text": "F = ma", "isCorrect": false },
          { "text": "F = mv/t", "isCorrect": false },
          { "text": "F = ρvA", "isCorrect": false }
        ]
      },
      {
        "_id": "Q103Q2",
        "type": "Fill in the Blank",
        "title": "Specific Impulse Definition",
        "points": 44,
        "questionText": "Specific impulse is defined as thrust divided by _____ flow rate.",
        "correctAnswers": ["mass", "weight", "Mass", "Weight"]
      },
      {
        "_id": "Q103Q3",
        "type": "True/False",
        "title": "Rocket Performance",
        "points": 44,
        "questionText": "Higher exhaust velocity always results in better rocket performance.",
        "answer": true
      }
    ],
    "attempts": []
  },
  {
    "_id": "Q201",
    "title": "Q3 - Fluid Dynamics", 
    "course": "RS102",
    "description": "Basic principles of aerodynamics and flow analysis",
    "quizType": "Graded Quiz",
    "points": 38,
    "assignmentGroup": "QUIZZES",
    "shuffleAnswers": true,
    "timeLimit": 45,
    "multipleAttempts": true,
    "howManyAttempts": 2,
    "showCorrectAnswers": "Immediately",
    "accessCode": "",
    "oneQuestionAtATime": true,
    "webcamRequired": false,
    "lockQuestionsAfterAnswering": false,
    "published": true,
    "dueDate": new Date("2024-11-15T23:59:00"),
    "availableDate": new Date("2024-11-01T00:00:00"),
    "untilDate": new Date("2024-11-15T23:59:00"),
    "questions": [
      {
        "_id": "Q201Q1",
        "type": "Multiple Choice",
        "title": "Bernoulli's Equation",
        "points": 13,
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
        "points": 12,
        "questionText": "The Reynolds number is used to predict flow regime and is defined as ρVL/μ where μ represents _____.",
        "correctAnswers": ["viscosity", "dynamic viscosity", "Viscosity"]
      },
      {
        "_id": "Q201Q3",
        "type": "True/False",
        "title": "Supersonic Flow",
        "points": 13,
        "questionText": "In supersonic flow, disturbances can propagate upstream.",
        "answer": false
      }
    ],
    "attempts": []
  },
  {
    "_id": "Q202",
    "title": "Q3 - Advanced Aerodynamics",
    "course": "RS102", 
    "description": "Advanced concepts in aerodynamic analysis",
    "quizType": "Graded Quiz",
    "points": 31,
    "assignmentGroup": "QUIZZES",
    "shuffleAnswers": true,
    "timeLimit": 40,
    "multipleAttempts": false,
    "howManyAttempts": 1,
    "showCorrectAnswers": "Immediately",
    "accessCode": "",
    "oneQuestionAtATime": true,
    "webcamRequired": false,
    "lockQuestionsAfterAnswering": false,
    "published": true,
    "dueDate": new Date("2024-12-01T23:59:00"),
    "availableDate": new Date("2024-11-20T00:00:00"),
    "untilDate": new Date("2024-12-01T23:59:00"),
    "questions": [
      {
        "_id": "Q202Q1",
        "type": "Multiple Choice",
        "title": "Shock Waves",
        "points": 15,
        "questionText": "What happens to pressure across a normal shock wave?",
        "choices": [
          { "text": "Pressure decreases", "isCorrect": false },
          { "text": "Pressure increases", "isCorrect": true },
          { "text": "Pressure remains constant", "isCorrect": false },
          { "text": "Pressure oscillates", "isCorrect": false }
        ]
      },
      {
        "_id": "Q202Q2",
        "type": "True/False",
        "title": "Compressible Flow",
        "points": 16,
        "questionText": "Mach number is the ratio of flow velocity to the speed of sound.",
        "answer": true
      }
    ],
    "attempts": []
  },
  {
    "_id": "Q301",
    "title": "Q4 - Spacecraft Systems",
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
    "accessCode": "",
    "oneQuestionAtATime": true,
    "webcamRequired": false,
    "lockQuestionsAfterAnswering": false,
    "published": true,
    "dueDate": new Date("2024-11-20T15:30:00"),
    "availableDate": new Date("2024-11-15T00:00:00"),
    "untilDate": new Date("2024-11-20T15:30:00"),
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
  },
  {
    "_id": "Q302",
    "title": "Q5 - Mission Planning",
    "course": "RS103",
    "description": "Orbital mechanics and mission design",
    "quizType": "Graded Quiz",
    "points": 38,
    "assignmentGroup": "QUIZZES",
    "shuffleAnswers": false,
    "timeLimit": 45,
    "multipleAttempts": false,
    "howManyAttempts": 1,
    "showCorrectAnswers": "Immediately",
    "accessCode": "",
    "oneQuestionAtATime": true,
    "webcamRequired": false,
    "lockQuestionsAfterAnswering": false,
    "published": true,
    "dueDate": new Date("2024-11-30T11:40:00"),
    "availableDate": new Date("2024-11-25T00:00:00"),
    "untilDate": new Date("2024-11-30T13:00:00"),
    "questions": [
      {
        "_id": "Q302Q1",
        "type": "Multiple Choice",
        "title": "Orbital Mechanics",
        "points": 19,
        "questionText": "What is the minimum velocity needed to escape Earth's gravitational field?",
        "choices": [
          { "text": "7.9 km/s", "isCorrect": false },
          { "text": "11.2 km/s", "isCorrect": true },
          { "text": "15.0 km/s", "isCorrect": false },
          { "text": "25.0 km/s", "isCorrect": false }
        ]
      },
      {
        "_id": "Q302Q2",
        "type": "True/False",
        "title": "Hohmann Transfer",
        "points": 19,
        "questionText": "A Hohmann transfer orbit is the most energy-efficient way to transfer between two circular orbits.",
        "answer": true
      }
    ],
    "attempts": []
  },
  {
    "_id": "Q303",
    "title": "EXAM 2 RS 103",
    "course": "RS103",
    "description": "Final exam covering all spacecraft design topics",
    "quizType": "Graded Quiz",
    "points": 104,
    "assignmentGroup": "EXAMS",
    "shuffleAnswers": true,
    "timeLimit": 120,
    "multipleAttempts": false,
    "howManyAttempts": 1,
    "showCorrectAnswers": "Never",
    "accessCode": "",
    "oneQuestionAtATime": true,
    "webcamRequired": true,
    "lockQuestionsAfterAnswering": true,
    "published": true,
    "dueDate": new Date("2024-12-15T10:30:00"),
    "availableDate": new Date("2024-12-15T08:00:00"),
    "untilDate": new Date("2024-12-15T10:30:00"),
    "questions": [
      {
        "_id": "Q303Q1",
        "type": "Multiple Choice",
        "title": "Spacecraft Design",
        "points": 35,
        "questionText": "Which factor is most critical in spacecraft thermal design?",
        "choices": [
          { "text": "Mass", "isCorrect": false },
          { "text": "Heat dissipation", "isCorrect": true },
          { "text": "Color", "isCorrect": false },
          { "text": "Shape", "isCorrect": false }
        ]
      },
      {
        "_id": "Q303Q2",
        "type": "Fill in the Blank",
        "title": "Propulsion Systems",
        "points": 34,
        "questionText": "Ion thrusters provide high _____ but low thrust.",
        "correctAnswers": ["specific impulse", "efficiency", "Specific impulse", "Efficiency"]
      },
      {
        "_id": "Q303Q3",
        "type": "True/False",
        "title": "Satellite Operations",
        "points": 35,
        "questionText": "Geostationary satellites orbit at approximately 35,786 km above Earth's equator.",
        "answer": true
      }
    ],
    "attempts": []
  },

  {
    "_id": "Q401",
    "title": "Q1 - HTML Basic Structures",
    "course": "RS104",
    "description": "Fundamental concepts of HTML and web development",
    "quizType": "Graded Quiz",
    "points": 29,
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
    "dueDate": new Date("2024-09-21T13:00:00"),
    "availableDate": new Date("2024-09-21T11:40:00"),
    "untilDate": new Date("2024-09-21T13:00:00"),
    "questions": [
      {
        "_id": "Q401Q1",
        "type": "Multiple Choice",
        "title": "HTML Tags",
        "points": 10,
        "questionText": "Which tag is used to create a hyperlink in HTML?",
        "choices": [
          { "text": "<link>", "isCorrect": false },
          { "text": "<a>", "isCorrect": true },
          { "text": "<href>", "isCorrect": false },
          { "text": "<url>", "isCorrect": false }
        ]
      },
      {
        "_id": "Q401Q2",
        "type": "True/False",
        "title": "HTML Structure",
        "points": 9,
        "questionText": "HTML elements must always have closing tags.",
        "answer": false
      },
      {
        "_id": "Q401Q3",
        "type": "Fill in the Blank",
        "title": "HTML Attributes",
        "points": 10,
        "questionText": "The _____ attribute specifies the destination of a hyperlink.",
        "correctAnswers": ["href", "HREF"]
      }
    ],
    "attempts": []
  },
  {
    "_id": "Q402",
    "title": "Q2 - CSS Styling",
    "course": "RS104",
    "description": "Cascading Style Sheets fundamentals",
    "quizType": "Graded Quiz",
    "points": 32,
    "assignmentGroup": "QUIZZES",
    "shuffleAnswers": false,
    "timeLimit": 20,
    "multipleAttempts": false,
    "howManyAttempts": 1,
    "showCorrectAnswers": "Immediately",
    "accessCode": "",
    "oneQuestionAtATime": false,
    "webcamRequired": false,
    "lockQuestionsAfterAnswering": false,
    "published": true,
    "dueDate": new Date("2024-10-05T17:00:00"),
    "availableDate": new Date("2024-09-20T00:00:00"),
    "untilDate": new Date("2024-10-05T17:00:00"),
    "questions": [
      {
        "_id": "Q402Q1",
        "type": "Multiple Choice",
        "title": "CSS Selectors",
        "points": 16,
        "questionText": "Which CSS selector targets elements with a specific class?",
        "choices": [
          { "text": "#classname", "isCorrect": false },
          { "text": ".classname", "isCorrect": true },
          { "text": "classname", "isCorrect": false },
          { "text": "*classname", "isCorrect": false }
        ]
      },
      {
        "_id": "Q402Q2",
        "type": "True/False",
        "title": "CSS Properties",
        "points": 16,
        "questionText": "The 'display: block' property makes an element take up the full width available.",
        "answer": true
      }
    ],
    "attempts": []
  },

  {
    "_id": "Q501",
    "title": "Q4 - Coordination Chemistry",
    "course": "RS105",
    "description": "Metal complexes and coordination compounds",
    "quizType": "Graded Quiz",
    "points": 25,
    "assignmentGroup": "QUIZZES",
    "shuffleAnswers": true,
    "timeLimit": 35,
    "multipleAttempts": false,
    "howManyAttempts": 1,
    "showCorrectAnswers": "Immediately",
    "accessCode": "",
    "oneQuestionAtATime": true,
    "webcamRequired": false,
    "lockQuestionsAfterAnswering": false,
    "published": true,
    "dueDate": new Date("2024-11-20T17:00:00"),
    "availableDate": new Date("2024-11-15T00:00:00"),
    "untilDate": new Date("2024-11-20T17:00:00"),
    "questions": [
      {
        "_id": "Q501Q1",
        "type": "Multiple Choice",
        "title": "Ligand Types",
        "points": 4,
        "questionText": "Which of the following is a bidentate ligand?",
        "choices": [
          { "text": "NH₃", "isCorrect": false },
          { "text": "H₂O", "isCorrect": false },
          { "text": "en (ethylenediamine)", "isCorrect": true },
          { "text": "Cl⁻", "isCorrect": false }
        ]
      }
    ],
    "attempts": []
  },
 
  {
    "_id": "Q601",
    "title": "Q5 - Thermodynamics",
    "course": "RS106",
    "description": "First and second laws of thermodynamics",
    "quizType": "Graded Quiz",
    "points": 38,
    "assignmentGroup": "QUIZZES",
    "shuffleAnswers": true,
    "timeLimit": 50,
    "multipleAttempts": true,
    "howManyAttempts": 2,
    "showCorrectAnswers": "Immediately",
    "accessCode": "",
    "oneQuestionAtATime": true,
    "webcamRequired": false,
    "lockQuestionsAfterAnswering": false,
    "published": true,
    "dueDate": new Date("2024-11-30T11:40:00"),
    "availableDate": new Date("2024-11-25T00:00:00"),
    "untilDate": new Date("2024-11-30T13:00:00"),
    "questions": [
      {
        "_id": "Q601Q1",
        "type": "Multiple Choice",
        "title": "Entropy",
        "points": 10,
        "questionText": "Which statement about entropy is correct?",
        "choices": [
          { "text": "Entropy always decreases", "isCorrect": false },
          { "text": "Entropy of universe increases", "isCorrect": true },
          { "text": "Entropy is always zero", "isCorrect": false },
          { "text": "Entropy is not measurable", "isCorrect": false }
        ]
      }
    ],
    "attempts": []
  },

  // RS107 - Ancient Languages
  {
    "_id": "Q701",
    "title": "Q1 - Elvish Grammar",
    "course": "RS107",
    "description": "Sindarin and Quenya language structures",
    "quizType": "Graded Quiz",
    "points": 31,
    "assignmentGroup": "QUIZZES",
    "shuffleAnswers": false,
    "timeLimit": 40,
    "multipleAttempts": false,
    "howManyAttempts": 1,
    "showCorrectAnswers": "Immediately",
    "accessCode": "",
    "oneQuestionAtATime": true,
    "webcamRequired": false,
    "lockQuestionsAfterAnswering": false,
    "published": true,
    "dueDate": new Date("2024-12-01T23:59:00"),
    "availableDate": new Date("2024-11-20T00:00:00"),
    "untilDate": new Date("2024-12-01T23:59:00"),
    "questions": [
      {
        "_id": "Q701Q1",
        "type": "Multiple Choice",
        "title": "Quenya Vocabulary",
        "points": 8,
        "questionText": "What does 'Namárië' mean in Quenya?",
        "choices": [
          { "text": "Hello", "isCorrect": false },
          { "text": "Farewell", "isCorrect": true },
          { "text": "Thank you", "isCorrect": false },
          { "text": "Good morning", "isCorrect": false }
        ]
      }
    ],
    "attempts": []
  },

  {
    "_id": "Q801",
    "title": "Q2 - Council Protocols",
    "course": "RS108",
    "description": "Diplomatic procedures in Middle-earth councils",
    "quizType": "Graded Quiz",
    "points": 104,
    "assignmentGroup": "QUIZZES",
    "shuffleAnswers": true,
    "timeLimit": 75,
    "multipleAttempts": false,
    "howManyAttempts": 1,
    "showCorrectAnswers": "Never",
    "accessCode": "",
    "oneQuestionAtATime": true,
    "webcamRequired": true,
    "lockQuestionsAfterAnswering": true,
    "published": true,
    "dueDate": new Date("2024-12-15T10:30:00"),
    "availableDate": new Date("2024-12-15T08:00:00"),
    "untilDate": new Date("2024-12-15T10:30:00"),
    "questions": [
      {
        "_id": "Q801Q1",
        "type": "Multiple Choice",
        "title": "Council of Elrond",
        "points": 18,
        "questionText": "Who called the Council of Elrond?",
        "choices": [
          { "text": "Gandalf", "isCorrect": false },
          { "text": "Elrond", "isCorrect": true },
          { "text": "Aragorn", "isCorrect": false },
          { "text": "Boromir", "isCorrect": false }
        ]
      }
    ],
    "attempts": []
  },

  // RS109 - Elven Craftsmanship
  {
    "_id": "Q901",
    "title": "Q3 - Traditional Arts",
    "course": "RS109",
    "description": "Elven artistic techniques and materials",
    "quizType": "Graded Quiz", 
    "points": 31,
    "assignmentGroup": "QUIZZES",
    "shuffleAnswers": false,
    "timeLimit": 40,
    "multipleAttempts": false,
    "howManyAttempts": 1,
    "showCorrectAnswers": "Immediately",
    "accessCode": "",
    "oneQuestionAtATime": true,
    "webcamRequired": false,
    "lockQuestionsAfterAnswering": false,
    "published": true,
    "dueDate": new Date("2024-12-01T23:59:00"),
    "availableDate": new Date("2024-11-20T00:00:00"),
    "untilDate": new Date("2024-12-01T23:59:00"),
    "questions": [
      {
        "_id": "Q901Q1",
        "type": "Multiple Choice",
        "title": "Elven Materials",
        "points": 4,
        "questionText": "What is mithril primarily used for in Elven craftsmanship?",
        "choices": [
          { "text": "Decorative jewelry only", "isCorrect": false },
          { "text": "Armor and fine items", "isCorrect": true },
          { "text": "Building construction", "isCorrect": false },
          { "text": "Cooking utensils", "isCorrect": false }
        ]
      }
    ],
    "attempts": []
  }
]; 