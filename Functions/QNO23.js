//Write a js program to find sum of elements of array using function.
function sumArrayElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  const myArray = [1, 2, 3, 4, 5];
  const result = sumArrayElements(myArray);
  console.log(`The sum of the elements in the array is ${result}`);
  