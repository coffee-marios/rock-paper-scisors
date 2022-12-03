// "use strict";

// let wins = 0 , ties = 0 , losses = 0;


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

let count_score = {
        wins: 0,
        losses: 0,
        ties: 0
    };

function singleRound(playerSelection, computerSelection){
    
    let result;
    let winner; 

    document.getElementById("player-photo").src = `images/${playerSelection}.png`;
    document.getElementById("computer-photo").src = `images/${computerSelection}.png`;

    /* Return the points... */
    

        
    
    if (playerSelection==="paper"){
        switch (computerSelection){
            case "paper":
                result = "That's a tie.";
                count_score['ties'] += 1; 
                break;
            case "rock":
                result = "Paper covers rock.";
                count_score['wins'] += 1; 
                break;
            case "scissors":
                result = "Scissors cuts paper.";
                count_score['losses'] += 1;
                
        }}

    if (playerSelection==="rock"){
        switch (computerSelection){
            case "paper":
                result = "Paper covers rock.";
                count_score['losses'] += 1;
                break;
            case "rock":
                result = "That's a tie.";
                count_score['ties'] += 1; 
                break;
            case "scissors":
                result = "Rock crushes scissors.";
                count_score['wins'] += 1; 
        }
    }

    if (playerSelection==="scissors"){
        switch (computerSelection){
            case "paper":
                result = "Scissors cuts paper.";
                count_score['wins'] += 1; 
                break;
            case "rock":
                result = "Rock crushes scissors.";
                count_score['losses'] += 1;
                break;
            case "scissors":
                result = "That's a tie.";
                count_score['ties'] += 1; 

        }}
    
        console.log(count_score); 
        document.getElementById("result").textContent = result;
        return count_score;

    } 

let elements = document.querySelectorAll("button");
for (let item of elements){
    item.addEventListener('click', event => {
        let player = event.target.getAttribute('data-choice');
        let computer = getComputerChoice();
        console.log(`The computer chose: ${computer}`);
        singleRound(player, computer);
        game();
       
        
    });
}

let ourResult = document.querySelector("p");
document.getElementById("result").textContent = "I smell blood.";

function game(){
    console.log(count_score['wins'])
    document.getElementById("comp_points").textContent = count_score['losses'];
    document.getElementById("hum_points").textContent = count_score['wins'];
  

    if (count_score['wins'] === 5 || count_score['losses'] === 5){

        console.log('We have a winner');

        if (count_score['wins'] === 5) {
            document.getElementById("result").textContent = "The human wins!";
        } else {
            document.getElementById("result").textContent = "The computer wins!"
        }
        
        count_score = {
            wins: 0,
            losses: 0,
            ties: 0
        };

    }
    


}










