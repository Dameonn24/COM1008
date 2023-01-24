var imageNumber=[1,2,3];
var allQuestions = [
    {
    question: "What module is the following symbols from?",
    choices: ["COM1001: Software Engineering", "COM1005:Machines and Intelligence", "COM1002: Foundations of Computer Science"],
    correctAnswer: 2
    },

    {
    question: "The following image is the name of a popular programming language. What is the name?",
    choices: ["Diamond", "Gem", "Ruby", "Trick question, the answer is always python"],
    correctAnswer: 2
    },

    {
    question: "Finally, what is the name of the University I attend ?",
    choices: ["The University of Sheffield", "Sheffield Hallam University", "Sheffield Wednesday", "Sheffield United",],
    correctAnswer: 0
    },
];

    //Function to start the quiz
function startQuiz(){
    document.getElementById('startQuiz').setAttribute("id", "disappear");
    document.getElementById("spaces").setAttribute("id","disappear");
    var i;
    var j;
    var k;
    for(i=0; i<allQuestions.length; i++){
    document.getElementById("questions").innerHTML +='<form class="question">Q'+(i+1)+': '+ allQuestions[i].question + '</br><img src="img/'+imageNumber[i]+'.jpg" class="quizimg" alt="Quiz Image'+imageNumber[i]+'>'; // img/1.jpg

    for(j=0; j<allQuestions[i].choices.length; j++){
        document.forms[i].innerHTML += '</div><div class="answer"><input name="q1" value="'+ allQuestions[i].choices[j] +'" id="value4" type="radio" />' + allQuestions[i].choices[j] + '<br/>';
    }
    document.getElementById("questions").innerHTML +='</form><br/><br/>';
    }
    document.getElementById("questions").innerHTML += '<button onclick="solveQuiz()">Submit Answers</button>';
};

function solveQuiz(){
    var x;
    var txt = ' ';
    var i = 0;
    var correct = 0; 
    for(i = 0; i < document.forms.length;i++) { 
        x = document.forms[i]; 
        for(j = 0; j<x.length; j++){
            if(x[j].checked) { 
                correctAnswer = allQuestions[i].correctAnswer;
                if(x[j].value == allQuestions[i].choices[correctAnswer]){
                    correct += 1;
                }
            }
        }
    }
    document.getElementById("questions").innerHTML += '<div class="correctanswers">Correct answers: '+ correct+'</div>';
        if (correct==3){
            document.getElementById("questions").innerHTML += '<div class="correctanswerscomment"> Great job! </div>';
        } else {
            document.getElementById("questions").innerHTML += '<div class="correctanswerscomment"> Good Try! </div>';
        }   
        document.getElementById("questions").innerHTML += '<div class="correctanswerscomment"><a href="Module.html"> < Back </a></div>';

    document.getElementById("questions").innerHTML += '<div class="credits"><p>Ruby logo (Question 2 Image) Copyright © 2006, Yukihiro Matsumoto</br>University of Sheffield logo (Question 3 Image) © The University of Sheffield 2018</p></div>';
};      
         