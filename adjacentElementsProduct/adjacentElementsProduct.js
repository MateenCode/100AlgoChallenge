function adjacentElementsProduct(arr) {
  let largest = arr[0] * arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
    const product = arr[i] * arr[i + 1];
    largest = largest > product ? largest : product;
  }
  return largest;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
