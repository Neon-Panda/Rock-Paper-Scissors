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
        return ("Draw")
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        computerScore++;
        return ("You lose! Paper beats Rock")
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        return ("You win! Rock beats scissors")
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        computerScore++;
        return ("You lose! Scissors beats paper")
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        return ("You win! Paper beats rock")
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        computerScore++;
        return ("You lose! Rock beats scissors")
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        return ("You win! Scissors beats paper")
    }
}


const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const result = playRound(button.className, getComputerChoice())
    
        const body = document.querySelector("body");

        const resultsDiv = document.createElement("div");
        resultsDiv.classList.add("result")
        resultsDiv.textContent = result;
        body.appendChild(resultsDiv)
    
        const totalScore = document.createElement("div");
        totalScore.classList.add("totalScore");
        totalScore.textContent = `Human score: ${humanScore} | Computer score: ${computerScore}`
        body.appendChild(totalScore);

        if (humanScore >= 5 || computerScore >= 5) {
            const winner = humanScore > computerScore? `You` : `The computer`;
            
            const winnerDiv = document.createElement("div");
            winnerDiv.classList.add("winner");
            winnerDiv.textContent = `${winner} wins!`;
            body.appendChild(winnerDiv);
        }})
});










