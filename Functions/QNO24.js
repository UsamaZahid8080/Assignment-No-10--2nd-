//Write a js program to find maximum and minimum elements in array using function.
function findMaxMin(arr) {
    let max = arr[0];
    let min = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
  
    return [max, min];
  }
  
  const myArray = [1, 2, 3, 4, 5];
  const [max, min] = findMaxMin(myArray);
  console.log(`The maximum element in the array is ${max}`);
  console.log(`The minimum element in the array is ${min}`);
  