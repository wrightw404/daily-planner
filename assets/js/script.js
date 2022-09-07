var startButton = $('#startBtn');
var questionBoxEl = document.querySelector('#questionBox');
var timeSpot = document.querySelector('#timer');
//var questionBoxEl = $('#questionBox');
//var hideQuestions = document.getElementsByClassName('hidden');

var question = [
    {
        prompt: "JavaScript is a ___ -side programming language.\n(a) client\n(b) server\n(c) both\n(d) none",
        answer: "c"
    }, 
    {
        prompt:"Inside which HTML element do we put the JavaScript?\n(a) <scripting>\n(b) <javascript>\n(c) <script>\n(d) <js>",
        answer: "c"
    },
    {
        prompt: "Where is the correct place to insert a JavaScript?\n(a) <head> section\n(b) both <head> and <body> sections\n(c) <body> section",
        answer: "c"
    },
    {
        prompt: "What is the correct syntax for referring to an external script called?\n(a) <script name=''>\n(b) <script src=''>\n(c) <script href=''>",
        answer: "b"
    }
]
var secondsLeft = 0;
var score = 0;


$('#startBtn').on('click', gameStart) 

function gameStart() {
    console.log('started');
    questionBoxEl.classList.remove('hidden');
    $('#wrapper').remove();

    startTimer();
}

function startTimer() {
    var timeLeft = 75;

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
            //when timer ends create function that brings you to scorecard
        }
    }, 1000);
}
//for (var i=0; i < question.length; i++) {
//    var userInput = prompt(question[i].prompt)


//}
