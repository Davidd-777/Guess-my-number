'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.status-text').textContent = message;
}

const takeNumber= function (){
    const guess = Number(document.querySelector(".input-text").value);
    console.log(guess);
}


document.querySelector(".btn-check").addEventListener('click' , takeNumber);




   