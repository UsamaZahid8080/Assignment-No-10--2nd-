//Write a JavaScript function that will return the number of minutes in hours and minutes.   
function getHoursAndMinutes(minutes) {
    let hours = Math.floor(minutes / 60);
    let remainingMinutes = minutes % 60;
    return `${hours} hours ${remainingMinutes} minutes`;
  }
  console.log(getHoursAndMinutes(125));  