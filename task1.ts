function handlerepeat(str: string): string | null {
  str = str.toLowerCase();

  const charCountMap: { [key: string]: number } = {};

  for (const char of str) {
    if (/[a-z]/.test(char)) {
      charCountMap[char] = (charCountMap[char] || 0) + 1;
    }
  }

  for (const char of str) {
    if (charCountMap[char] === 1) {
      return char;
    }
  }

  return null;
}

// tests
const str = "aabbccddeeffg";
//const str = "aabbccddezeffgg";
//const str = "aabbccddeeffgg";

console.log(handlerepeat(str));
