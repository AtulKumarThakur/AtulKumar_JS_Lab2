const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswer: "Mars",
    },
    {
      question: "Which space agency successfully landed the rover named Perseverance on Mars in 2021?",
      options: ["NASA", "ESA", "ISRO", "CNSA"],
      correctAnswer: "NASA",
    },
    {
      question: "Which moon of Saturn is known to have liquid oceans beneath its icy surface, making it a potential candidate for extraterrestrial life?",
      options: ["Titan", "Enceladus", "Io", "Europa"],
      correctAnswer: "Enceladus",
    },
    {
      question: "What is the name of the first artificial satellite launched into space by the Soviet Union in 1957?",
      options: ["Apollo 11", "Sputnik 1", "Hubble Space Telescope", "Voyager 1"],
      correctAnswer: "Sputnik 1",
    },
  ];
  
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const choiceElements = [
    document.getElementById("choice0"),
    document.getElementById("choice1"),
    document.getElementById("choice2"),
    document.getElementById("choice3"),
  ];
  const progressElement = document.getElementById("progress");
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    for (let i = 0; i < currentQuestion.options.length; i++) {
      choiceElements[i].textContent = currentQuestion.options[i];
      choiceElements[i].addEventListener("click", checkAnswer);
    }
  
    progressElement.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  }
  
  function checkAnswer(event) {
    const userChoice = event.target.textContent;
    const currentQuestion = questions[currentQuestionIndex];
  
    if (userChoice === currentQuestion.correctAnswer) {
      score++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      displayResult();
    }
  }
  
  function displayResult() {
    const totalQuestions = questions.length;
    const percentage = ((score / totalQuestions) * 100).toFixed(5);
    questionElement.textContent = `Quiz completed! Your score: ${score}/${totalQuestions}`;
    progressElement.textContent = `Percentage: ${percentage}%`;
  }  
  
  loadQuestion(); 
  