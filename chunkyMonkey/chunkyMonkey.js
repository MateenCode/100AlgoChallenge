function chunkyMonkey(arr, size) {
  const chunkedArr = [];

  arr.forEach(each => {
    const last = chunkedArr[chunkedArr.length - 1];
    return !last || last.length === size
      ? chunkedArr.push([each])
      : last.push(each);
  });
  return chunkedArr;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
