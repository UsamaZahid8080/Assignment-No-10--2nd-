//Write a js program to print all even or odd numbers in given range using function.
function printNumbersInRange(lower, upper, isEven) {
    for (let i = lower; i <= upper; i++) {
      if (isEven && i % 2 === 0) {
        console.log(i);
      } else if (!isEven && i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  
  const lower = 1;
  const upper = 10;
  const isEven = false;
  printNumbersInRange(lower, upper, isEven);
  