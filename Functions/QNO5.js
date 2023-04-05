//Write a js program to check whether a number is prime, Armstrong or perfect number using functions.
//Part 1 Prime Number
let num = 71;
function isPrime(num){
    if(num<2){
        return false;
    }
    for(let i = 2; i <=Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(num));

//Part 2 Armstrong Number

function isArmstrong(numbe){
    let sum = 0;
    strNum = numbe.toString();
    let len = strNum.length;
    for(let i = 0; i < len; i++){
        sum += Math.pow(parseInt(strNum.charAt(i)), len);
    }
    return sum === numbe;
}
let numbe = 153;
console.log(`${numbe} is Armstrong: ${isArmstrong(numbe)}`);

//Part 3 Perfect Number
function isPerfect(numb){
    let sum = 0;
    for(let i = 1; i <= numb/2;i++){
        if(numb % i === 0){
            sum += i;
        }
    }
    return sum === numb;
}
let numb = 6;
if(isPerfect(numb)){
    console.log(`${numb} is a perfect number`);
}else{
    console.log(`${numb} is not a perfect number`);
}









  
