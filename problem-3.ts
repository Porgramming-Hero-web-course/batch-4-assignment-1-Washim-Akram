export {};
const countWordOccurrences = (sentence: string, word: string): number => {
  const regularExpression = new RegExp(`\\b${word}\\b`, "ig");
  const matchesWords = sentence.match(regularExpression);
  return matchesWords ? matchesWords.length : 0;
};

const result = countWordOccurrences(
  "TypeScript is great. I love TypeScript!",
  "typescript"
);
console.log(result);
