const startPage = $('#start');
const startButton = $('#startButton')
const quizPage = $('#quiz');
const resultPage = $('#result');
const scorePage = $('#scoreboard');
const timeEl = $('#time');
const answerButtons = $('#quiz > button');
var time = 75;
let timer;
var currentQuestionIndex = 0;
var numberQuestions = 6;
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
        question: "Javascript has how many variable declaration types?",
        answers: ["1","2","3","4"],
        correct: 2
    },
    {
        question: "Which is the strict equals comparator?",
        answers: ["===","==","=","!="],
        correct: 0
    },
    {
        question: "Javascript has how many variable declaration types?",
        answers: ["1","2","3","4"],
        correct: 0
    }
];

timeEl.hide();
timeEl.text("75");
quizPage.hide();
resultPage.hide();
scorePage.hide();
startButton.click(function() {
    timer = setInterval(function() {
        time --;
        timeEl.text(time);
        if (time < 1) {
            clearInterval(timer);
            showResult();
        }
    }, 1000);
    startQuiz();
    
});

function startQuiz() {
    timeEl.show();
    startPage.hide();
    quizPage.show();
    displayQuestion();
}

function displayQuestion() {
    $('#quiz > h1').text(questions[currentQuestionIndex].question);
    
    answerButtons.each(function(index) {
        $(this).text(questions[currentQuestionIndex].answers[index]);
        $(this).off("click").on("click" ,function() {checkAnswer(index, this)});
        $(this).css("background-color", "");
    });
   
}

function checkAnswer(index, thisButton){
    
    $(thisButton).off("click");
    if (questions[currentQuestionIndex].correct === index) {
        
        
        currentQuestionIndex++;
        if (currentQuestionIndex > numberQuestions-1){
            clearInterval(timer);
            showResult();
            return;
        }
        console.log(currentQuestionIndex);
        $(thisButton).css("background-color", "green");
        answerButtons.prop("disabled", true);
        setTimeout(function() {
            displayQuestion();
            answerButtons.prop("disabled", false);
        }, 600);
        
        
    }
    else {
        time = time-10;
		timeEl.text(time);
        $(thisButton).css("background-color", "red");
        }
}
function showResult() {
    if (time < 0){time = 0;}
    quizPage.hide();
    resultPage.show();
    timeEl.hide();
    $('#result > p > span').text = time;
}
