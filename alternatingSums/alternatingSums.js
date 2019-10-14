function alternatingSums(arr) {
  let row1 = arr.filter((a, i) => i % 2 === 1).reduce((a, b) => a + b);
  let row2 = arr.filter((a, i) => i % 2 !== 1).reduce((a, b) => a + b);

  return [row2, row1];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
