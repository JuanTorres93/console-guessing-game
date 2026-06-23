import { getPlayerGuess } from './getPlayerGuess.js';
import { generateRandomNumber, checkGuess } from './generateRandomNumber.js';
import { handleErrors } from './errors/handleErrors.js';

try {
  const generatedNumber = generateRandomNumber();

  // game logic here

  // TODO: include stop condition for the game loop
  while (true) {
    let playerGuess = getPlayerGuess();
    checkGuess(generatedNumber, playerGuess);
  }
} catch (error) {
  handleErrors(error);
}
