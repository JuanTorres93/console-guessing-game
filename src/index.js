import { getPlayerGuess } from './getPlayerGuess.js';
import { generateRandomNumber } from './generateRandomNumber.js';
import { handleErrors } from './errors/handleErrors.js';
import { calculateScore } from './calculateScore.js';
import { game } from './game.js';

try {
  game();
} catch (error) {
  handleErrors(error);
}
