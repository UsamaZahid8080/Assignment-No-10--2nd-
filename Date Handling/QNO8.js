//Write a JavaScript function to get difference between two dates in days.   
function dateDiffInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
  
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    return diffInDays;
  }
  const date1 = new Date('2022-01-01');
const date2 = new Date('2022-01-05');

const diffInDays = dateDiffInDays(date1, date2);

console.log(diffInDays);

  