// rock paper sisscors

const playerText = document.querySelector('#playerText');
        const computerText = document.querySelector('#computerText');
        const resultText = document.querySelector('#resultText');
        const choiceBtns = document.querySelectorAll('.choiceBtn');
        let player;
        let computer;

        choiceBtns.forEach(button => button.addEventListener('click', () => {
            player = button.textContent;
            computerChoice();
            playerText.textContent = `Player: ${player}`;
            computerText.textContent = `Computer: ${computer}`;
            resultText.textContent = checkResult(); 
        }));

function computerChoice(){
    let randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1:
            computer = 'ROCK';
            break;
        
        case 2:
            computer = 'PAPER';
            break;
         
        case 3:
            computer = 'SCISSORS';
            break;    
    
    }
}

function checkResult(){
    if(player == computer){
        return `draw`;
    }
    else if(player == 'PAPER'){
        return (computer == 'ROCK') ? 'You Win' : 'You Lose';
    }
    else if(player == 'ROCK'){
        return (computer == 'SCISSORS') ? 'You Win' : 'You Lose';
    }
    else if(player == 'SCISSORS'){
        return (computer == 'PAPER') ? 'You Win' : 'You Lose';
    }
}