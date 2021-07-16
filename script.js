
function computerPlay(){
    let options = ['Rock', 'Paper', 'Scissors']; 
    return options[Math.floor(Math.random() * options.length)];
}

function game(){
    let computerScore = 0; 
    let playerScore = 0; 
    let draw = 0; 

    function playRound(playerSelection, computerSelection){
        if(playerSelection === computerSelection){
            return 'This is a draw !'
        }  else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
            return 'You Lose! Paper beats Rock'
        } else if(playerSelection === 'Rock' && computerSelection === 'Paper'){
            return 'You Win! Paper beats Rock'
        } else if(playerSelection === 'Paper' && computerSelection === 'Scissors'){
            return 'You Lose! Scissors beats Paper'
        } else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
            return 'You Win! Scissors beats Paper'
        } else if(playerSelection === 'Scissors' && computerSelection === 'Rock'){
            return 'You Lose! Scissors beats Paper'
        } else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
            return 'You Win! Rock beats Scissors'
        }
      }

    for(let i = 0; i < 5; i++){
        const playerSelection = prompt('Rock, Paper or Scissors ?');
        const computerSelection = computerPlay(); 
        console.log(playRound(playerSelection, computerSelection));
        if(playRound(playerSelection, computerSelection) === 'This is a draw !'){
            draw++ 
        } if(playRound(playerSelection, computerSelection) === 'You Win! Paper beats Rock' || playRound(playerSelection, computerSelection) === 'You Win! Scissors beats Paper' || playRound(playerSelection, computerSelection) === 'You Win! Scissors beats Paper' || playRound(playerSelection, computerSelection) === 'You Win! Rock beats Scissors'){
            playerScore++
        } else {
            computerScore++ 
          }  

        }

        function AnnounceWinner(){
            if(computerScore === 5){
                return 'The Computer is the winner'
            } else if(playerScore === 5){
                return 'You are the winner'
            } else {
                return 'It is a draw'
            }
        } 
        
        // console.log(AnnounceWinner())

    }

  
    
