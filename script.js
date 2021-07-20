function computerPlay(){
   let options = ['Rock', 'Paper', 'Scissors']; 
   return options[Math.floor(Math.random() * options.length)];
}

   function game(){
    let computerScore = 0; 
    let playerScore = 0; 
    
        for(let i=0; i < 5; i++){    

            function playRound(playerSelection, computerSelection){
                
                if(playerSelection.toLowerCase()  === computerSelection.toLowerCase()){
                       return 'This is a draw !'
                      }  else if(playerSelection.toLowerCase() === 'Paper'.toLowerCase() && computerSelection === 'Rock'){
                          return 'You Lose! Paper beats Rock'
                       } else if(playerSelection.toLowerCase()=== 'Rock'.toLowerCase() && computerSelection === 'Paper'){
                           return 'You Win! Paper beats Rock'
                       } else if(playerSelection.toLowerCase() === 'Paper'.toLowerCase() && computerSelection === 'Scissors'){
                           return 'You Lose! Scissors beats Paper'
                       } else if(playerSelection.toLowerCase() === 'Scissors'.toLowerCase() && computerSelection === 'Paper'){
                           return 'You Win! Scissors beats Paper'
                       } else if(playerSelection.toLowerCase() === 'Scissors'.toLowerCase() && computerSelection === 'Rock'){
                           return 'You Lose! Scissors beats Paper'
                       } else if(playerSelection.toLowerCase() === 'Rock'.toLowerCase() && computerSelection === 'Scissors'){
                           return 'You Win! Rock beats Scissors'
                       }
                    }

                        // In the 5 rounds we want the user to give an input against the computer
                        const playerSelection = prompt('Rock, paper or scissors ?')
                        const computerSelection = computerPlay();
                        console.log(playRound(playerSelection, computerSelection));

                        // Every time the player or computer wins add a point to their tally
                         if(playRound(playerSelection, computerSelection) === 'You Win! Paper beats Rock' || 
                         playRound(playerSelection, computerSelection) === 'You Win! Scissors beats Paper' || 
                         playRound(playerSelection, computerSelection) === 'You Win! Scissors beats Paper' || 
                         playRound(playerSelection, computerSelection) === 'You Win! Rock beats Scissors'){
                            playerScore++
                        } else if(playRound(playerSelection, computerSelection) === 'You Lose! Paper beats Rock' || 
                        playRound(playerSelection, computerSelection) === 'You Lose! Scissors beats Paper' || 
                        playRound(playerSelection, computerSelection) === 'You Lose! Scissors beats Paper' || 
                        playRound(playerSelection, computerSelection) === 'You Lose! Rock beats Scissors '){
                            computerScore++;
                          }
                        }
                
                        if(computerScore > playerScore){
                            return `The Computer is the winner. They scored: ${computerScore}`
                        } else if(computerScore < playerScore){
                            return `You are the winner. You scored: ${playerScore}`
                        } else {
                            return 'It is a draw - Nobody won !'
                        }
    
                    }

  
    
