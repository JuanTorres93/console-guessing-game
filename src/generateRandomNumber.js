import { ValidationError } from './errors/domainErrors.js';
import { handleErrors } from './errors/handleErrors.js';

export function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
