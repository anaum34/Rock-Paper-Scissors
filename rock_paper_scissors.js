// random number between 1-3
let randomchoice = Math.floor(Math.random()*3 + 1);

// establishing values for rock, paper, scissor 
if(randomchoice === 1) {
    getComputerChoice = "Rock".toLowerCase();
}   else if(randomchoice === 2){
    getComputerChoice = "Paper".toLowerCase();
}   else{
    getComputerChoice = "Scissors".toLowerCase();
}

// get human choice
let getHumanChoice = prompt("What's your choice?").toLowerCase();

// scores for human and computer
let humanscore = 0;
let computerscore = 0;

function playRound(humanChoice,computerChoice){
    console.log(`Human Score: ${humanscore}, Computer Score: ${computerscore}`);
    console.log(`Human Choice: ${humanChoice}, Computer Choice: ${computerChoice}`);
    
    if((humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")){
        console.log("It's a tie!");
    }
    if((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper")){
        humanscore += 1;
        console.log("Human wins this round");
    }
    else{
        computerscore += 1;
        console.log("Computer wins!");
    }
}

const humanSelection = getHumanChoice;
const computerSelection = getComputerChoice;

playRound(humanSelection,computerSelection);

