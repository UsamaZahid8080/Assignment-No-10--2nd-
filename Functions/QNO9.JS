//Write a js program to print all perfect numbers between given interval using functions.

function getFactors(number) {
    const factors = [];
  
    for (let i = 1; i < number; i++) {
      if (number % i === 0) {
        factors.push(i);
      }
    }
  
    return factors;
  }
  
  function isPerfect(number) {
    const factors = getFactors(number);
    const sum = factors.reduce((acc, val) => acc + val, 0);
    return sum === number;
  }
  
  function printPerfectNumbers(lower, upper) {
    for (let i = lower; i <= upper; i++) {
      if (isPerfect(i)) {
        console.log(i);
      }
    }
  }
  
  printPerfectNumbers(1, 10000);
  