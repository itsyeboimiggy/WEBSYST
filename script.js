const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestion, currentQuestionIndex;
let quizScore = 0;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setnextQuestion();
});

function startGame() {
    startButton.classList.add('hide');
    shuffledQuestion = question.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setnextQuestion();
    quizScore = 0;
}

function setnextQuestion() {
    resetState();
    if (currentQuestionIndex < shuffledQuestion.length) {
        showQuestion(shuffledQuestion[currentQuestionIndex]);
    } else {
        
        questionContainerElement.innerHTML = '<h2>Quiz Complete</h2>';
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
        startButton.addEventListener('click', startGame); 
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;

    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach((button) => {
        setStatusClass(button, button.dataset.correct);
    });

    if (correct) {
        quizScore++;
    } else {
        answerButtonsElement.insertAdjacentHTML('beforeend', '<p>Try Again</p>');
    }

    if (shuffledQuestion.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide");
    } else {
        questionContainerElement.innerHTML = '<h2>Quiz Complete</h2>';
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
        startButton.addEventListener('click', startGame); 
    }

    document.getElementById('right-answers').innerText = quizScore;
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const question = [
    {
        question: 'What does the init() method in a servlet do?',
        answers: [
            { text: 'Handle HTTP GET requests', correct: false },
            { text: ' Initialize the servlet', correct: true },
            { text: 'Release servlet resources', correct: false },
            { text: 'Handle HTTP POST requests', correct: false },
        ],
    },
    {
        question: 'Which HTTP request method does the doGet() method handle?',
        answers: [
            { text: 'POST', correct: false },
            { text: 'PUT', correct: false },
            { text: 'GET', correct: true },
            { text: 'DELETE', correct: false },
        ],
    },
    {
        question: 'What is the purpose of the destroy() method in a servlet?',
        answers: [
            { text: 'Handle HTTP requests', correct: false },
            { text: ' Initialize the servlet', correct: false },
            { text: ' Release servlet resources', correct: true },
            { text: ' None of the above', correct: false },
        ],
    },
    {
        question: 'What is an advantage of using servlets?',
        answers: [
            { text: ' Limited support for HTML templating', correct: false },
            { text: 'Requires compilation and deployment for every code change', correct: false },
            { text: ' Better performance compared to CGI', correct: true },
            { text: 'Suitable for small, simple tasks', correct: false },
        ],
    },
    {
        question: 'Which HTTP request method does the doPost() method handle?',
        answers: [
            { text: ' GET', correct: false },
            { text: 'POST', correct: true },
            { text: '  PUT', correct: false },
            { text: ' DELETE', correct: false },
        ],
    },
    {
        question: 'What is a disadvantage of servlets?',
        answers: [
            { text: 'Easy maintenance', correct: false },
            { text: 'Limited support for HTML templating', correct: true },
            { text: 'Does not require compilation', correct: false },
            { text: 'Suitable for small, simple tasks', correct: false },
        ],
    },
    {
        question: 'Why is learning CGI important?',
        answers: [
            { text: 'Its the latest web technology', correct: false },
            { text: ' Its easy to learn', correct: false },
            { text: 'Provides insights into historical web development', correct: true },
            { text: ' Not used in any modern web applications', correct: false },
        ],
    },
    {
        question: 'Which method is called when a servlet is being placed into service?',
        answers: [
            { text: 'init()', correct: true },
            { text: 'destroy()', correct: false },
            { text: 'doGet()', correct: false },
            { text: 'doPost()', correct: false },
        ],
    },
    {
        question: 'What does the doGet() method handle?',
        answers: [
            { text: ' HTTP POST requests', correct: false },
            { text: 'nitialization of servlet', correct: false },
            { text: 'HTTP GET requests', correct: true },
            { text: 'Release of servlet resources', correct: false },
        ],
    },
    {
        question: 'What does the destroy() method do?',
        answers: [
            { text: ' Handles HTTP requests', correct: false },
            { text: ' Initializes the servlet', correct: false },
            { text: 'Releases servlet resources', correct: true },
            { text: ' None of the above', correct: false },
        ],
    },
];
