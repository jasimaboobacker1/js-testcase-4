const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Rome", "Berlin"],
      answer: 1
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
      answer: 0
    },
    {
      question: "How many planets are in our solar system?",
      options: ["7", "8", "9", "10"],
      answer: 1
    },
    {
      question: "What is the largest mammal on Earth?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: 1
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Fe", "Cu"],
      answer: 0
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
      answer: 0
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["Mount Kilimanjaro", "Mount Everest", "K2", "Mount Fuji"],
      answer: 1
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Jupiter", "Mars", "Saturn", "Venus"],
      answer: 1
    },
    {
      question: "What is the boiling point of water in Celsius?",
      options: ["0°C", "100°C", "-100°C", "50°C"],
      answer: 1
    },
    {
      question: "Who was the first President of the United States?",
      options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
      answer: 1
    }
  ];

  let currentQuestion = 0;
  let score = 0;

  window.addEventListener("load", () => {
  loadQuestion();
});

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('question').innerText = q.question;
  document.getElementById('option1').innerText = q.options[0];
  document.getElementById('option2').innerText = q.options[1];
  document.getElementById('option3').innerText = q.options[2];
  document.getElementById('option4').innerText = q.options[3];
  document.querySelector('.box h2').innerText = `${currentQuestion + 1}/10`;
}
  function nextQuestion(option) {
const selectedAnswer = option.innerText.trim();
const correctAnswer = questions[currentQuestion].options[questions[currentQuestion].answer];

let message;
if (selectedAnswer === correctAnswer) {
  score++;
  message = "Correct!";
} else {
  message = `Incorrect. The correct answer is: ${correctAnswer}`;
}

currentQuestion++;

if (currentQuestion < questions.length) {
  alert(message);
  loadQuestion();
} else {
  alert(`${message}\nQuiz ended! Your score is: ${score}/10`);
  currentQuestion = 0;
  score = 0;
  loadQuestion();
}
}
