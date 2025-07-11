export function getRandomFromArray<T>(arr: T[], count=2): T[] {
  if (count >= arr.length) {
    return [...arr];
  }
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
