import { handleErrors } from './errors/handleErrors.js';
import { game } from './game.js';

try {
  await game();
} catch (error) {
  handleErrors(error);
}
