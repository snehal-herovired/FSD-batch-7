const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: 0
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Whale", "Giraffe", "Hippopotamus"],
        answer: 1
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Earth", "Venus", "Mars", "Mercury"],
        answer: 3
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const statusElement = document.getElementById('status');

    questionElement.textContent = questions[currentQuestion].question;
    optionsElement.innerHTML = '';

    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
        const li = document.createElement('li');
        li.textContent = questions[currentQuestion].options[i];
        li.className = 'option';
        li.setAttribute('onclick', `checkAnswer(${i})`);
        optionsElement.appendChild(li);
    }

    statusElement.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
}

function checkAnswer(optionIndex) {
    
    if (optionIndex === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}


function showResult() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const statusElement = document.getElementById('status');
    const reloadBtn = document.getElementById('reload-btn');

    questionElement.textContent = `Quiz Completed! Your Score: ${score}/${questions.length}`;
    optionsElement.innerHTML = '';
    statusElement.textContent = '';

    reloadBtn.style.display = 'block';
}

function reloadQuiz() {
    currentQuestion = 0;
    score = 0;
    const reloadBtn = document.getElementById('reload-btn');
    reloadBtn.style.display = 'none';
    loadQuestion();
}

// Load the first question on page load
window.onload = loadQuestion;