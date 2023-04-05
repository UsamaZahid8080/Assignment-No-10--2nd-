//Write a JavaScript function to get a full numeric representation of a year (4 digits). 
function getFullYear(date) {
    const year = date.getFullYear();
    return year.toString().padStart(4, "0");
  }
  
const date = new Date("2023-04-05");
const fullYear = getFullYear(date);
console.log(fullYear);
