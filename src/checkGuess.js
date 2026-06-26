import {
  TOO_HIGH_MESSAGES,
  TOO_LOW_MESSAGES,
  CLOSE_TO_NUMBER_MESSAGES,
  MEDIUM_DISTANCE_TO_NUMBER_MESSAGES,
  FAR_FROM_NUMBER_MESSAGES,
  WIN_MESSAGES,
} from './messages/guessMessages.js';
import { getRandomItemFromArray } from './utils/getRandomItemFromArray.js';

export function checkGuess(generatedNumber, playerGuess) {
  if (generatedNumber !== playerGuess) {
    informUserAboutDistance(generatedNumber, playerGuess);

    return false;
  }

  console.log(getRandomItemFromArray(WIN_MESSAGES));
  return true;
}

function informUserAboutDistance(generatedNumber, playerGuess) {
  const distance = Math.abs(generatedNumber - playerGuess);
  const isHigher = playerGuess > generatedNumber;

  const directionMessage = isHigher
    ? getRandomItemFromArray(TOO_HIGH_MESSAGES)
    : getRandomItemFromArray(TOO_LOW_MESSAGES);

  let distanceMessage = '';

  if (distance <= 10) {
    distanceMessage = getRandomItemFromArray(CLOSE_TO_NUMBER_MESSAGES);
  } else if (distance <= 30) {
    distanceMessage = getRandomItemFromArray(
      MEDIUM_DISTANCE_TO_NUMBER_MESSAGES,
    );
  } else {
    distanceMessage = getRandomItemFromArray(FAR_FROM_NUMBER_MESSAGES);
  }

  console.log(`${directionMessage} ${distanceMessage}`);
}
