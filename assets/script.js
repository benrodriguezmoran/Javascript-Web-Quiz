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
        question: "Javascript has how many variable declaration types?",
        answers: ["1","2","3","4"],
        correct: 2
    },
    {
        question: "Javascript has how many variable declaration types?",
        answers: ["1","2","3","4"],
        correct: 2
    },
    {
        question: "Javascript has how many variable declaration types?",
        answers: ["1","2","3","4"],
        correct: 0
    }
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
        $(this).off("click").on("click" ,function() {checkAnswer(index, this)});
        $(this).css("background-color", "");
    });
   
}

function checkAnswer(index, object){
    if (questions[currentQuestionIndex] > questions.keys().length-1){
        showResult();
    }
    $(object).off("click");
    if (questions[currentQuestionIndex].correct === index) {
        
        
        currentQuestionIndex++;
        console.log(currentQuestionIndex);
        $(object).css("background-color", "green");
        answerButtons.prop("disabled", true);
        setTimeout(function() {
            displayQuestion();
            answerButtons.prop("disabled", false);
        }, 1000);
        
        
    }
    else {
        time = time-10;
		timeEl.text(time);
        $(object).css("background-color", "red");
        }
}
function showResult() {
    clearInterval(timer);
    quizPage.hide();
    resultPage.show();
}
