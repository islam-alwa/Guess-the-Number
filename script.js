const submitButton = document.querySelector('#submit');
const newNumberButton = document.querySelector('#new_n');
const guessInput = document.querySelector('#guess');
const resultDisplay = document.querySelector('#result');

let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber); // For debugging purposes, you can remove this line in production
let trys = 5;
submitButton.addEventListener('click', () => {
    if (trys === 0) {
        resultDisplay.textContent = `Game Over! The number was ${randomNumber}.`;
        return;
    }
    else {

        if (guessInput.value  === ""  || guessInput.value < 0 || guessInput.value > 100) {
            resultDisplay.textContent = "Please enter a valid number between 0 and 100.";
            return;}
        else{
            let userGuess = Number(guessInput.value);
        if (userGuess === randomNumber ) {
            resultDisplay.textContent = "Congratulations! You guessed the number.";
            return
        } else {
            if (userGuess < randomNumber) {
                resultDisplay.textContent = "too low! Try again you have " + (trys) + " tries left.";
            } else {
                resultDisplay.textContent = "too high! Try again you have " + (trys) + " tries left.";
            }
            trys--;
        }
    }
    }
});
newNumberButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    trys = 5;
    resultDisplay.textContent = "New number generated! Start guessing.";
    guessInput.value = '';
})
