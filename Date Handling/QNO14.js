//Write a JavaScript function to get the amount of days of a year.  
function getDaysInYear(year) {
    return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 366 : 365;
  }
  
  // Example usage:
  console.log(getDaysInYear(2022));
  console.log(getDaysInYear(2024));
  