//Write a JavaScript function to get the number of days in a month.
function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  
  console.log(getDaysInMonth(2, 2023)); 
  console.log(getDaysInMonth(4, 2023)); 
  console.log(getDaysInMonth(12, 2023)); 
  