choices = ['paper', 'rock', 'scissors'] // zdefinowanie tablicy

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



function game() { // glowna funkcja gry

  let playerScore = 0;
  let computerScore = 0;
 
  for(let i  = 0; i < 5; i++) { // petla for ktora pobiera od uzytkownika wartosc 
    let sign = prompt("Write your choice (paper/rock/scissors)").toLocaleLowerCase(); // zdefinowanie zmiennej i wywolanie metody prompt
    let computerSelection = computerChoice();// zmienna przypisana do zmiennej computerChoice, ktora zwraca wartosci z tablicy
    let result = playRound(sign, computerSelection); // zmienna result przypisana do funkcji playRound z parametrami sign i computerSelection
    console.log(result);


    if (result.startsWith("You Win")){ // metoda startsWith zwraca true, jesli ciag zaczyna sie od okreslonego ciagu zwraca true lub false
      playerScore++;
    }else if (result.startsWith("You Lose!")){
      computerScore++;
    }
    
    
}

console.log("Final Score:");
console.log("Player: " + playerScore);
console.log("Computer: " + computerScore);

if (playerScore > computerScore) { // warunek dotyczacy okreslenia wygranego
  console.log("You won the game!");
}else if (playerScore < computerScore) {
  console.log("You Lose");
}else {
  console.log("It's Tie");
 }
}


game();
 
