"use strict";

function getComputerChoice(){
    // randomly return either ‘Rock’, ‘Paper’ or ‘scissorss’
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
            computerSelection = "scissors";
            
    }

    return computerSelection;

}



function singleRound(playerSelection, computerSelection){
    
    let result;
    
    if (playerSelection==="paper"){
        switch (computerSelection){
            case "paper":
                result = "That's a draw. You both chose paper.";
                break;
            case "rock":
                result = "You won. Paper covers rock";
                break;
            case "scissors":
                result = "You lost. Scissors cuts paper.";
        }}

    if (playerSelection==="rock"){
        switch (computerSelection){
            case "paper":
                result = "You lost. Paper covers rock.";
                break;
            case "rock":
                result = "That's a draw. You both chose rock.";
                break;
            case "scissors":
                result = "You won. Rock crushes scissors.";
        }}

    if (playerSelection==="scissors"){
        switch (computerSelection){
            case "paper":
                result = "You won. Scissors cuts paper.";
                break;
            case "rock":
                result = "You won. Rock crushes scissors.";
                break;
            case "scissors":
                result = "That's a draw. You both chose scissors.";
        }}
    
        return result; 

    }

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(singleRound(playerSelection, computerSelection));



function game(){

}


console.log(true);