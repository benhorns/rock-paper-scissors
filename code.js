
      const winnerElement = document.getElementById('winner')

      let playerWins = 0;
      let computerWins = 0;


      const buttons = document.querySelectorAll('button');
      buttons.forEach((button) => {button.addEventListener('click', (e) => 
      {
        console.log(button.id)
        winnerElement.innerHTML = playRound(button.id, computerPlay());
        document.getElementById("cWins").textContent = computerWins
        document.getElementById("pWins").textContent = playerWins
      })
    })
    
    // function game() {
    //   for (i = 0; i < 5; i++) {
      function computerPlay() {
      let x = Math.floor(Math.random() * Math.floor(3));
      if (x == 0) {
        return 'rock';
      } else if (x == 1) {
        return 'paper';
      } else {
        return 'scissor';
      }
    }

    // const playerSelection = prompt('Rock,paper or scissor?');
    const computerSelection = computerPlay();

    function playRound(playerSelection, computerSelection) {
      if (
        (playerSelection === 'rock' &&
          computerSelection === 'rock') ||
        (playerSelection === 'paper' &&
          computerSelection === 'paper') ||
        (playerSelection === 'scissor' &&
          computerSelection === 'scissor')
      ) {
        return 'TIE!';
      } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        computerWins ++;
        return 'Sorry you lose! Paper beats rock.';
      } else if (playerSelection === 'rock' &&computerSelection === 'scissor') {
        playerWins ++;
        return 'You win! Rock beats scissor!';
      } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerWins ++;
        return 'You win! Paper beats rock!';
      } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        return 'You lose! Scissor beats paper';
        computerWins ++;
      } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        computerWins ++;
        return 'You lose! Rock beats scissor';
      } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerWins ++;
        return 'You win! Scissor beats paper';
      }
    }


    // confirm(playRound(playerSelection, computerSelection));
//   }
// }

// game();
