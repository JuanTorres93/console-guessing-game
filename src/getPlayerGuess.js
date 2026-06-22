import { ValidationError } from './errors/domainErrors.js';
import { handleErrors } from './errors/handleErrors.js';
import { getRandomItemFromArray } from './utils/getRandomItemFromArray.js';
import { QUIRKY_AND_INFORMATIVE_USER_INPUT_ERROR_MESSAGES } from './errors/errorMessages.js';

export function getPlayerGuess() {
  while (true) {
    const guess = prompt('Enter your guess (1-100):');

    try {
      const parsedGuess = ensureUserPromptValueIsInteger(guess);

      if (parsedGuess < 1 || parsedGuess > 100)
        throw new ValidationError(
          getRandomItemFromArray(
            QUIRKY_AND_INFORMATIVE_USER_INPUT_ERROR_MESSAGES,
          ),
        );

      return parsedGuess;
    } catch (error) {
      handleErrors(error);
    }
  }
}

function ensureUserPromptValueIsInteger(stringValue) {
  const trimmedValue = stringValue.trim();

  let parsedValue = Number(trimmedValue);

  if (!trimmedValue.match(/^\d+$/))
    throw new ValidationError(
      getRandomItemFromArray(QUIRKY_AND_INFORMATIVE_USER_INPUT_ERROR_MESSAGES),
    );

  return parsedValue;
}
