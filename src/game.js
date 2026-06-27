import { getPlayerGuess } from './getPlayerGuess.js';
import { generateRandomNumber } from './generateRandomNumber.js';
import { checkGuess } from './checkGuess.js';
import { calculateScore } from './calculateScore.js';
import { greetUser } from './greetUser.js';
import { sleep } from './utils/sleep.js';
import { confirmStartGame } from './confirmStartGame.js';
import { getRandomItemFromArray } from './utils/getRandomItemFromArray.js';
import { GAME_ENDED_MESSAGES, GAME_QUIT_MESSAGES } from './messages/gameEndMessages.js';

export async function game() {
  const generatedNumber = generateRandomNumber();
  const maxAttempts = 10;

  let attempts = 0;
  let guessedCorrectly = false;

  const confirmedStart = await confirmStartGame();

  if (!confirmedStart) {
    console.log(getRandomItemFromArray(GAME_QUIT_MESSAGES));
    return;
  }

  greetUser(maxAttempts);

  while (attempts < maxAttempts && !guessedCorrectly) {
    console.log(`Attempt ${attempts + 1} of ${maxAttempts}`);

    const guess = await getPlayerGuess();

    if (guess === 'Terminating') {
      if (confirm('Are you sure you want to terminate the game?'))
      {
        console.log(getRandomItemFromArray(GAME_QUIT_MESSAGES));
        return;
      }
        
      continue;
    }

    if (guess === 'Restarting') {
      await sleep();
      if (confirm('Want to start a new game?')) {
        console.clear();
        return game();
      }

      continue;
    }

   
    console.log(`You guessed: ${guess}`);

    guessedCorrectly = checkGuess(generatedNumber, guess);

    console.log('-----------------------------------');

    if(guess !== 'Restarting')
      attempts++;
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

  await sleep();
  if (confirm('Want to start a new game?')) {
    console.clear();

    return game();
  }
  else
  {
    console.log(getRandomItemFromArray(GAME_ENDED_MESSAGES));
  }
}