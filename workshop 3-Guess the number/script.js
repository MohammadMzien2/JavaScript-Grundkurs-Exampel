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



/**
 * Guess the number
 *
 * Skriv om ”gissa talet” till att ta emot och visa utfall i DOM. Använd
 * formulär-fält för att ta emot input från användaren, och när formuläret
 * skickas (submits) så jämför det gissade talet mot svaret och visa utfallet
 * i DOM istället för alert()-rutor.
 *
 * STEG 1
 * En input-box där man kan gissa på ett tal. En knapp för att gissa.
 *
 * STEG 1.1
 * Visa resultatet i en alert.
 *
 * STEG 1.2
 * Visa om resultatet var rätt eller inte i ett HTML-element.
 *
 * STEG 2
 * Visa antalet gissningar hittills i ett HTML-element.
 *
 * STEG 3
 * Visa om det gissade talet var för högt eller lågt i ett HTML-element.
 *
 * STEG 4
 * Skapa en knapp för att starta om spelet (ett nytt tal ska slumpas fram och
 * antalet gissningar ska nollställas).
 *
 */

 const cheatEl = document.querySelector('#cheat');
 const formGuessEl = document.querySelector('#formGuess');
 const inputGuessEl = document.querySelector('#inputGuess');
 const btnGetLuckyEl = formGuessEl.querySelector('button[type="submit"]');
 const guessesEl = document.querySelector('#guesses');
 const turnoutEl = document.querySelector('#turnout');
 
 // Get a random number between 1-10
 const getRandomNumber = function(max = 10) {
     return Math.ceil( Math.random() * max );
 }
 
 let correctNumber;
 let guesses;
 
 const startNewGame = () => {
     // Get a number to guess
     correctNumber = getRandomNumber();
 
     // Reset number of guesses to 0
     guesses = 0;
 
     // I'm going to cheat!
     cheatEl.innerText = correctNumber;
 }
 
 const updateGuesses = (nbrOfGuesses) => {
     guessesEl.innerText = `${nbrOfGuesses} guesses`;
 }
 
 // Listen for guesses
 formGuessEl.addEventListener('submit', e => {
     // Stop form  being sent to the server
     e.preventDefault();
 
     // Get guessed number from input-field (and convert it to a Number)
     const guessedNumber = Number(inputGuessEl.value);
 
     // Increase number of guesses made
     guesses++;
 
     // Update DOM with guesses made
     updateGuesses(guesses);
 
     // Check if guess was correct
     if (guessedNumber === correctNumber) {
         // YAY
         turnoutEl.innerText = `${guessedNumber} is correct! 🥳`;
 
         // Stop user from making more guesses (as their guess was correct 🙄)
         btnGetLuckyEl.setAttribute('disabled', 'disabled');
 
     } else if (guessedNumber < correctNumber) {
         // 😔
         turnoutEl.innerText = `${guessedNumber} is TOO LOW!`;
 
     } else if (guessedNumber > correctNumber) {
         // Also 😔
         turnoutEl.innerText = `${guessedNumber} is TOO HIGH!`;
 
     }
 
     // Empty previous guess
     inputGuessEl.value = "";
 
     // Focus on input field
     inputGuessEl.focus();
 });
 
 // Listen for reset/"New game"
 formGuessEl.addEventListener('reset', () => {
     // Start a new game
     startNewGame();
 
     // Update DOM with guesses made
     updateGuesses(guesses);
 
     // Empty previous result
     turnoutEl.innerText = "";
 
     // Enable submit-button again
     btnGetLuckyEl.removeAttribute('disabled');
 });
 
 // Start a new game
 startNewGame();
 
