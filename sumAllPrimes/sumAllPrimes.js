// check if value is prime
const isPrime = val => {
  for (let i = 2; i < val; i++) {
    if (val % i === 0) {
      return false;
    }
  }
  return true;
};

// add up all the primes
const sumAllPrimes = num => {
  let total = 0;
  for (let i = 2; i < num; i++) {
    if (isPrime(i)) {
      total += i;
    }
  }
  return total;
};

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));
