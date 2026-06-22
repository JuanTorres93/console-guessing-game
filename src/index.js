import { getPlayerGuess } from './getPlayerGuess.js';
import { handleErrors } from './errors/handleErrors.js';

try {
  // game logic here
  getPlayerGuess();
} catch (error) {
  handleErrors(error);
}
