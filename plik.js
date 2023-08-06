const resetbutton = document.getElementById("play-again");
  resetbutton.addEventListener("click", function () {
    resetGame();
  });

  const myButton = document.getElementById("button");
  myButton.addEventListener("click", function () {
    game("rock");
  });

  const myButton2 = document.getElementById("button2");
  myButton2.addEventListener("click", function () {
    game("paper"); 
  });

  const myButton3 = document.getElementById("button3");
  myButton3.addEventListener("click", function () {
    game("scissors"); 
  });

  const resultElem = document.querySelector('#result');
  const scoreElem = document.querySelector('#score'); 
  const gameResultElem = document.querySelector('#gameResult');
  const alert = document.querySelector('#alert');

  const choices = ['paper', 'rock', 'scissors'];
  let playerScore = 0;
  let computerScore = 0;

  function computerChoice(){
    return choices[Math.floor(Math.random()* choices.length)];
  }

  function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "paper") {
      return "You Lose! Paper beats Rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      return "You Lose! Scissors beat Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      return "You Lose! Rock beats Scissors";
    } else if (playerSelection === computerSelection) {
      return "It's a tie";
    } else {
      return "You Win! " + playerSelection + " beats " + computerSelection;
    }
  }

  function game(playerSelection) {
    if (playerScore === 5 || computerScore === 5) {
      alert.textContent = "The game has already ended. Please click 'Play Again' to start a new game.";
    return;
        }
    let computerSelection = computerChoice();
    let result = playRound(playerSelection, computerSelection);
  
    if (result.startsWith("You Win")) {
      playerScore++;
    } else if (result.startsWith("You Lose!")) {
      computerScore++;
    }


    resultElem.textContent = result;
    scoreElem.textContent = "Player: " + playerScore + ", Computer: " + computerScore;

    if (computerScore === 5) {
      console.log("Computer wins the game!");
    } else if (playerScore === 5) {
      console.log("Player wins the game!");
      
    }

    console.log("Final Score:");
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
  }

  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    scoreElem.textContent = "Player: " + playerScore + ", Computer: " + computerScore;
    alert.textContent = ''; 
  }