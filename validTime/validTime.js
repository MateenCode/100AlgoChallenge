function validTime(time) {
  const [hours, mins] = time.split(":");

  if (parseInt(hours) > 23 || parseInt(hours) < 0) {
    return false;
  }

  if (parseInt(mins) > 59 || parseInt(mins) < 0) {
    return false;
  }

  return true;
}

console.log(validTime("13:58"));
console.log(validTime("25:51"));
console.log(validTime("02:76"));
