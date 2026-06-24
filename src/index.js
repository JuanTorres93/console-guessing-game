import { getPlayerGuess } from './getPlayerGuess.js';
import { generateRandomNumber, checkGuess } from './generateRandomNumber.js';
import { handleErrors } from './errors/handleErrors.js';
import { calculateScore } from './calculateScore.js';
import { game } from './game.js';

game();

// try {
//   const correctNumber = generateRandomNumber();

//   // game logic here

//   // TODO: include stop condition for the game loop
//   while (true) {
//     let playerGuess = getPlayerGuess();
//     checkGuess(correctNumber, playerGuess);
//   }
// } catch (error) {
//   handleErrors(error);
// }

