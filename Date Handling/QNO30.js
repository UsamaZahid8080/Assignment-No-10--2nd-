//Write a JavaScript function to get lowercase Ante meridiem and Post meridiem. 
function getMeridiem(date) {
    const hours = date.getHours();
    return hours < 12 ? "am" : "pm";
  }
  const date = new Date("2023-04-05T14:30:00");
  const meridiem = getMeridiem(date);
  console.log(meridiem);
    