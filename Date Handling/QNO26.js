//Write a JavaScript function to get a numeric representation of a month, with leading zeros (01 through 12).
function getMonthNumber(date) {
    const month = date.getMonth() + 1;
    return month.toString().padStart(2, "0");
  }
  const date = new Date("2023-04-05");
  const monthNumber = getMonthNumber(date);
  console.log(monthNumber);
    