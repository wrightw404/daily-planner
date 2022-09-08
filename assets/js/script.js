var startButton = $('#startBtn');
var questionBoxEl = document.querySelector('#questionBox');
var timeSpot = document.querySelector('#timer');
var questionSpot = document.querySelector('#question');
var questionBtns = document.querySelector('#questionButtons');
var randomQuestion;
var questionI;
//var questionBoxEl = $('#questionBox');
//var hideQuestions = document.getElementsByClassName('hidden');

var questionArr = [
    {
        question: "JavaScript is a ___ -side programming language.",
        answers: [ 
            {text: "client", correct: true},
            {text: "server", correct: false},
            {text: "both", correct: false},
            {text: "none", correct: false}
        ]
    }, 
    {
        question:"Inside which HTML element do we put the JavaScript?",
        answers: [ 
            {text: "<scripting>", correct: false},
            {text: "<javascript>", correct: false},
            {text: "<script>", correct: true},
            {text: "<js>", correct: false}
        ]
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: [ 
            {text: "<head> section", correct: false},
            {text: "both <head> & <body>", correct: false},
            {text: "<body> section", correct: true},
            {text: "neither", correct: false}
        ]
    },
    {
        question: "What is the correct syntax for referring to an external script called?",
        answers: [ 
            {text: "<script name=''>", correct: false},
            {text: "<script src=''>", correct: true},
            {text: "<script href=''>", correct: false},
            {text: "<link href=''>", correct: false}
        ]
    }
]

var score = 0;


$('#startBtn').on('click', gameStart) 

function gameStart() {
   questionBoxEl.removeAttribute('class');
    $('#wrapper').remove();
    randomQuestion = questionArr.sort(() => Math.random() - .5);
    questionI = 0;

    startTimer();
}

function endQuiz() {

}

function startTimer() {
    var timeLeft = 5;

    var timeInterval = setInterval(function () {
        if (timeLeft>1){
            timeSpot.textContent = `${timeLeft} seconds remaining`;
            timeLeft--;
        } else if (timeLeft===1){
            timeSpot.textContent = `${timeLeft} second remaining`;
            timeLeft--;
        } else {
            timeSpot.textContent = '';
            clearInterval(timeInterval);
            var endMenuEl = document.getElementById('endMenu');
            endMenuEl.removeAttribute('class');
            
            var endScoreEl = document.getElementById('endScore');
            endScoreEl.textContent = timeLeft;

            questionBoxEl.setAttribute('class', 'hidden');
            //when timer ends create function that brings you to scorecard
        }
    }, 1000);
    nextQuestion();
}

function nextQuestion(){
    showQuestion(randomQuestion[questionI]);
}

function showQuestion(question){
    questionSpot.textContent = question.question;
    question.answers.forEach(answer => {  //=> arrow function
        const newAnswerButtons = document.createElement('button'); 
        newAnswerButtons.textContent = answer.text;  //creates buttons with the text from the answers 
        newAnswerButtons.classList.add('btn'); //gives new button the class of 'btn' so it will be styled the same 
        if (answer.correct) {
            newAnswerButtons.dataset.correct = answer.correct;
        }
        newAnswerButtons.addEventListener('click', chosenAnswer);
        questionBtns.appendChild(newAnswerButtons);
        //need to append to #questionButtons 

    })

}

function chosenAnswer() {
  //  var userAnswer = e.target;
  //  var userAnserValue = userAnswer.dataset.correct
}
//function selectAnswer 
//for (var i = 0; i < questionArr.length; i++){
 //   var selectQuestion = questionArr.question[i]; 
        
//}


