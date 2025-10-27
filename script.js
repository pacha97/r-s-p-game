
function getComputerChoice() {
    const random = Math.random();
    if (random < 0.33) {
        return "rock";
    } else if (random < 0.66) {
        return "scissor";
    } else {
        return "paper";
    }
}

function getHumanChoice() {
    const randomHuman = window.prompt("Choose Rock, Scissor or paper")
    return randomHuman.toLowerCase();
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <=5; round++) {
        console.log(`\n--- Round ${round} ---`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        console.log(`Computer chose: ${computerChoice}`);
        console.log(`You chose: ${humanChoice}`);

        if (humanChoice === computerChoice) {
        console.log("It's a tie");
        } else if (
            humanChoice === "rock" && computerChoice === "scissor" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissor" && computerChoice === "paper" 
        ) {
            console.log("You win this round");
            humanScore++;
        } else {
            console.log("Computer win this round");
            computerScore++;
        }

        console.log(`Score : You: ${humanScore} | Computer:${computerScore}`);
    
    }

    //final Winner
    console.log("\n--- Final Result ---");
    if (humanScore > computerScore) {
        console.log(`You won the game! Final Score: You ${humanScore} - Computer ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer won the game! Final Score: You ${humanScore} - Computer ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final Score: You ${humanScore} - Computer ${computerScore}`);
    }

}

playGame();

// console.log(getComputerChoice());
// console.log(getHumanChoice());