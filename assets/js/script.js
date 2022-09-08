var startButton = $('#startBtn');
var questionBoxEl = document.querySelector('#questionBox');
var timeSpot = document.querySelector('#timer');
var questionSpot = document.querySelector('#question');
var questionBtns = document.querySelector('#questionButtons');
var randomQuestion;
var questionI = 0;
//var questionBoxEl = $('#questionBox');
//var hideQuestions = document.getElementsByClassName('hidden');

var questions = [
    {
        title: "JavaScript is a ___ -side programming language.",
        options: ["client", "server", "both", "neither"],
        answers: "server"
        
    }, 
    {
        title:"Inside which HTML element do we put the JavaScript?",
        options: ["<scripting>", "<javascript>", "<script>", "<js>"],
        answers: "<script>"
    },
    {
        title: "Where is the correct place to insert a JavaScript?",
        options: ["<head> section", "both <head> & <body>", "<body> section", "neither"],
        answers: "<body> section"
        
    },
    {
        title: "What is the correct syntax for referring to an external script called?",
        options: ["<script name=''>", "<script src=''>", "<script href=''>", "<link href=''>"],
        answers: "<script src=''>"
        
    }
]

var score = 0;


$('#startBtn').on('click', gameStart) 

function gameStart() {
   questionBoxEl.removeAttribute('class');
    $('#wrapper').remove();
    randomQuestion = questions.sort(() => Math.random() - .5);
    questionI = 0;

    startTimer();
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

            var mainSectionEl =document.getElementById('main-section');
            mainSectionEl.setAttribute('class', 'hidden');

            questionBoxEl.setAttribute('class', 'hidden');
            //when timer ends create function that brings you to scorecard
        }
    }, 1000);
    showQuestion();
}

function showQuestion(){
    var shownQuestion = questions[questionI];
    //var questionTitle = document.getElementById('question');
    questionSpot.textContent = shownQuestion['title'];
    questionBtns.textContent = " ";
    for (var i = 0; i < shownQuestion['options'].length; i++){
    var answerBtns = shownQuestion['options'][i];
    var newAnswerButtons = document.createElement('button');
    newAnswerButtons.setAttribute("class", "options");
    newAnswerButtons.setAttribute("value", answerBtns);
    newAnswerButtons.textContent = `${i + 1}. ${answerBtns}`
    questionBtns.appendChild(newAnswerButtons);

    }
    
}

function nextQuestion(){
    
}










//function showQuestion(question){
//    questionSpot.textContent = question.question;
//    question.answers.forEach(answer => {  //=> arrow function
//        const newAnswerButtons = document.createElement('button'); 
 //       newAnswerButtons.textContent = answer.text;  //creates buttons with the text from the answers 
//        newAnswerButtons.classList.add('btn'); //gives new button the class of 'btn' so it will be styled the same 
//        if (answer.correct) {
 //           newAnswerButtons.dataset.correct = answer.correct;
 //       }
 //       newAnswerButtons.addEventListener('click', chosenAnswer);
//        questionBtns.appendChild(newAnswerButtons);
        //need to append to #questionButtons 

 //   })

//}

//function chosenAnswer() {
  //  var userAnswer = e.target;
  //  var userAnserValue = userAnswer.dataset.correct
//}
//function selectAnswer 
//for (var i = 0; i < questionArr.length; i++){
 //   var selectQuestion = questionArr.question[i]; 
        
//}


