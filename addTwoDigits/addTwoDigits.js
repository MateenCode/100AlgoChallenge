function addTwoDigits(num) {
  let numb = num.toString().split("");
  return parseInt(numb[0]) + parseInt(numb[1]);
}

console.log(addTwoDigits(11));
