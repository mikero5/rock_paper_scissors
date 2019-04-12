//=====================================
function computerPlay() {
  let selection = Math.floor(Math.random() * 3) + 1;
  switch (selection) {
    case 1:
    return 'Rock';
      break;

      case 2:
      return 'Paper';
      break;

      case 3:
      return 'Scissors';
      break;

    default:

  }
}


//=====================================
function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toUpperCase();
  let computer = computerSelection.toUpperCase();
  if(player === 'ROCK') {
    if(computer === 'ROCK') {
      return {
        msg: 'You tie! Rock ties Rock',
        playerWin: 0
      }
    }
    else if (computer === 'PAPER') {
      return {
        msg: 'You lose! Paper beats Rock',
        playerWin: -1
      }
    }
    else {
      return {
        msg: 'You win! Rock beats Scissors',
        playerWin: 1
      }
    }
  }  // if(player === 'ROCK')

  if(player === 'PAPER') {
    if(computer === 'ROCK') {
      return {
        msg: 'You win! Paper beats Rock',
        playerWin: 1
      }
    }
    else if (computer === 'PAPER') {
      return {
        msg: 'You tie! Paper ties Paper',
        playerWin: 0
      }
    }
    else {
      return {
        msg: 'You lose! Scissors beats Paper',
        playerWin: -1
      }
    }
  }  // if(player === 'PAPER')

  if(player === 'SCISSORS') {
    if(computer === 'ROCK') {
      return {
        msg: 'You lose! Rock beats Scissors',
        playerWin: -1
      }
    }
    else if (computer === 'PAPER') {
      return {
        msg: 'You win! Scissors beats Paper',
        playerWin: 1
      }
    }
    else {
      return {
        msg: 'You tie! Scissors ties Scissors',
        playerWin: 0
      }
    }
  }  // if(player === 'PAPER')
}


//=====================================
function game() {
  let playerPoints = 0;
  let computerPoints = 0;

  //----------------------------
  function startNewGame() {
    playerPoints = 0;
    computerPoints = 0;
    winner.style.cssText = 'visibility: hidden';
  }

  //----------------------------
  function displayWinner() {
    if(playerPoints > computerPoints) {
      winner.textContent = 'You Win!';
      winner.style.cssText = 'visibility: visible; color: green; margin: auto; width: 50%; font-size: 2em';
    }
    else {
      winner.textContent = 'Computer Wins!';
      winner.style.cssText = 'visibility: visible; color: red; margin: auto; width: 50%; font-size: 2em';
    }
  }


  // buttons is a node list. It looks and acts much like an array.
  const buttons = document.querySelectorAll('button');

  function handleButton(evt) {
      if(playerPoints >= 5 || computerPoints >= 5)
        startNewGame();

      let player = evt.srcElement.name.toUpperCase();

      let result = playRound(player, computerPlay());
      if(result.playerWin > 0){
        playerPoints++;
      }
      else if (result.playerWin < 0) {
        computerPoints++;
      }

      const playerScore = document.querySelector('#player-score');
      playerScore.textContent = String(playerPoints);

      const computerScore = document.querySelector('#computer-score');
      computerScore.textContent = String(computerPoints);

      if(playerPoints >= 5 || computerPoints >= 5)
        displayWinner();
  }

  // we use the .forEach method to iterate through each button
  buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', (e) => {
      handleButton(e);
    });
  });

}

const all = document.querySelector('*');
all.style.cssText = 'margin: 0; padding: 0';

const heading = document.querySelector('.heading');
heading.style.cssText = 'margin: auto; width: 50%; color: blue; font-size: 2rem';

const buttons = document.querySelector('.buttons');
buttons.style.cssText = 'margin: auto; width: 50%; justify: center';

const playerScore = document.querySelector('.results');
playerScore.style.cssText = 'margin: auto; width: 50%; font-size: 1.5rem';

const winner = document.querySelector('.win-class')
winner.style.cssText = 'margin: auto; width: 50%; visibility: hidden';

const resetButton = document.querySelector('#reset');
resetButton.style.cssText = 'margin-top: 50px; width: 90px; height: 50px; font-size: 1.5rem';

const reset = document.querySelector('.reset-class');
reset.style.cssText = 'margin: auto; width: 50%';

game();
