function areSimilar(a, b) {
  if (a.toString() === b.toString()) {
    return true;
  } else if (a.reverse().toString() === b.reverse().toString()) {
    return true;
  } else {
    return false;
  }
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
