const startBtn = document.getElementById('start-btn');
const exitBtn = document.getElementById('exit-btn');
const continueBtn = document.getElementById('continue-btn');
const restartBtn = document.getElementById('restart-btn');
const startScreen = document.getElementById('start-screen');
const rulesScreen = document.getElementById('rules-screen');
const quizScreen = document.getElementById('quiz-screen');
const scoreScreen = document.getElementById('score-screen');
const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const timerDisplay = document.getElementById('timer');
const questionCounter = document.getElementById('question-counter');
const scoreDisplay = document.getElementById('score');
const nextBtn = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 12;

const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        answer: 2
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
        answer: 1
    },
    {
        question: 'Who wrote "Hamlet"?',
        options: ['Charles Dickens', 'Leo Tolstoy', 'William Shakespeare', 'Mark Twain'],
        answer: 2
    }
];

startBtn.addEventListener('click', () => {
    startScreen.classList.add('hidden');
    rulesScreen.classList.remove('hidden');
});

exitBtn.addEventListener('click', () => {
    rulesScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
});

continueBtn.addEventListener('click', () => {
    rulesScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    startQuiz();
});

restartBtn.addEventListener('click', () => {
    scoreScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
    resetQuiz();
});

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
        resetTimer();
        startTimer();
        updateQuestionCounter();
    } else {
        endQuiz();
    }
});

function startQuiz() {
    showQuestion();
    startTimer();
    updateQuestionCounter();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });
}

function selectOption(index) {
    clearInterval(timer);
    const correctIndex = questions[currentQuestionIndex].answer;
    const buttons = optionsContainer.getElementsByTagName('button');

    if (index === correctIndex) {
        buttons[index].classList.add('correct');
        score++;
    } else {
        buttons[index].classList.add('wrong');
        buttons[correctIndex].classList.add('correct');
    }

    disableOptions();
}

function disableOptions() {
    const buttons = optionsContainer.getElementsByTagName('button');
    for (let button of buttons) {
        button.disabled = true;
    }
}

function startTimer() {
    timeLeft = 12;
    timerDisplay.innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            showCorrectAnswer();
        }
    }, 1000);
}

function showCorrectAnswer() {
    const correctIndex = questions[currentQuestionIndex].answer;
    const buttons = optionsContainer.getElementsByTagName('button');
    buttons[correctIndex].classList.add('correct');
    disableOptions();
}

function resetTimer() {
    clearInterval(timer);
    timerDisplay.innerText = '12';
}

function updateQuestionCounter() {
    questionCounter.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function endQuiz() {
    quizScreen.classList.add('hidden');
    scoreScreen.classList.remove('hidden');
    scoreDisplay.innerText = `${score} out of ${questions.length}`;
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resetTimer();
    updateQuestionCounter();
}
