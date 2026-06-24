import { ValidationError } from './errors/domainErrors.js';
import { handleErrors } from './errors/handleErrors.js';
import { getRandomItemFromArray } from './utils/getRandomItemFromArray.js';
import {
  CLOSE_TO_NUMBER_MESSAGES,
  MEDIUM_DISTANCE_TO_NUMBER_MESSAGES,
  FAR_FROM_NUMBER_MESSAGES,
} from './guessMessages.js';

export function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

export function checkGuess(generatedNumber, playerGuess) {
  if (generatedNumber < playerGuess) {
    console.log('Too high!');
    informUserAboutDistance(generatedNumber, playerGuess);

    return false;
  } else if (generatedNumber > playerGuess) {
    console.log('Too low!');
    informUserAboutDistance(generatedNumber, playerGuess);

    return false;
  }

  console.log('Your guess is correct!!!');
  return true;
}

function informUserAboutDistance(generatedNumber, playerGuess) {
  const distance = Math.abs(generatedNumber - playerGuess);

  if (distance <= 10) {
    console.log(getRandomItemFromArray(CLOSE_TO_NUMBER_MESSAGES));
  } else if (distance <= 30) {
    console.log(getRandomItemFromArray(MEDIUM_DISTANCE_TO_NUMBER_MESSAGES));
  } else {
    console.log(getRandomItemFromArray(FAR_FROM_NUMBER_MESSAGES));
  }
}
