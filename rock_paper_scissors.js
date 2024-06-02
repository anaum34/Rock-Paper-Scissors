// Function to generate a random choice for the computer
function getComputerChoice() {
    let randomchoice = Math.floor(Math.random() * 3 + 1);
    if (randomchoice === 1) {
        return "rock";
    } else if (randomchoice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Get human choice
let getHumanChoice = prompt("What's your choice?").toLowerCase();

// Scores for human and computer
let humanscore = 0;
let computerscore = 0;

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    console.log(`Human Score: ${humanscore}, Computer Score: ${computerscore}`);
    console.log(`Human Choice: ${humanChoice}, Computer Choice: ${computerChoice}`);

    if (
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanscore += 1;
        console.log("Human wins this round!");
    } else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        computerscore += 1;
        console.log("Computer wins this round!");
    } else {
        console.log("It's a tie!");
    }
}

// Play a single round
let humanSelection = getHumanChoice; // This line is incorrect
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// Function to play the game
function playGame() {
    for (let i = 1; i < 5; i++) {
        let getHumanChoice = prompt("What's your choice?").toLowerCase();
        let humanSelection = getHumanChoice; // This line is incorrect
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

// Call the function to play the game
playGame();

// Display final scores
console.log("Final Score:");
console.log(`Human: ${humanscore}, Computer: ${computerscore}`);

// Determine the winner
if (humanscore > computerscore) {
    console.log("Human Wins!");
} else if (computerscore > humanscore) {
    console.log("Computer Wins!");
} else {
    console.log("It's a tie!");
}
