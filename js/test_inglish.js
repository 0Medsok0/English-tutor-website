let currentQuestion = 0;
let score = 0;
const questions = [
  {
    question:
      "Which word is most relevant in the sentence 'She is a very nice girl'?",
    options: ["She", "Nice", "Girl", "Very"],
    correctAnswer: 4,
  },
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    correctAnswer: 1,
  },
  {
    question: "How do you say 'Hello' in English?",
    options: ["Hallo", "Hola", "Ciao", "Konnichiwa"],
    correctAnswer: 1,
  },
  {
    question: "She ___ go to school to study.",
    options: ["Must", "Can", "Should", "May"],
    correctAnswer: 1,
  },
  {
    question: "What does “LOL” mean?",
    options: [
      "Laugh Out Loud",
      "Little Old Lady",
      "Live On Line",
      "Love Or Lose",
    ],
    correctAnswer: 1,
  },
  {
    question: "I was reading a book ____ the phone rang",
    options: ["While", "Before", "After", "During"],
    correctAnswer: 1,
  },
  {
    question: "What does the abbreviation US stand for? ",
    options: [
      "United Soviet Socialist Republics",
      "United States Of America",
      "Unidentified Subject",
      "Unknown Status",
    ],
    correctAnswer: 2,
  },
  {
    question: "She needs to ____ the dishes",
    options: ["Dry", "Wash", "Clean", "Wipe"],
    correctAnswer: 2,
  },
  {
    question: "The weather today is _____",
    options: ["Sunny", "Cloudy", "Rainy", "Windy"],
    correctAnswer: 3,
  },
  {
    question: "He usually has cereal for breakfast",
    options: ["Yes", "No", "Sometimes", "Always"],
    correctAnswer: 4,
  },
  {
    question: "Where is the Eiffel Tower? ",
    options: ["In Tokyo", "In Paris", "In London", "In New York"],
    correctAnswer: 2,
  },
  {
    question: "Mary _____ her room before she went to school",
    options: ["Cleaned", "Did", "Completed", "Made"],
    correctAnswer: 1,
  },
  {
    question: "What are the colors of the flag of France?",
    options: [
      "Blue, White, Red",
      "Red, Black, Yellow",
      "White, Red, Blue",
      "Green, Red, White",
    ],
    correctAnswer: 1,
  },
  {
    question: "How long does it take to fly from London to Paris?",
    options: ["1 hour", "2 hour", "3 hour", "4 hour"],
    correctAnswer: 3,
  },
  {
    question: "I would like to buy ____",
    options: ["milk", "a", "an", "-"],
    correctAnswer: 3,
  },
  {
    question: "How many days are in a week?",
    options: ["5 days", "6 days", "7 days", "8 days"],
    correctAnswer: 3,
  },
  {
    question: "Tom is much taller than Mary",
    options: ["True", "False", "Cannot Determine", "Doesn’t Apply"],
    correctAnswer: 2,
  },
  {
    question: "What's the weather ____",
    options: ["Outside", "Inside", "Everywhere", "Nowhere"],
    correctAnswer: 1,
  },
  {
    question: "Who wrote the novel 'The Catcher in the Rye'?",
    options: ["Mark Twain", "Ernest Hemingway", "J.D. Salinger", "Harper Lee"],
    correctAnswer: 3,
  },
  {
    question: "Which type of music do you like listening to?",
    options: ["Pop", "Rock", "Country", "Jazz"],
    correctAnswer: 2,
  },
  {
    question: "The first man to walk on the moon was",
    options: ["Yuri Gagarin", "Neil Armstrong", "John Glenn", "Buzz Aldrin"],
    correctAnswer: 2,
  },
  {
    question: "____ is my favorite color",
    options: ["Red", "Blue", "Green", "Yellow"],
    correctAnswer: 2,
  },
  {
    question: "She is studying hard because she wants to ____",
    options: [
      "Have fun",
      "Pass the exam",
      "Buy something",
      "Go out with friends",
    ],
    correctAnswer: 2,
  },
  {
    question: "I am ____ to learn English",
    options: ["Happy", "Proud", "Tired", "Frustrated"],
    correctAnswer: 4,
  },
  {
    question: "This word is spelled wrong.",
    options: ["Incorrect", "Correct", "Ambiguous", "Misspelled"],
    correctAnswer: 4,
  }
//   {
//     question: "",
//     options: ["", "", "", ""],
//     correctAnswer: 3,
//   },

];

function submitAnswer() {
  const options = document.getElementsByName(`q${currentQuestion + 1}`);
  let selectedOption = -1;
  for (let j = 0; j < options.length; j++) {
    if (options[j].checked) {
      selectedOption = j;
      break;
    }
  }

  if (selectedOption === questions[currentQuestion].correctAnswer - 1) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    displayScore();
  }
}

function displayQuestion() {
  const questionContainer = document.querySelector(".quiz-container");
  questionContainer.innerHTML = `
  <div class="question">
    <h3>Вопрос ${currentQuestion + 1}:</h3>
    <p>${questions[currentQuestion].question}</p>
    <div class="options">
      ${optionsMarkup(questions[currentQuestion].options)}
    </div>
  </div>
  <button class="submit-button" onclick="submitAnswer()">Submit</button>
  <p id="score"></p>
`;
}

function displayScore() {
  const questionContainer = document.querySelector(".quiz-container");
  questionContainer.innerHTML = `
  <h2>Ваш счет: ${score} исходя из ${questions.length}</h2>
`;
}

function optionsMarkup(options) {
  return options
    .map(
      (option, index) => `
  <div class="option">
    <input type="radio" name="q${currentQuestion + 1}" value="option${
        index + 1
      }">
    <label for="option${index + 1}">${option}</label>
  </div>
`
    )
    .join("");
}

displayQuestion();
