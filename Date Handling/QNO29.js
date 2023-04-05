//Write a JavaScript function to get a two digit representation of a year.   
function getShortYear(date) {
    const year = date.getFullYear();
    return year.toString().slice(-2);
  }
  const date = new Date("2023-04-05");
  const shortYear = getShortYear(date);
  console.log(shortYear);
    