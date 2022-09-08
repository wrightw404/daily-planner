var startButton = document.getElementById('startBtn');
var questionBoxEl = document.querySelector('#questionBox');
var timeSpot = document.querySelector('#timer');
var questionSpot = document.querySelector('#question');
var questionBtns = document.querySelector('#questionButtons');
var randomQuestion;
var questionI = 0;


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

var score = localStorage.getItem('score');
var nxtBtn = document.getElementById('nextBtn');
    
nxtBtn.addEventListener('click', () => {
    questionI++;
    showQuestion();
})


$('#startBtn').on('click', gameStart) 

function gameStart() {
   questionBoxEl.removeAttribute('class');
   nxtBtn.classList.remove('hidden');
   startButton.classList.add('hidden');
   randomQuestion = questions.sort(() => Math.random() - .5);
    questionI = 0;

    startTimer();
}


function startTimer() {
    var timeLeft = 35;

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

           
            
        }
    }, 1000);
    showQuestion();
}

function showQuestion(){
    var shownQuestion = randomQuestion[questionI];
    
    questionSpot.textContent = shownQuestion['title'];
    questionBtns.textContent = " ";
    for (var i = 0; i < shownQuestion['options'].length; i++){
    var answerBtns = shownQuestion['options'][i];
    var newAnswerButtons = document.createElement('button');
    
    newAnswerButtons.setAttribute('class', 'options');
    newAnswerButtons.setAttribute("value", answerBtns);
    newAnswerButtons.textContent = `${i + 1}. ${answerBtns}`
    questionBtns.appendChild(newAnswerButtons);

    if (shownQuestion['title'].length < questionI + 1){
       
        endMenuEl.removeAttribute('class');
        
       
        endScoreEl.textContent = timeLeft;

      
        mainSectionEl.setAttribute('class', 'hidden');

        questionBoxEl.setAttribute('class', 'hidden');

        endScoreEl.textContent = score;
    }
    
    }
}

questionBtns.addEventListener('click', checkAnswers);

function checkAnswers(e){
    var btnCheck = e.target;

    if(!btnCheck.matches('options')){
        return
    }
    if(btnCheck.value !== questionBtns[questionI]['answers']){
        timeLeft -= 5;
        if(timeLeft < 0){
            timeLeft = 0;
        }
        timeSpot.textContent = timeLeft;
        var display = document.getElementById('feedback');
        display.removeAttribute('class','hidden');
        display.textContent('wrong');
    } else {
        display.removeAttribute('class', 'hidden');
        display.textContent('correct');
        score++;
        localStorage.setItem('score', score);
    }

    display.classList.add('feedback');

} 

   
var submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', href="./")





