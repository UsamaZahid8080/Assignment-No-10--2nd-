//Write a js program to find reverse of any number using function.
function reverseNumber(number) {
    let reversedNumber = 0;
    
    while (number !== 0) {
      const lastDigit = number % 10;
      reversedNumber = reversedNumber * 10 + lastDigit;
      number = Math.floor(number / 10);
    }
    
    return reversedNumber;
  }
  
  const number = 12345;
  const result = reverseNumber(number);
  console.log(`The reverse of ${number} is ${result}`);
  