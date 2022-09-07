var startButton = $('#startBtn');

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
var score = 0;
var timer;
var timerCount;

for (var i=0; i < question.length; i++) {
    var userInput = prompt(question[i].prompt)


}
