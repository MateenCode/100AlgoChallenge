function sumOfTwo(a, b, v) {
  const hashMap = {};
  // creat object to store value
  for (let num of a) {
    const difference = v - num; // looks for difference that needed to equal the total
    hashMap[difference] = difference;
  }

  // itrate over second array
  for (let num of b) {
    // check if the miss amount is available in second array
    if (hashMap.hasOwnProperty(num)) {
      return true;
    }
  }
  return false;
}

// the first for in loop created a num map that stores the difference need to equal the total
// the second for in check if that number is there
// so difference of 42 - 2 = 40
// in the second array the number 40 is available

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
