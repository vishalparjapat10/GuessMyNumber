
const message = document.querySelector('.message');
let score = 20;
const secretNumber = Math.trunc(Math.random()*20)+1;
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click',function(){
   const guess = Number(document.querySelector('.guess').value);

   if(!guess){
       message.textContent = 'No number!';
   }
   else if(guess === secretNumber){
       message.textContent = "Correct Number!"
   }
   else if(guess > secretNumber){
       if(score > 1){
        message.textContent = "Too high!";
        score--;
        document.querySelector('.score').textContent = score;
       }
       else{
        message.textContent = "you lost the game!";
        document.querySelector('.score').textContent = 0;
       }
       
   }
   else if(guess < secretNumber){
       if(score > 1){
        message.textContent = "Too low!";
        score--;
        document.querySelector('.score').textContent = score;
       }
       else{
        message.textContent = "you lost the game!";
        document.querySelector('.score').textContent = 0;
       }
       
   }
   
});