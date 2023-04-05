// Write a JavaScript function to get uppercase Ante meridiem and Post meridiem.   
function getMeridiem(date) {
    const hours = date.getHours();
    return hours < 12 ? "AM" : "PM";
  }
  const date = new Date("2023-04-05T14:30:00");
  const meridiem = getMeridiem(date);
  console.log(meridiem);
    