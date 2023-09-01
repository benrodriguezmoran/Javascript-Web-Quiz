const startPage = $('#start');
const startButton = $('#startButton')
const quizPage = $('#quiz');
const resultPage = $('#result');
const scorePage = $('#score');
const timeEl = $('#time');
let time = 75;

const questions = [
    {
        question: "What is used to mark the end of a line in JS?",
        answers: ["A comma","A period","A semicolon",""],
        correct: 2
    },
    {
        question: "",
        answers: ["","","",""],
        correct: 0
    },
    {
        question: "",
        answers: ["","","",""],
        correct: 0
    },
    {
        question: "",
        answers: ["","","",""],
        correct: 0
    },
];
let currentQuestionIndex




quizPage.hide();
resultPage.hide();
scorePage.hide();
startButton.click(function() {
    
    var timer = setInterval(function() {
        time --;
        timeEl.text(time);
    }, 1000)
    startQuiz()
});

function startQuiz() {
    startPage.hide();
    quizPage.show();
    displayQuestion();
}

function displayQuestion() {
    
}