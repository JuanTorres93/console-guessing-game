import { getPlayerGuess } from './getPlayerGuess.js';
import { generateRandomNumber, checkGuess } from './generateRandomNumber.js';
import { calculateScore } from './calculateScore.js';

export function game() {
    const generatedNumber = generateRandomNumber();
    const maxAttempts = 10;

    let attempts = 0;
    let guessedCorrectly = false;
    let guess;

    console.clear();

    console.log("===================================");
    console.log("EVIL AI NUMBER GUESSING GAME");
    console.log("===================================");
    console.log("I am the Evil AI!");
    console.log("Guess my secret number between 1 and 100.");
    console.log(`You have ${maxAttempts} attempts.`);
    console.log("-----------------------------------");

    while (attempts < maxAttempts && !guessedCorrectly && guess != "Restarting") {
        attempts++;

        console.log(`Round ${attempts} of ${maxAttempts}`);

        const guess = getPlayerGuess();

        if(guess != "Restarting")
        {
            console.log(`You guessed: ${guess}`);

            guessedCorrectly = checkGuess(generatedNumber, guess);

            console.log("-----------------------------------");
        }        
    }

    if (guessedCorrectly) {
        const { score, rank } = calculateScore(attempts, maxAttempts);

        console.log("YOU WIN!");
        console.log(`Attempts Used: ${attempts}`);
        console.log(`Score: ${score}`);
        console.log(`Rank: ${rank}`);
    } else {
        console.log("YOU LOSE!");
        console.log(`The correct number was ${generatedNumber}`);
        console.log(`Attempts Used: ${attempts}`);
        console.log("Score: 0");
    }

    console.log("===================================");
    if(guess != "Restarting")
    {
        if(confirm("Want to start a new game?"))
        {
            window.location.reload();
            return;
        }
    }    
}