//Write a JavaScript function to get the minimum date from an array of dates.  
function getMinimumDate(datesArray) {
    return new Date(Math.min.apply(null, datesArray));
  }
  const dates = [
    new Date(2022, 3, 1),
    new Date(2022, 3, 3),
    new Date(2022, 3, 2)
  ];
  
  console.log(getMinimumDate(dates));
    