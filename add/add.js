function add(a, b) {
  return a + b;
}

function add2(...a) {
  let total = a.reduce((acc, val) => {
    return acc + val;
  });
  return total;
}

// console.log(add(1, 2));
// console.log(add(3, 2));

console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));
