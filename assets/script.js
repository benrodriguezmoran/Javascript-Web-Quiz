const startPage = $('#start');
const startButton = $('#startButton')
const quizPage = $('#quiz');
const resultPage = $('#result');
const scorePage = $('#score');
const timeEl = $('#time');
const answerButtons = $('#quiz > button');
var time = 75;
var currentQuestionIndex = 0;

const questions = [
    {
        question: "What is used to mark the end of a line in JS?",
        answers: ["A comma","A period","A semicolon","An exclamation"],
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


timeEl.text("75")
quizPage.hide();
resultPage.hide();
scorePage.hide();
startButton.click(function() {
    
    var timer = setInterval(function() {
        time --;
        timeEl.text(time);
        if (time < 1) {
            time = 0;
            clearInterval(timer);
        }
    }, 1000)
    startQuiz();
    
});

function startQuiz() {
    startPage.hide();
    quizPage.show();
    displayQuestion();
}

function displayQuestion() {
    $('#quiz > h1').text(questions[currentQuestionIndex].question);
    answerButtons.each(function(index) {
        $(this).text(questions[currentQuestionIndex].answers[index]);
        $(this).click(function() {checkAnswer(index)});
    });
}

function checkAnswer(index){
    if (questions[currentQuestionIndex].correct === index) {
        if (questions[currentQuestionIndex] > questions.keys().length-1){
            showResult();
        }
        else {
            currentQuestionIndex++;
            displayQuestion();
        }
        
    }
    else {
        time = time-10;
        $(this).css("background-color", "red")
    }
}
function showResult() {
    quizPage.hide();
    resultPage.show();
}