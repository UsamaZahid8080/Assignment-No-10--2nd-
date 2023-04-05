// Write a JavaScript function to get English ordinal suffix for the day of the month, 2 characters (st, nd, rd or th.).   
function getDaySuffix(date) {
    const day = date.getDate();
    if (day >= 11 && day <= 13) {
      return 'th';
    } else {
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    }
}
let date1 = new Date();
  console.log(date1.getDate()+getDaySuffix(new Date()));  