//Write a js program to find LCM of two numbers using function.
function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  
  function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    
    return gcd(b, a % b);
  }
  
  const a = 24;
  const b = 36;
  const result = lcm(a, b);
  console.log(`The LCM of ${a} and ${b} is ${result}`);
  