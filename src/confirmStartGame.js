import { sleep } from './utils/sleep.js';

import { getRandomItemFromArray } from './utils/getRandomItemFromArray.js';
import { getConsoleInstructionsText } from './messages/consoleInstructions.js';

export async function confirmStartGame() {
  await sleep();

  const message = `${getConsoleInstructionsText()}\n\n${getRandomItemFromArray(INITIAL_USER_CONFIRMATION_MESSAGES)}`;

  return confirm(message);
}

const INITIAL_USER_CONFIRMATION_MESSAGES = [
  '🔢 Calibrating my mind-reading algorithms... Press OK to begin. I already know you will.',
  '🧠 Before we begin, I must measure your predictability. Press OK to continue.',
  "📡 Reading your thoughts... Interesting. They seem to be saying 'I'll press OK.'",
  '⚠️ Human detected. Press OK to challenge me... if you dare.',
  '🤖 My victory calculator requires exactly one OK before it can defeat you.',
  '🔍 Initializing probability engine... Press OK so I can calculate your inevitable mistakes.',
  "🎯 I have already predicted your first move. Don't embarrass my algorithms—press OK.",
  '📈 Statistical analysis complete: the smartest humans press OK.',
  "👁️ I can predict your next move with 99.9% accuracy. Please press OK and don't ruin my statistics.",
  '⚡ Synchronizing random number generator... Press OK to initialize your inevitable defeat.',
  "🧪 Human verification incomplete. Press OK to prove you're not a toaster.",
  '💀 Final warning: Pressing OK will officially begin your downfall.',
  '🎭 Press OK. Refusing merely delays the inevitable.',
  '🔐 Access denied... until you press OK.',
  "📜 The ancient coding scrolls are clear: 'The challenger shall press OK.'",
  '🛰️ Scanning your confidence level... Press OK if you believe you can defeat me.',
  '🎮 Ready to challenge an evil AI? Excellent. Press OK and regret your decision later.',
  "😈 I have hidden a secret number. Press OK if you think you'll find it.",
  '🎲 Every legendary battle starts with a single click. Make yours an OK.',
  '👑 Press OK and enter the arena. Cancel is traditionally reserved for cowards.',
];
