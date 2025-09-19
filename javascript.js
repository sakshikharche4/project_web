'use strict'

let secretNumber= Math.trunc(Math.random()*20)+1
let score = 20;
let highlight=0;
 
 document.querySelector('.check').addEventListener ('click' , function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
if(!guess){
     document.querySelector('.message').textContent = "No Number!!"
}
else if (guess===secretNumber){
     document.querySelector('.number').textContent = secretNumber;
    console.log(document.querySelector('.message').textContent = "correct number");
    document.querySelector('body').style. backgroundColor = '#1c9c42ff'
    document.querySelector('.number').style.width='30rem'

    if(score>highlight){
        highlight = score
        console.log(document.querySelector('.highscore').textContent= highlight);
        
    }
}
else if (guess>secretNumber){
    if(score>1){console.log(document.querySelector('.message').textContent = "Too High");
    score--
    document.querySelector('.score').textContent = score}
        else {
        console.log(document.querySelector('.message').textContent = "You lost");
        document.querySelector('.score').textContent = 0;
    }
    
}
else if (guess<secretNumber)    if(score>1){console.log(document.querySelector('.message').textContent = "Too Low");
    score--
    document.querySelector('.score').textContent = score}
        else {
        console.log(document.querySelector('.message').textContent = "You lost");
        document.querySelector('.score').textContent = 0;
    }
})

document.querySelector('.again').addEventListener('click', function (){
    score=20
    secretNumber= Math.trunc(Math.random()*20)+1
    document.querySelector('.message').textContent = " start guessing...."
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = '';
    document.querySelector('body').style. backgroundColor = '#000'
    document.querySelector('.number').style.width='15rem'


    
})