//Write a JavaScript function to test whether a date is a weekend.
function isWeekend(date) {
    const dayOfWeek = date.getDay();
    return (dayOfWeek === 6) || (dayOfWeek === 0);
  }
  
  const myDate = new Date("2023-04-08T12:00:00");
  
  if (isWeekend(myDate)) {
    console.log(`${myDate} is a weekend day.`);
  } else {
    console.log(`${myDate} is not a weekend day.`);
  }
  