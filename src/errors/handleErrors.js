import { isDomainError } from './domainErrors.js';

export function handleErrors(error) {
  if (isDomainError(error)) {
    console.log(error.message);
    return;
  }

  console.log('An unexpected error occurred');
}
