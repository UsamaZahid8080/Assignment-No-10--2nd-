//Write a js program to print all Armstrong numbers between given interval using functions.
function isArmstrong(number) {

    const strNum = String(number);
    const numDigits = strNum.length;

    let sum = 0;
    for (let i = 0; i < numDigits; i++) {
      const digit = parseInt(strNum[i]);
      sum += digit ** numDigits;
    }
  
    
    return sum === number;
  }
  
  function printArmstrongNumbers(lower, upper) {
    for (let i = lower; i <= upper; i++) {
      if (isArmstrong(i)) {
        console.log(i);
      }
    }
  }
  
  printArmstrongNumbers(10, 200);
  