import { getPlayerGuess } from './getPlayerGuess.js';
import { generateRandomNumber } from './generateRandomNumber.js';
import { checkGuess } from './checkGuess.js';
import { calculateScore } from './calculateScore.js';
import { greetUser } from './greetUser.js';

export function game() {
  const generatedNumber = generateRandomNumber();
  const maxAttempts = 10;

  let attempts = 0;
  let guessedCorrectly = false;

  greetUser(maxAttempts);

  while (attempts < maxAttempts && !guessedCorrectly) {
    attempts++;

    console.log(`Attempt ${attempts} of ${maxAttempts}`);

    const guess = getPlayerGuess();

    if (guess === 'Restarting') {
      if (confirm('Want to start a new game?')) {
        window.location.reload();
        return;
      }

      continue;
    }

    console.log(`You guessed: ${guess}`);

    guessedCorrectly = checkGuess(generatedNumber, guess);

    console.log('-----------------------------------');
  }

  if (guessedCorrectly) {
    const { score, rank } = calculateScore(attempts, maxAttempts);
    console.log('YOU WIN!');
    console.log(`Attempts Used: ${attempts}`);
    console.log(`Score: ${score}`);
    console.log(`Rank: ${rank}`);
  } else {
    console.log('YOU LOSE!');
    console.log(`The correct number was ${generatedNumber}`);
    console.log(`Attempts Used: ${attempts}`);
    console.log('Score: 0');
  }
}
