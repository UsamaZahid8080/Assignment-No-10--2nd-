//Write a JavaScript function to get the maximum date from an array of dates.   
function maxDate(dates) {
    
    var dateObjects = dates.map(function(dateString) {
      return new Date(dateString);
    });
    
    
    var maxDateObject = new Date(Math.max(...dateObjects));
    
    
    return maxDateObject.toDateString();
  }
  
  
  var dates = ["June 22, 2022", "January 1, 2023", "December 31, 2021"];
  console.log(maxDate(dates));
  