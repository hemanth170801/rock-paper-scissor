// Define variables
const buttons = document.querySelectorAll('.buttons button');
const userScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('Computer-score');
const resultEl = document.getElementById('result');
let userScore = 0;
let computerScore = 0;

// Add event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const userChoice = button.id;
    const computerChoice = computerChoose();
    const result = checkWinner(userChoice, computerChoice);
    updateScore(result);
    updateResultMessage(result, userChoice, computerChoice);
  });
});

// Computer randomly chooses rock, paper, or scissors
function computerChoose() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Check who wins the game
function checkWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'draw';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'user';
  } else {
    return 'computer';
  }
}

// Update score based on result
function updateScore(result) {
  if (result === 'user') {
    userScore++;
  } else if (result === 'computer') {
    computerScore++;
  }
  userScoreEl.textContent = userScore;
  computerScoreEl.textContent = computerScore;
}

// Update result message based on result
function updateResultMessage(result, userChoice, computerChoice) {
  if (result === 'draw') {
    resultEl.textContent = `You both chose ${userChoice}. It's a draw.`;
  } else if (result === 'user') {
    resultEl.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. You win!`;
  } else {
    resultEl.textContent = `You chose ${userChoice}, computer chose ${computerChoice}. You lose.`;
  }
}

