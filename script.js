let playerScore = 0;
let computerScore = 0;
let gameActive = true;

const choices = ['Rock', 'Paper', 'Scissors'];
const keyMap = { 'r': 'Rock', 'p': 'Paper', 's': 'Scissors' };

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultDiv = document.getElementById('result');
const resetBtn = document.getElementById('reset');

rockBtn.addEventListener('click', () => playGame('Rock'));
paperBtn.addEventListener('click', () => playGame('Paper'));
scissorsBtn.addEventListener('click', () => playGame('Scissors'));

document.addEventListener('keydown', (e) => {
    const choice = keyMap[e.key.toLowerCase()];
    if (choice) {
        playGame(choice);
    }
});

resetBtn.addEventListener('click', resetGame);

function playGame(playerChoice) {
    if (!gameActive) return;

    const targetImg = document.getElementById(playerChoice.toLowerCase());
    if (targetImg) {
        targetImg.classList.add('selected-choice');
    }

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const resultMessage = determineWinner(playerChoice, computerChoice);

    resultDiv.textContent = `You: ${playerChoice} | Computer: ${computerChoice} | ${resultMessage}`;
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a Tie!";
    }
    if (
        (player === 'Rock' && computer === 'Scissors') ||
        (player === 'Paper' && computer === 'Rock') ||
        (player === 'Scissors' && computer === 'Paper')
    ) {
        playerScore++;
        return 'You Win!';
    } else {
        computerScore++;
        return 'Computer Wins!';
    }
}

function resetGame() {
    gameActive = true;
    resultDiv.textContent = 'Game Reset. Make your move!';

    choices.forEach(choice => {
        const img = document.getElementById(choice.toLowerCase());
        if (img) {
            img.classList.remove('selected-choice');
        }
    });
}