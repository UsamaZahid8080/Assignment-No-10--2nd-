//Write a JavaScript function to get a short textual representation of a month, three letters (Jan through Dec). 
function getShortMonthName(date) {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const monthIndex = date.getMonth();
    return months[monthIndex];
  }
  
   console.log(getShortMonthName(new Date()));  