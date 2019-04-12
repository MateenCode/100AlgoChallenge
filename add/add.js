const add = (a, b) => {
  return a + b;
};

const add2 = (...numbers) => {
  return numbers.reduce((a, b) => a + b);
};

console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));
