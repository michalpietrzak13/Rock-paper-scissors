
const choices = ["rock","paper","scissors"]

function game() {

}

function playRound(playerSelection, computerSelection){
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection,computerSelection)
  console.log(winner);

}
const playerChoice = "rock"
const comp = "paper"


function playerChoice(){
let input = prompt('Type Rock, Paper or Scissors')
while (input == null) {
  prompt('Type Rock, Paper or Scissors');
}

input = input.toLowerCase();
let check = validateInput(input);
while (check == false) {
  input = prompt(
    "Type Rock, Paper, or Scissors. Spelling needs to be exact, but capitalization doesnt matter");
}
  while (input == null) {
    input = prompt("Type Rock, Paper or Scissors");
    
  }
  input = input.toLowerCase();
  check = validateInput(input);
}

return input;

function computerChoice(){
return choices[Math.floor(Math.random()* choices.length)]

}

function validateInput(choice){
  return choice.includes(choice);
   
}
function checkWinner(choiceP, ChoiceC){
  if(choiceP === choiceC){
    return 'Tie';
  } else if ((choiceP === "rock" && choiceC === "scissors") ||  
  (choiceP === "paper" && choiceC === "rock" ||  
  (choiceP === "scissors" && choiceC === "paper"))){
    return "Player";
  } else {
    return "Computer";
  }

}

game();