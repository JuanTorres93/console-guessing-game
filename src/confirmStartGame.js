import { sleep } from './utils/sleep.js';

import { getRandomItemFromArray } from './utils/getRandomItemFromArray.js';

export async function confirmStartGame() {
  await sleep();
  confirm(getRandomItemFromArray(INITIAL_USER_CONFIRMATION_MESSAGES));
}

export const INITIAL_USER_CONFIRMATION_MESSAGES = [
  "🔢 Calibrating my mind-reading algorithms... Press OK or Cancel. I already know which one you'll choose.",
  '🧠 Before we begin, I must measure your predictability. Please click a button.',
  "📡 Reading your thoughts... Hmm. They're surprisingly noisy. Press whichever button you like.",
  "⚠️ Human detected. Press OK to challenge me or Cancel to pretend you're not intimidated.",
  '🎲 Excellent. One button below is completely meaningless. The other one is also completely meaningless.',
  '🤖 My victory calculator requires exactly one button press before it can defeat you.',
  '🔍 Initializing probability engine... Click OK or Cancel so I can begin calculating your inevitable mistakes.',
  "🎯 I have already guessed the number of times you'll guess the wrong number. Press any button to continue.",
  '📈 Running statistical analysis... 100% of humans eventually click one of these buttons.',
  "👁️ I can predict your next move with 99.9% accuracy. Please don't ruin my statistics.",
  '⚡ Synchronizing random number generator... Your cooperation is mandatory. Or at least highly convenient.',
  "🧪 Human verification complete... Actually, it's not complete until you press a button.",
  '💀 Final warning: After clicking a button, you may experience excessive guessing.',
  '🎭 Choose OK or Cancel. I promise to dramatically overreact either way.',
  '🔐 Access granted... pending your completely unnecessary button press.',
  '📜 According to the ancient coding scrolls, every great guessing game begins with a mysterious confirmation dialog.',
  "🛰️ Scanning your confidence level... Click OK if you're confident. Click Cancel if you're overconfident.",
  '🎮 Ready to challenge an evil AI? Wonderful. Now prove you can locate one of the two giant buttons.',
  '😈 I have hidden a secret number... somewhere. Press a button so I can pretend this was part of my master plan.',
  '🎲 Every legendary battle starts with a single click. Fortunately, I accept either button.',
];
