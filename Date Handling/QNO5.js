//Write a JavaScript function to compare dates (i.e. greater than, less than or equal to). 
function compareDates(date1, date2) {
    if (date1 > date2) {
      return "Date1 is greater than Date2";
    } else if (date1 < date2) {
      return "Date1 is less than Date2";
    } else {
      return "Date1 is equal to Date2";
    }
  }
  
  const myDate1 = new Date("2023-04-05");
  const myDate2 = new Date("2023-05-08");
  
  console.log(compareDates(myDate1, myDate2));
  