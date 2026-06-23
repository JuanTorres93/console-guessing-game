import { getPlayerGuess } from './getPlayerGuess.js';
import { generateRandomNumber, checkGuess } from './generateRandomNumber.js';
import { handleErrors } from './errors/handleErrors.js';

try {
  const generatedNumber = generateRandomNumber();
  // game logic here
  let playerGuess = getPlayerGuess();
  checkGuess(generatedNumber, playerGuess);
} catch (error) {
  handleErrors(error);
}
