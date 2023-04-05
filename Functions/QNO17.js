//Write a js program to find sum of digits of a given number using function.
function sumOfDigits(number) {
  let sum = 0;
  
  while (number !== 0) {
    const lastDigit = number % 10;
    sum += lastDigit;
    number = Math.floor(number / 10);
  }
  
  return sum;
}

// Example usage:
const number = 12345;
const result = sumOfDigits(number);
console.log(`The sum of digits of ${number} is ${result}`);

  