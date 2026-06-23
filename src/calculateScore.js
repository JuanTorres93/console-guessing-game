const POINTS_PER_ATTEMPT = 10;

const RANKS_CONFIG = [
  { minScore: 80, text: "🥇 Master Guesser" },
  { minScore: 50, text: "🥈 Skilled Guesser" },
  { minScore: 0, text: "🥉 Beginner Guesser" },
];

export function calculateScore(attempts, maxAttempts) {
  const score = (maxAttempts - attempts + 1) * POINTS_PER_ATTEMPT;

  const rankMatch = RANKS_CONFIG.find((rank) => score >= rank.minScore);

  return {
    rank: rankMatch.text,
    score,
  };
}
