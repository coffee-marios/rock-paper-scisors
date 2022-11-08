"use strict";

let wins = 0 , ties = 0 , losses = 0;



function getComputerChoice(){
    // randomly return either ‘Rock’, ‘Paper’ or ‘scissors’
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
                result = "That's a tie.";
                ties += 1;
                break;
            case "rock":
                result = "You won. Paper covers rock.";
                wins += 1;
                break;
            case "scissors":
                result = "You lost. Scissors cuts paper.";
                losses += 1;
        }}

    if (playerSelection==="rock"){
        switch (computerSelection){
            case "paper":
                result = "You lost. Paper covers rock.";
                losses += 1;
                break;
            case "rock":
                result = "That's a tie.";
                ties += 1;
                break;
            case "scissors":
                result = "You won. Rock crushes scissors.";
                wins += 1;
        }
    }

    if (playerSelection==="scissors"){
        switch (computerSelection){
            case "paper":
                result = "You win. Scissors cuts paper.";
                wins += 1;
                break;
            case "rock":
                result = "You lost. Rock crushes scissors.";
                losses += 1;
                break;
            case "scissors":
                result = "That's a tie.";
                ties += 1;

        }}
    
        return result; 

    }





function game(){

    let playerSelection;
    
    for (let i=0; i<5; i++){

        let computerSelection = getComputerChoice();


        playerSelection = prompt("Make your choice: paper, rock or scissors?");



        console.log(`Human: ${playerSelection} || Computer: ${computerSelection}`);
        console.log(singleRound(playerSelection.toLowerCase(), computerSelection));
        
    }
    console.log("-------------------------------------------------------");
    console.log(`Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`);

    if (wins>losses){
        console.log("YOU ARE THE WINNER!");
    }

    if (losses>wins){
        console.log("THE WINNER IS... THE COMPUTER!");
    }

    if (losses===wins){
        console.log("THIS MATCH ENDED WITHOUT A WINNER!");
    }

   
}

game();

