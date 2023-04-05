// Write a js program to check whether a number is palindrome or not using function.
function isPalindrome(number) {
    const reversedNumber = reverseNumber(number);
    return number === reversedNumber;
  }
  
  function reverseNumber(number) {
    let reversedNumber = 0;
    
    while (number !== 0) {
      const lastDigit = number % 10;
      reversedNumber = reversedNumber * 10 + lastDigit;
      number = Math.floor(number / 10);
    }
    
    return reversedNumber;
  }
  
  const number = 12321;
  const result = isPalindrome(number);
  console.log(`The number ${number} is ${result ? "a palindrome" : "not a palindrome"}`);
  