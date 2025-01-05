console.log("Hello, World!")

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const number = Math.random();

    if (number <= .33) {
        console.log("Computer: Rock")
        return "rock"
    } else if (number <= .66) {
        console.log("Computer: Paper")
        return "paper"
    } else {
        console.log("Computer: Scissors")
        return "scissors"
    }
}

function getHumanChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = prompt("Choice: Rock, Paper, Scissors").toLowerCase();

    if (options.includes(choice)) {
        return choice
    }
    else getHumanChoice()
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Draw")
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock")
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissors")
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats paper")
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock")
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats scissors")
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper")
        humanScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice())
        console.log("Computer score:", computerScore,"Your score:", humanScore) 
    }
}

playGame()














