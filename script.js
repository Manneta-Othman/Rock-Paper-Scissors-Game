
const rock = document.querySelector('.choose .rock')
const paper = document.querySelector('.choose .paper')
const scissors = document.querySelector('.choose .scissors')

const playerResult = document.querySelector('.choice .your-choice')
const ComputerResult = document.querySelector('.choice .computer-choice')

const playerWins = document.querySelector('.player-wins')
const computerWins = document.querySelector('.computer-wins')

playerWins.innerText = 0
computerWins.innerText = 0


const choices = ['rock', 'paper', 'scissors']

rock.addEventListener('click', () => {
    console.log('rock')
    computerChoice('rock')
})

paper.addEventListener('click', () => {
    console.log('paper')
    computerChoice('paper')

})

scissors.addEventListener('click', () => {
    console.log('scissors')
    computerChoice('scissors')

})


function computerChoice(playerChoice) {
    //clear space if imgs get too much(more than 9)
    if(playerResult.childNodes.length > 9){
        playerResult.removeChild(playerResult.firstElementChild)
        ComputerResult.removeChild(ComputerResult.firstElementChild)                
    }

    const choice = choices.sort(() => Math.random() - .5)[0]
    console.log(choice)
    //appending computer img
    const computerImage =  document.createElement('img')
    computerImage.setAttribute('src', `./assets/${choice}.svg`)
    ComputerResult.appendChild(computerImage)

    //appending players img
    const playerImage =  document.createElement('img')
    playerImage.setAttribute('src', `./assets/${playerChoice}.svg`)
    playerResult.appendChild(playerImage)

    result(choice, playerChoice)
}

function result(computerChoice, playerChoice) {
    if(computerChoice === 'paper' && (playerChoice === 'rock') ){
        computerWins.innerText = Number(computerWins.innerText) + 1
    }else if(computerChoice === 'rock' && playerChoice === 'scissors'){
        computerWins.innerText = Number(computerWins.innerText) + 1
    }else if(computerChoice === 'scissors' && playerChoice === 'paper') {
        computerWins.innerText = Number(computerWins.innerText) + 1
    }else if(computerChoice === playerChoice){
        computerWins;
        playerWins;
    }else{
        playerWins.innerText = Number(playerWins.innerText) + 1
    }
}