
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const scoreCont = document.querySelector('.score');
const playAgain = document.querySelector('.again');
const body = document.querySelector('body');
let score = 20;
let secretNumber = Math.trunc(Math.random()*20)+1;

document.querySelector('.check').addEventListener('click',function(){
   const guess = Number(document.querySelector('.guess').value);
   if(!guess){
       message.textContent = 'No number!';
   }
   else if(guess === secretNumber){
       message.textContent = "Correct Number!"
       body.style.backgroundColor = '#60b347';
       number.style.width = '30rem';
       number.textContent = secretNumber;
   }
   else if(guess > secretNumber){
       if(score > 1){
        message.textContent = "Too high!";
        score--;
        scoreCont.textContent = score;
       }
       else{
        message.textContent = "you lost the game!";
        scoreCont.textContent = 0;
       }
       
   }
   else if(guess < secretNumber){
       if(score > 1){
        message.textContent = "Too low!";
        score--;
        scoreCont.textContent = score;
       }
       else{
        message.textContent = "you lost the game!";
        scoreCont.textContent = 0;
       }
       
   }
   
});

playAgain.addEventListener('click',function(){
    scoreCont.textContent = 20;;
    body.style.backgroundColor = '#222';
    secretNumber = Math.trunc(Math.random()*20)+1;
    message.textContent = 'Start guessing...';
    number.style.width = '15rem';
    number.textContent = '?';
    document.querySelector('.guess').value = '';


})