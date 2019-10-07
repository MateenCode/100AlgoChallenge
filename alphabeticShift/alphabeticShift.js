function alphabeticShift(word) {
  const alphabet = {
    a: "b",
    b: "c",
    c: "d",
    d: "e",
    e: "f",
    f: "g",
    g: "h",
    h: "i",
    i: "j",
    j: "k",
    k: "l",
    l: "m",
    m: "n",
    n: "o",
    o: "p",
    p: "q",
    q: "r",
    r: "s",
    s: "t",
    t: "u",
    u: "v",
    v: "w",
    w: "x",
    x: "y",
    y: "z",
    z: "a"
  };

  const splitword = word.split("");

  for (i = 0; i < splitword.length; i++) {
    splitword[i] = alphabet[splitword[i]];
  }
  return splitword.join("");
}

console.log(alphabeticShift("crazy"));
