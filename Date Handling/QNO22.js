//Write a JavaScript function to get ISO-8601 numeric representation of the day of the week (1 (for Monday) to 7 (for Sunday)). 
function getDayOfWeekISO(date) {
    const dayOfWeek = date.getUTCDay() || 7;
    return dayOfWeek;
  }
console.log(getDayOfWeekISO(new Date()));  