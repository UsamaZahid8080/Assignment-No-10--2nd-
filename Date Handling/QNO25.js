//Write a JavaScript function to get a full textual representation of a month, such as January or June.   
function getMonthName(date) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const monthIndex = date.getMonth();
    return months[monthIndex];
  }
  console.log(getMonthName(new Date()));
  