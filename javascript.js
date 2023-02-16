const aiScores = document.getElementById('aiScore')
const humanScore = document.getElementById('playerScore')
const drawNumber = document.getElementById('drawScore')

// Computer choice generator 
function getComputerChoice(){
    
    let value = Math.floor(Math.random() *3 );
    
    if (value == 0){{}
        computerAnswer = "ROCK";
        return computerAnswer;
    }
    else if (value == 1) {
        computerAnswer = "PAPER";
        return computerAnswer
    }
    else {
        computerAnswer = "SCISSOR";
        return computerAnswer;
    }
}

// Game  Outcomes
var roundResult = "";
function playRound(playerSelection,computerSelection)
{   
    
  if (playerSelection == "ROCK" && computerSelection == "SCISSOR"){
    roundResult = "You win!";
    return roundResult;
  } 
  else if (playerSelection == "SCISSOR" && computerSelection == "PAPER"){
    roundResult = "You win!";
    return roundResult;
  }
  else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
    roundResult = "You win!";
    return roundResult;
  }
  else if (playerSelection == "ROCK" && computerSelection == "PAPER"){
    roundResult = "You lose!";
    return roundResult;
  }
  else if (playerSelection == "PAPER" && computerSelection == "SCISSOR"){
    roundResult = "You lose!";
    return roundResult;
  }
  else if (playerSelection == "SCISSOR" && computerSelection == "ROCK"){
    roundResult = "You lose!";
    return roundResult; }
    else {
        roundResult = "It's a draw";
        return roundResult;
    }
}

// Game Rules

const a = document.getElementById('rockButton');
const b = document.getElementById('paperButton');
const c = document.getElementById('scissorButton');
document.getElementById('rockButton').addEventListener("click",function button1(){
  alert('Rock beats Scissor, but loses to Paper')
} );
document.getElementById('paperButton').addEventListener('click', function button2(){
  alert('Paper beats Rock, but loses to Scissor')
})
function button3(){
  alert('Scissors beats Paper, but loses to Rock')
}
c.addEventListener('click', button3)

// Event Listener to rock, Paper, Scissors buttons

const i = document.getElementById('rockButton2');
function rockChoice(){
      let computerTurn = getComputerChoice();
      let playerTurn = "ROCK";
      eachRound = playRound(playerTurn,computerTurn)
      console.log(eachRound)
      console.log(computerTurn)
};
// i.addEventListener('click',game)


const j = document.getElementById('paperButton2');
function paperChoice(){
      let computerTurn = getComputerChoice();
      let playerTurn = "PAPER";
      eachRound = playRound(playerTurn,computerTurn)
      console.log(eachRound)
      console.log(computerTurn)
};
// j.addEventListener('click',game)

const k = document.getElementById('scissorButton2');
function scissorChoice(){
      let computerTurn = getComputerChoice();
      let playerTurn = "SCISSOR";
      eachRound = playRound(playerTurn,computerTurn)
      console.log(eachRound)
      console.log(computerTurn)
};
// k.addEventListener('click',game)

var playerFinalScore = 0;
var computerFinalScore = 0;
let eachRounds= "";
var drawCounter = 0;

function game(choice){
    if( choice == "rock" ){
      rockChoice();
        if (roundResult.includes("You win")){
          playerFinalScore += 1;
          console.log(` Player Score - ${playerFinalScore}`)
        }
        else if (roundResult.includes("You lose")){
          
          computerFinalScore += 1;
          console.log(` Computer Score - ${computerFinalScore}`)
        }
        else{
          drawCounter +=1;
        }
    }
    else if ((choice == "paper")){
      paperChoice();
      if (roundResult.includes("You win")){
          
          playerFinalScore +=1;
          console.log(`Player Score - ${playerFinalScore}`)
        }
        else if (roundResult.includes("You lose")){
          
          computerFinalScore += 1;
          console.log(`Computer Score - ${computerFinalScore}`)
        }
        else{
          drawCounter +=1;
        }
    }
    else if (( choice == "scissor")){
      scissorChoice();
      if (roundResult.includes("You win")){
          
          playerFinalScore +=1;
          console.log(`Player Score - ${playerFinalScore}`)
        }
        else if (roundResult.includes("You lose")){
          
          computerFinalScore += 1;
          console.log(`Computer Score - ${computerFinalScore}`)
        }
        else{
          drawCounter +=1;
        }

    }
    else{

    }
  
  aiScores.innerHTML = (computerFinalScore);
  humanScore.innerHTML = (playerFinalScore);
  drawNumber.innerHTML=(drawCounter);

  if (playerFinalScore ==5){
    alert('You won!')
    resetValues()
  }
  else if (computerFinalScore==5){
    alert('You lose!')
    resetValues()
  }
  else{}

  
}

function resetValues (){
  aiScores.innerHTML = 0;
  humanScore.innerHTML = 0;
  drawNumber.innerHTML= 0;

}











