function arrayMaxConsecutiveSum(inputArray, k) {
  let result = inputArray.forEach(each => each * k);
  return result;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
