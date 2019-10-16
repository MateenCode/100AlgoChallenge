function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  // is your strongest equal to your friend strongest and is your weakest equal to your friends weakest

  const myWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
  const myStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
  const friendsWeakest =
    friendsLeft <= friendsRight ? friendsLeft : friendsRight;
  const friendsStrongest =
    friendsLeft >= friendsRight ? friendsLeft : friendsRight;

  return myStrongest === friendsStrongest && myWeakest === friendsWeakest;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
