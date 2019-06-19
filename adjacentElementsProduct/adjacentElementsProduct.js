function adjacentElementsProduct(arr) {
  let largestProduct = arr[0] * arr[1]; //
  for (let i = 1; i < arr.length - 1; i++) {
    const product = arr[i] * arr[i + 1]; // muiltplys pairs
    console.log(product);
    largestProduct = largestProduct < product ? product : largestProduct; // if product is create then largest product return the product else return largestproduct
  }

  return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
