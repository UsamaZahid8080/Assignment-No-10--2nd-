//Write a JavaScript function to get the last day of a month.
function getLastDayOfMonth(year, month) {

    let firstDayOfNextMonth = new Date(year, month + 1, 1);
  
    let lastDayOfMonth = new Date(firstDayOfNextMonth.getTime() - 86400000);
  
    return lastDayOfMonth.getDate();
  }
  console.log(getLastDayOfMonth(2023, 11));
  