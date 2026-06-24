import { ValidationError } from './errors/domainErrors.js';
import { handleErrors } from './errors/handleErrors.js';
import { getRandomItemFromArray } from './utils/getRandomItemFromArray.js';
import { QUIRKY_AND_INFORMATIVE_USER_INPUT_ERROR_MESSAGES } from './errors/errorMessages.js';

export function getPlayerGuess() {
  while (true) {
    const guess = prompt(
      "Enter your guess (1-100): (Type 'Restart' to restart the game)",
    );

    try {
      const restartGame = wantToRestartGame(guess);
      if (restartGame) return restartGame;

      const parsedGuess = parseUserPromptValueToInteger(guess);

      ensureIntegerRangeIncludingMinAndMax(parsedGuess, 1, 100);
      return parsedGuess;
    } catch (error) {
      handleErrors(error);
    }
  }
}

function parseUserPromptValueToInteger(stringValue) {
  const trimmedValue = stringValue.trim();

  let parsedValue = Number(trimmedValue);

  if (!trimmedValue.match(/^\d+$/))
    throw new ValidationError(
      getRandomItemFromArray(QUIRKY_AND_INFORMATIVE_USER_INPUT_ERROR_MESSAGES),
    );

  return parsedValue;
}

function ensureIntegerRangeIncludingMinAndMax(value, min, max) {
  if (value < min || value > max) {
    throw new ValidationError(
      getRandomItemFromArray(QUIRKY_AND_INFORMATIVE_USER_INPUT_ERROR_MESSAGES),
    );
  }
}

function wantToRestartGame(stringValue) {
  if (stringValue.trim().toLowerCase() !== 'restart') return;

  return 'Restarting';
}
