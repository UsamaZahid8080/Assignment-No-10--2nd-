//Write a JavaScript function to add specified minutes to a Date object.
function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
  }
  
  const myDate = new Date("2023-04-05T12:00:00");
  const minutesToAdd = 30;
  
  const newDate = addMinutes(myDate, minutesToAdd);
  
  console.log(`Original date: ${myDate}`);
  console.log(`New date after adding ${minutesToAdd} minutes: ${newDate}`);
  