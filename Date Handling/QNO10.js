//Write a JavaScript function to calculate 'yesterday day'. 
function yesterday() {
    var today = new Date();
    var yesterday = new Date(today.getTime() - (24 * 60 * 60 * 1000));
    return yesterday.toDateString();
  }
  
  console.log(yesterday());
  