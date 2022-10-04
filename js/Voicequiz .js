//Question bank
var questionBank= [
    {
        question : '最早的語音辨識器在西元幾年誕生?',
        option : ['1920','1935','1915','1925'],
        answer : '1920'
    },
    {
        question : '誰是人工智慧之父?',
        option : ['Marvin Minsky','Kobe Bean Bryant','Michael Jeffrey Jordan','Wardell Stephen Curry'],
        answer : 'Marvin Minsky'
    },
    {
        question : '玩具狗「Radio Rex」能聽取哪種性別的聲音?',
        option : ['男性','女性','都可以','都不行'],
        answer : '男性'
    },
    {
        question : '語音辨識系統的組成，為下列何者?',
        option : ['聲學模型','語言模型','發音辭典','以上皆是'],
        answer : '以上皆是'
    },
    {
        question : '語音辨識是讓電腦學習人類的哪個器官?',
        option : ['鼻子','嘴巴','眼睛','耳朵'],
        answer : '耳朵'
    },
    {
        question : '下列何者為影像辨識需要用到的設備?',
        option : ['收音設備','鏡頭','耳機','喇叭'],
        answer : '收音設備'
    },
    {
        question : '下列何者沒有使用到語音辨識的技術?',
        option : ['智慧音箱','會議紀錄製作','語音客服','車牌辨識'],
        answer : '車牌辨識'
    },
    {
        question : '語音的最小單位為下列何者?',
        option : ['音素','音度','音緣','音緯'],
        answer : '音素'
    },
    {
        question : '智能助理，是人工智慧基本應用中四大部分的哪一個?',
        option : ['感知能力','認知能力','創造力','智慧'],
        answer : '感知能力'
    },
    {
        question : '第一個基於隱馬爾科夫模型的大詞彙量語音辨識系統是下列何者?',
        option : ['Radio Rex','Sphinx','Audrey','Siri'],
        answer : 'Sphinx'
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