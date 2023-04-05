//Write a js program to find factorial of any number using function.
function factorial(number) {
    let result = 1;
    
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    
    return result;
  }
  
  const number = 5;
  const result = factorial(number);
  console.log(`The factorial of ${number} is ${result}`);
  