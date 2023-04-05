//Write a js program to print all strong numbers between given interval using functions.

function factorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * factorial(number - 1);
    }
  }
  
  function isStrong(number) {
    
    const strNum = String(number);
    const numDigits = strNum.length;
  
    
    let sum = 0;
    for (let i = 0; i < numDigits; i++) {
      const digit = parseInt(strNum[i]);
      sum += factorial(digit);
    }
  
    return sum === number;
  }
  
  function printStrongNumbers(lower, upper) {
    for (let i = lower; i <= upper; i++) {
      if (isStrong(i)) {
        console.log(i);
      }
    }
  }
  
  printStrongNumbers(1, 10000);
  