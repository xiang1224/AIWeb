//Question bank
var questionBank= [
    {
        question : '「人工智慧」一詞在西元幾年被提出?',
        option : ['1955','1965','1971','1950'],
        answer : '1955'
    },
    {
        question : '誰是人工智慧之父?',
        option : ['Marvin Minsky','Kobe Bean Bryant','Michael Jeffrey Jordan','Wardell Stephen Curry'],
        answer : 'Marvin Minsky'
    },
    {
        question : '下列何者不是影像辨識的應用?',
        option : ['人臉辨識','入侵者辨識','Siri','車牌辨識'],
        answer : 'Siri'
    },
    {
        question : '影像辨識應用在下列何種產業中?',
        option : ['工業','醫療','交通','以上皆是'],
        answer : '以上皆是'
    },
    {
        question : '影像辨識是讓電腦學習人類的哪個器官?',
        option : ['鼻子','嘴巴','眼睛','耳朵'],
        answer : '眼睛'
    },
    {
        question : '電腦視覺是用攝影機和電腦代替人眼對目標進行下列何種動作?',
        option : ['辨識','跟蹤','測量','以上皆是'],
        answer : '以上皆是'
    },
    {
        question : '下列何者為影像辨識需要用到的設備?',
        option : ['麥克風','鏡頭','耳機','喇叭'],
        answer : '鏡頭'
    },
    {
        question : '電動車「特斯拉」的自動駕駛是應用下列何種技術?',
        option : ['影像辨識','語音辨識','語言分析','聲紋分析'],
        answer : '影像辨識'
    },
    {
        question : '辨識違反交通規則或進入禁行區域的車輛是應用下列何種技術?',
        option : ['影像辨識','語音辨識','語言分析','聲紋分析'],
        answer : '影像辨識'
    },
    {
        question : '下列何者是影像辨識中的行為辨識?',
        option : ['人流分析','跨線偵測','入侵偵測','以上皆是'],
        answer : '以上皆是'
    },
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
//<var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "題目"+' '+(i+1)+' '+'/'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length*10)
    {
        score= score+10;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,1000);
}

//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length*10;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

//click events to next button
//next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();