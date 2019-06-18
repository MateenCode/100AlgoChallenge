function addTwoDigits(num) {
  let nums = num.toString().split("");

  return nums.reduce((acc, val) => {
    return parseInt(acc) + parseInt(val);
  });
}

console.log(addTwoDigits(11));
