//Write a JavaScript function to count the number of days passed since beginning of the year. 
function daysPassed() {
    var now = new Date();
    var startOfYear = new Date(now.getFullYear(), 0, 0);
    var diff = now - startOfYear;
    var oneDay = 1000 * 60 * 60 * 24;
    var dayCount = Math.floor(diff / oneDay);
    return dayCount;
  }
  console.log(daysPassed());
  