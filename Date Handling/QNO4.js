//Write a JavaScript function to get the month name from a particular date.   
function getMonthName(date) {
    const monthNames = [
      "January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"
    ];
    const monthIndex = date.getMonth();
    return monthNames[monthIndex];
  }
  
  const myDate = new Date("2023-04-05");
  console.log(getMonthName(myDate));
  