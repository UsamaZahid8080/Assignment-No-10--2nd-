//Write a JavaScript function to get ISO-8601 weak number of year, weeks starting on Monday.  
function getISOWeek(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const daysOffset = 1 + 7 - firstDayOfYear.getDay();
    const firstMondayOfYear = new Date(date.getFullYear(), 0, daysOffset);
    const diff = date - firstMondayOfYear;
    const week = Math.floor(diff / 604800000) + 1;
    return week;
  }
  console.log(getISOWeek(new Date()));  