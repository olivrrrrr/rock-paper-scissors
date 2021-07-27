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

function points(play){
    if(play === 'You Win! Paper beats Rock' || 
        play === 'You Win! Scissors beats Paper' || 
        play === 'You Win! Scissors beats Paper' || 
        play === 'You Win! Rock beats Scissors'){
           playerScore++
       } else if(play === 'You Lose! Paper beats Rock' || 
       play === 'You Lose! Scissors beats Paper' || 
       play === 'You Lose! Scissors beats Paper' || 
       play === 'You Lose! Rock beats Scissors '){
           computerScore++;
       }
}

function AnnounceWinner(player1, player2){
    if(player1 + player2 >= 5){
        if(player1 < player2){
            alert(`The Computer is the winner. They scored: ${player2}`)
        } else if(player1 >  player2){
            alert(`You are the winner. You scored: ${player1}`) 
        } else {
            alert('It is a draw - Nobody won !'); 
        }
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
        
        points(playRound(playerSelection, computerSelection));

        document.querySelector('#scoreContainer').innerHTML  = `player score: ${playerScore} - computer score: ${computerScore}`;
           
        AnnounceWinner(playerScore, computerScore)
    });
});

    




