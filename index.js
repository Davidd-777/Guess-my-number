'use strict';


let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let newHighscore = 0;

const principalContainer = document.querySelector('.principal-container');
const btnCheck = document.querySelector('.btn-check');
const btnTryagain = document.querySelector('.btn-tryagain');
const statusText = document.querySelector('.status-text');
const highscoreScore = document.querySelector('.highscore-score');
const scoreScore = document.querySelector('.score-score');

const displayMessage = function(message){
    document.querySelector('.status-text').textContent = message;
}

//CHECK BUTTON FUNCTION

const checkBtnEvent = function (){
    const guess = Number(document.querySelector(".input-text").value);
    

if ( guess===0 || guess > 20) {
    displayMessage('You must enter a number between 1 - 20')
    statusText.style.backgroundColor = 'red'


} else if ( guess !== randomNumber ) {
    guess < randomNumber  ? displayMessage('Number is too low!') : displayMessage('Number is too high!')
    statusText.style.backgroundColor = 'yellow'
   scoreScore.textContent--
   
    if (Number(scoreScore.textContent) === 0 ) {
        displayMessage('You lost the game!')
        principalContainer.style.backgroundColor = 'red'
        principalContainer.style.color = 'black'
        principalContainer.style.fontWeight = 'bold'
        principalContainer.style.border = '5px black solid'
        statusText.style.backgroundColor = 'yellow'
        btnCheck.disabled = 'true'
        btnCheck.style.backgroundColor = 'grey'
        btnTryagain.style.display = 'block'
        btnTryagain.style.backgroundColor = 'yellow'
        
    }


} else if ( guess === randomNumber) {
    document.querySelector('.random-number').textContent = randomNumber
    
    displayMessage('You found the right number!')
    highscoreScore.textContent = scoreScore.textContent
    
    statusText.style.backgroundColor = 'yellow'
    document.querySelector('.input-text').style.backgroundColor = 'yellow'
    btnCheck.style.backgroundColor = 'grey'
    
    principalContainer.style.backgroundColor = 'green'
    principalContainer.style.color = 'black'
    principalContainer.style.fontWeight = 'bold'
    principalContainer.style.border = '5px black solid'

    if (Number(highscoreScore.textContent) < Number(scoreScore.textContent))  
    {    highscoreScore.textContent = scoreScore.textContent
         }

    btnTryagain.style.display = 'block'
    btnTryagain.style.backgroundColor = 'yellow'
    btnCheck.disabled = 'true'
    
}

}

// CHECK BUTTON EVENT

const tryagainBtnEvent = function(){
    scoreScore.textContent = 20;
    highscoreScore.textContent = newHighscore;

    // principalContainer.style.backgroundColor = 'rgb(40, 38, 38)'
    // principalContainer.style.color = 'rgb(200, 200, 34)'
    // displayMessage('Start Guessing...')
    // statusText.style.backgroundColor = 'rgb(40, 38, 38)'
    // btnTryagain.style.display = 'none'
    // btnCheck.style.backgroundColor = 'rgb(200, 200, 34)'
    // principalContainer.style.border = 'rgb(200, 200, 34)'
    // document.querySelector(".random-number").textContent = '?'
    // btnCheck.disabled = 'false'
    // randomNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector('.input-text').value = ''
    window.location.reload();

}

// TRYAGAIN BUTTON EVENT
document.querySelector(".btn-tryagain").addEventListener ('click', tryagainBtnEvent);


document.querySelector(".btn-check").addEventListener('click' , checkBtnEvent);