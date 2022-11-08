"use strict";

function getComputerChoice(){
    // randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
    let computerSelection;

    let randomNumber;
    randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber){
        case 0:
            computerSelection = "paper";
            break;
        case 1:
            computerSelection = "rock";
            break;
        case 2:
            computerSelection = "scissor";
            
    }

    return computerSelection;

}

console.log(getComputerChoice());


function singleRound(playerSelection, computerSelection){

}

function game(){

}


console.log(true);