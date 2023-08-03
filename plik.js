choices = ['paper', 'rock', 'scissors'] // zdefinowanie tablicy
let playerScore = 0;
let computerScore = 0;


function computerChoice(){
  return choices[Math.floor(Math.random()* choices.length)] // funkcja ktora zwraca tablice oraz metoda math.random ktora losuje z tablcy wartosc
  }



  function playRound(playerSelection, computerSelection){ // funkcja ktora rozgrywa runde
    if (playerSelection === "rock" && computerSelection === "paper") {
      return "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
      return "You Lose! Scissors beat Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
      return "You Lose! Rock beats Scissors";

  }else if (playerSelection === computerSelection){
    return ("Its a tie");
  }else {
      return "You Win! " + playerSelection + " beats " + computerSelection;
 }

  }



function game(playerSelection) { // glowna funkcja gry

  
  let computerSelection = computerChoice();// zmienna przypisana do zmiennej computerChoice, ktora zwraca wartosci z tablicy
  let result = playRound(playerSelection,computerSelection); // zmienna result przypisana do funkcji playRound z parametrami sign i computerSelection
  
  

  if (result.startsWith("You Win")) {
    playerScore++;
  } else if (result.startsWith("You Lose!")) {
    computerScore++;
  }
  if (playerScore === 5){
    console.log("You won the game!");
    resetGame();
  }



  console.log("Final Score:");
  console.log("Player: " + playerScore);
  console.log("Computer: " + computerScore);

  
  
}


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

function resetGame(){
  playerScore = 0;
  computer
}  
    


game();

 
