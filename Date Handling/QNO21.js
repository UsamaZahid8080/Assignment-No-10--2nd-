//Write a JavaScript function to get a full textual representation of the day of the week (Sunday through Saturday).
function getDayName(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
  }
console.log(getDayName(new Date()));  