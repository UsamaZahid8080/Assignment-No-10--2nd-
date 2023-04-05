//Write a js program to find sum of all natural numbers between 1 to n using function.

function sumOfNumbers(n) {
    let sum = 0;
  
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
  
    return sum;
  }
  
  const n = 10;
  const result = sumOfNumbers(n);
  console.log(`The sum of all natural numbers between 1 and ${n} is ${result}`);
  