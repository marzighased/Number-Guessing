const secretNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');

guessBtn.addEventListener('click', function() {
    const userGuess = Number(guessInput.value);
})