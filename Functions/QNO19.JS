//Write a js program to generate nth Fibonacci term using function.
function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    
    let previousFibonacci = 0;
    let currentFibonacci = 1;
    
    for (let i = 2; i <= n; i++) {
      const nextFibonacci = previousFibonacci + currentFibonacci;
      previousFibonacci = currentFibonacci;
      currentFibonacci = nextFibonacci;
    }
    
    return currentFibonacci;
  }
  
  const n = 10;
  const result = fibonacci(n);
  console.log(`The ${n}th Fibonacci term is ${result}`);
  