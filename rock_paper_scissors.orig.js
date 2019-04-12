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


function game() {
  let playerPoints = 0;
  let computerPoints = 0;

  for(i=1; i<=5; i++) {
    let player = prompt('Enter Rock, Paper, or Scissors');
    let result = playRound(player, computerPlay());
    if(result.playerWin > 0){
      playerPoints++;
    }
    else if (result.playerWin < 0) {
      computerPoints++;
    }
    console.log("Round " + String(i) + " " + result.msg);
  }
  console.log("Final score -- Player: " + playerPoints + ", computer: " + computerPoints);
}
