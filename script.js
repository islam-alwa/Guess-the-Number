const submitButton = document.querySelector('#submit');
const newNumberButton = document.querySelector('#new_n');
const guessInput = document.querySelector('#guess');
const resultDisplay = document.querySelector('#result');

let randomNumber = Math.floor(Math.random() * 100) + 1;
let trys = 3;
submitButton.addEventListener('click', () => {
    if (trys === 0) {
        resultDisplay.textContent = `Game Over! The number was ${randomNumber}.`;
        return;
    }
    else {
        if (guessInput.value === randomNumber) {
            resultDisplay.textContent = "Congratulations! You guessed the number.";
        } else {
            if (guessInput.value < randomNumber) {
                resultDisplay.textContent = "low! Try again.";
            } else {
                resultDisplay.textContent = "high! Try again.";
            }
            trys--;
        }
    }
});
newNumberButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    trys = 3;
    resultDisplay.textContent = "New number generated! Start guessing.";
    guessInput.value = '';
})
