choices = ['paper', 'rock', 'scissors']

function computerChoice(){
  return choices[Math.floor(Math.random()* choices.length)]
  }



  function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "paper") {
      return "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
      return "You Lose! Scissors beat Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
      return "You Lose! Rock beats Scissors";
  } else {
      return "You Win! " + playerSelection + " beats " + computerSelection;
  }




function game() {

  let playerScore = 0;
  let computerScore = 0;
 
  for(let i  = 0; i < 5; i++) {
    let sign = prompt("Write your choice (paper/rock/scissors)").toLocaleLowerCase();
    let computerSelection = computerChoice();
    let result = playRound(sign, computerSelection);
    console.log(result);


    if (result.startsWith("You Win")){
      playerScore++;
    }else if (result.startsWith("You Lose!")){
      computerScore++;
    }
    
    
}

console.log("Final Score:");
console.log("Player: " + playerScore);
console.log("Computer: " + computerScore);

if (playerScore > computerScore) {
  console.log("You won the game!");
}else if (playerScore < computerScore) {
  console.log("You Lose");
}else {
  console.log("It's Tie");
 }
}
}
 
