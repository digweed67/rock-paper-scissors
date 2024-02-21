
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function displayComputerChoice () {
    let computerSelection = getComputerChoice();
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
});
 

let paperImage = document.querySelector(".paper").addEventListener("click", function() {
    setPlayerChoice("paper");
    displayComputerChoice ();
});

let scissorsImage = document.querySelector(".scissors").addEventListener("click", function() {
    setPlayerChoice("scissors");
    displayComputerChoice ();
});


