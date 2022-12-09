

const para = document.querySelector('p');
para.textContent = "";


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return "draw";
    if (playerSelection === "rock") return computerSelection === "scissors"? "win" : "lose" ;
    if (playerSelection === "scissors") return computerSelection === "paper"? "win" : "lose" ;
    if (playerSelection === "paper") return computerSelection === "rock"? "win" : "lose" ;
}

function main() {
    let playerCount = 0;
    let computerCount = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("Choose your weapon! Type either rock, paper or scissors: ");
        let computerChoice = getComputerChoice();
    
        while (playerChoice != "rock" && playerChoice != "scissors" && playerChoice != "paper") {
            playerChoice = prompt("Invalid input. Please type either rock, paper or scissors: ");
        }

        para.textContent += `Round ${i + 1}

            Player has chosen ${playerChoice}
            Computer has chosen ${computerChoice}\n\n`

        let round = playRound(playerChoice, computerChoice);
        if (round === "win" ) {
            playerCount++;
            para.textContent += `You win! ${playerChoice} beats ${computerChoice}\n\n`;
        } else if (round === "lose") {
            computerCount++;
            para.textContent += `You lose! ${computerChoice} beats ${playerChoice}\n\n`
        } else {
            para.textContent += `It's a draw! You both chose ${playerChoice}\n\n`;
        }
    }
    para.textContent += `Game Over! The final score:    Player: ${playerCount} || Computer: ${computerCount}.`
}

main();

let input;

while (input <= 100) {
    input = +prompt("number greater than 100: ")
}


