//Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun).   
function getDayName(date) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
  }
console.log(getDayName(new Date()));  