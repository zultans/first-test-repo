// Generate a random number between 1 and 100
const target = Math.floor(Math.random() * 100) + 1;

// Ask the user for their guess
let guess = prompt("Guess a number between 1 and 100:");

// Keep track of the number of guesses
let numGuesses = 1;

// Keep prompting the user for a guess until they get it right
while (guess !== target) {
    if (guess > target) {
        alert("Too high! Guess again.");
    } else {
        alert("Too low! Guess again.");
    }
    guess = prompt("Guess a number between 1 and 100:");
    numGuesses++;
}

// The user guessed correctly
alert("Congratulations! You guessed the number in " + numGuesses + " tries.");
