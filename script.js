const secretNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');

guessBtn.addEventListener('click', function() {
    const userGuess = Number(guessInput.value);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Enter a Number between 1-100';
    } else if (userGuess === secretNumber) {
        message.textContent = 'Correct!';
        message.style.color = 'green';
    } else if (userGuess > secretNumber) {
        message.textContent = 'Your Number is too Big!';
        message.style.color = 'red';
    } else {
        message.textContent = 'Your Number is too Small!';
        message.style.color = 'red'; 
    }
    guessInput.value = '';
    guessInput.focus();      
});