//Write a JavaScript function to get the current date.   
//Note : Pass a separator as an argument.
function getCurrentDate(separator) {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    return `${date}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${year}`;
  }
  
  console.log(getCurrentDate('/')); // Example output: "05/04/2023"
  console.log(getCurrentDate('-')); // Example output: "05-04-2023"
  