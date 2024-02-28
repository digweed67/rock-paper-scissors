
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let computerSelection; 
function displayComputerChoice () {
    computerSelection = getComputerChoice();
    document.getElementById("computerChoiceDisplay").textContent = `Computer choice: ${computerSelection}`;
}; 




let playerSelection; 

function setPlayerChoice (choice) {
    playerSelection = choice; 
    displayPlayerChoice(); 
}

function displayPlayerChoice () {
    document.getElementById("playerChoiceDisplay").textContent = `Your choice: ${playerSelection}`; 
}




let rockImage = document.querySelector(".rock").addEventListener("click", function () {
    setPlayerChoice("rock");
    displayComputerChoice ();
    playRound(playerSelection, computerSelection);
});
 

let paperImage = document.querySelector(".paper").addEventListener("click", function() {
    setPlayerChoice("paper");
    displayComputerChoice ();
    playRound(playerSelection, computerSelection);
});

let scissorsImage = document.querySelector(".scissors").addEventListener("click", function() {
    setPlayerChoice("scissors");
    displayComputerChoice ();
    playRound(playerSelection, computerSelection);
});


let playerScore = 0;
let computerScore = 0; 
for (let i = 0; i < 5; i++) {

        function playRound(playerSelection, computerSelection) {
            
            if (playerSelection === computerSelection){
                document.getElementById("result").textContent = "It's a tie!";
            } else if (
                (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "paper") ||
                (playerSelection === "paper" && computerSelection === "rock") 
                ) {
                document.getElementById("result").textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    
 
            } else {
                document.getElementById("result").textContent = "Computer wins!"
            }
        }
    }

