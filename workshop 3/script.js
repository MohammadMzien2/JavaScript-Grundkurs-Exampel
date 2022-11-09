// Guess the number
/*
const getRandomNumber = (max = 10) => {
    return Math.ceil( Math.random() * max );
}

let exitGame = false;
let highscore = null;

while (exitGame === false) {     // while (!exitGame) {
    let numberToGuess = getRandomNumber();
    let continueGame = true;
    let tries = 0;

    console.log("numberToGuess:", numberToGuess);

    while (continueGame) {
        // Ask user for guess
        let guess = Number( prompt("Please guess a number between 1-10") );
        console.log("Guessed number:", guess, typeof guess);

        if (guess === numberToGuess) {
            // Guess was correct
            // Increase number of guesses made
            tries++;

            // we can haz highscore?
            if (highscore) {
                // new highscore?
                if (tries < highscore) {
                    console.log(`YAY NEW HIGHSCORE!`);
                    highscore = tries;
                } else {
                    console.log(`Sorry, no new highscore. Your current highscore is ${highscore}.`);
                }
            } else {
                highscore = tries;
            }

            console.log("Guess was correct! ");
            alert(`Great success! You guessed the correct answer in ${tries} tries.`);
            continueGame = false;

        } else if (guess === 0) {
            // User rage-quit
            console.log("Guess was 0, quitting game");
            alert(`Y U GIVE UP AFTER ONLY ${tries} TRIES?!`);
            continueGame = false;
            exitGame = true;

        } else if (guess > numberToGuess) {
            // Guess was too high
            // Increase number of guesses made
            tries++;
            console.log("Guess was too high");
            alert("Guess was too high");

        } else if (guess < numberToGuess) {
            // Guess was too low
            // Increase number of guesses made
            tries++;
            console.log("Guess was too low ");
            alert("Guess was too low");

        } else {
            // Guess was not valid
            console.log("That's not a number");
            alert("That's not a number");
        }
    }
}
console.log("Game ended");*/