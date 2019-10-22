function alphabetSubsequence(s) {
  const chars = s.split("");
  const charVal = [];

  chars.forEach(char => {
    charVal.push(char.charCodeAt(0));
  });

  // Set are like array but dont take duplicates
  if (new Set(charVal).size !== charVal.length) {
    return false;
  }

  for (let i = 0; i < charVal.length - 1; i++) {
    if (charVal[i] >= charVal[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
