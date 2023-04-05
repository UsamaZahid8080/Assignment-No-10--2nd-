// Write a JavaScript function to convert a Unix timestamp to time.   
function convertUnixTimestamp(unixTimestamp) {
    const milliseconds = unixTimestamp * 1000;
    const dateObject = new Date(milliseconds);
    const humanDate = dateObject.toLocaleString();
    return humanDate;
  }
  console.log(convertUnixTimestamp(1617618000));
  console.log(convertUnixTimestamp(1625068800)); 
    
  