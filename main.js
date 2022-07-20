console.log('JS loaded')

function gameRound() {
    let numberGuess;
    // declare variable
    let numberThinkingOf = Number(prompt("Enter the  number you are thinking of, must be an integer between 1 and 100."));
    let numberOfGuesses = 0

    while (numberGuess !== numberThinkingOf) {
        numberGuess = Number(prompt("Enter a number between 1 and 100"));
        if (numberGuess > numberThinkingOf) {
            alert("Too high, guess again");
            numberOfGuesses++
        } else if (numberGuess < numberThinkingOf) {
            alert("Too low, guess again");
            numberOfGuesses++
        }
    }
    numberOfGuesses++
    alert("You're right")
    return numberOfGuesses
};

function playGame() {
    let keepPlaying = 'y'
    while (keepPlaying === 'y' || keepPlaying === 'Y') {
        let guessTotal = gameRound()
        // assign the output of the function gameRound to the variable guessTotal
        alert(`You finished the last round in ${guessTotal} guesses!`)
        keepPlaying = prompt('Do you want to play again, y or n?')
    }
}

playGame();
