//Write a JavaScript function to get the quarter (1 to 4) of the year.  
function getQuarterOfYear(date) {
    const month = date.getMonth();
    return Math.floor(month / 3) + 1;
  }
  
  const date = new Date();
  const quarter = getQuarterOfYear(date);
  console.log(`The current quarter of the year is: ${quarter}`);
  