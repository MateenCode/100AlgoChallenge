function allLongestStrings(arr) {
  let longestLength = 0;
  const longestWords = [];

  arr.forEach(word => {
    longestLength = longestLength > word.length ? longestLength : word.length;
  });

  arr.forEach(word => {
    // if the word length is same as the longestLength add to longestWords
    if (longestLength === word.length) {
      longestWords.push(word);
    }
  });

  return longestWords;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
