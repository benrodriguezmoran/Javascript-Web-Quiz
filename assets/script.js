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
        question: "Arrays can store what type of information?",
        answers: ["Integers","Floats","Strings","All of the above"],
        correct: 3
    },
    {
        question: "This is used for interacting with internal code or third party packages",
        answers: ["CSS","HTML","API","CPU"],
        correct: 2
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
        $(this).click(function() {checkAnswer(index, this)});
    });
}

function checkAnswer(index, object){
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
		timeEl.text(time);
        $(object).css("background-color", "red")
    }
}
function showResult() {
    clearInterval(timer);
    quizPage.hide();
    resultPage.show();
}
