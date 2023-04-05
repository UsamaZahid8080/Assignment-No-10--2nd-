//Write a js program to find sum of all even or odd numbers in given range using function.
function sumOfNumbersInRange(lower, upper, isEven) {
    let sum = 0;
    
    for (let i = lower; i <= upper; i++) {
      if (isEven && i % 2 === 0) {
        sum += i;
      } else if (!isEven && i % 2 !== 0) {
        sum += i;
      }
    }
  
    return sum;
  }
  
  const lower = 1;
  const upper = 10;
  const isEven = true;
  const result = sumOfNumbersInRange(lower, upper, isEven);
  console.log(`The sum of all ${isEven ? 'even' : 'odd'} numbers between ${lower} and ${upper} is ${result}`);
  