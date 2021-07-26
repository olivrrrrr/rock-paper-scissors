let computerScore = 0; 
let playerScore = 0;

 function computerPlay(){
     const computerOptions = ['Rock', 'Paper', 'Scissors']; 
     return computerOptions[Math.floor(Math.random() * computerOptions.length)];
 }

 function playRound(playerSelection,computerSelection){
    if(playerSelection.toLowerCase()  === computerSelection.toLowerCase()){
        return 'This is a draw !'
        }  else if(playerSelection.toLowerCase() === 'Paper'.toLowerCase() && computerSelection === 'Rock'){
            return 'You Win! Paper beats Rock'
        } else if(playerSelection.toLowerCase()=== 'Rock'.toLowerCase() && computerSelection === 'Paper'){
            return 'You Lose! Paper beats Rock'
        } else if(playerSelection.toLowerCase() === 'Paper'.toLowerCase() && computerSelection === 'Scissors'){
            return 'You Lose! Scissors beats Paper'
        } else if(playerSelection.toLowerCase() === 'Scissors'.toLowerCase() && computerSelection === 'Paper'){
            return 'You Win! Scissors beats Paper'
        } else if(playerSelection.toLowerCase() === 'Scissors'.toLowerCase() && computerSelection === 'Rock'){
            return 'You Lose! Rock beats Scissors'
        } else if(playerSelection.toLowerCase() === 'Rock'.toLowerCase() && computerSelection === 'Scissors'){
            return 'You Win! Rock beats Scissors'
        }
 }

const startButton = document.querySelector('#Start'); 
startButton.addEventListener('click', () => {
    location.reload();
    return false;
}); 

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {

    button.addEventListener('click', function(e){
        
        const playerSelection = e.target.id;
        const computerSelection = computerPlay();
        const numberOfGames = 5; 

        document.querySelector('#container').innerHTML = playRound(playerSelection, computerSelection) ;
        
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
         
         document.querySelector('#scoreContainer').innerHTML  = `player score: ${playerScore} - computer score: ${computerScore}`;

        if(computerScore + playerScore >= 5){
            if(computerScore > playerScore){
                alert(`The Computer is the winner. They scored: ${computerScore}`)
            } else if(computerScore < playerScore){
                alert(`You are the winner. You scored: ${playerScore}`) 
            } else {
                alert('It is a draw - Nobody won !'); 
            }
        }
           
    });
});

    




