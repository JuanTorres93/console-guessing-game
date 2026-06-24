import {
  STORY_TITLES,
  STORY_INTROS,
  STORY_MIDS,
  STORY_ENDINGS,
} from './backstory.js';

import { getRandomItemFromArray } from './utils/getRandomItemFromArray.js';

export function greetUser(maxAttempts) {
  const title = getRandomItemFromArray(STORY_TITLES);
  const intro = getRandomItemFromArray(STORY_INTROS);
  const middle = getRandomItemFromArray(STORY_MIDS);

  const ending = getRandomItemFromArray(STORY_ENDINGS).replace(
    '{attempts}',
    maxAttempts,
  );

  const separator = createTitleDecoration(title);

  console.log(`
${separator}
${' '.repeat(3)}${title}${' '.repeat(3)}
${separator}

${intro}

${middle}

${ending}

Guess my secret number between 1 and 100.
-----------------------------------
`);
}

function createTitleDecoration(text) {
  const padding = 3;

  const totalLength = text.length + padding * 2;

  return '='.repeat(totalLength);
}
