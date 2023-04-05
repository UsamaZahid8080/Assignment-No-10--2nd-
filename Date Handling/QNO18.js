//Write a JavaScript program to calculate age. 
function calculateAge(birthDate) {
    const today = new Date();
    const diffInMs = today - birthDate;
    const ageInMs = new Date(diffInMs);
    return Math.abs(ageInMs.getUTCFullYear() - 1970);
  }
  
  const birthDate = new Date('1996-01-19');
  const age = calculateAge(birthDate);
  console.log(`The age is ${age} years.`);
  