//Write a JavaScript function to get the day of the month, 2 digits with leading zeros.   
function getDayOfMonth() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    return day;
  }
  console.log(getDayOfMonth());
  