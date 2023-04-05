//Write a js program to find GCD (HCF) of two numbers using function.
function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    
    return gcd(b, a % b);
  }
  
  const a = 24;
  const b = 36;
  const result = gcd(a, b);
  console.log(`The GCD of ${a} and ${b} is ${result}`);
  
