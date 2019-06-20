function allLongestStrings(arr) {
  let longestLength = 0;
  const longestWord = [];

  // looks for the longest length
  arr.forEach(word => {
    longestLength = longestLength > word.length ? longestLength : word.length;
  });

  // add longest lenght to array
  arr.forEach(word => {
    if (word.length === longestLength) {
      longestWord.push(word);
    }
  });

  return longestWord;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
