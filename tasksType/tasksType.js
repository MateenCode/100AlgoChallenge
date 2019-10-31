function tasksTypes(deadlines, day) {
  let [Today, Upcoming, Later] = [0, 0, 0];

  deadlines.forEach(deadline => {
    if (deadline <= day) {
      Today++;
    } else if (deadline >= day + 1 && deadline <= day + 7) {
      Upcoming++;
    } else {
      Later++;
    }
  });

  return [Today, Upcoming, Later];
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));
