//Write a js program to find all prime numbers between given interval using functions.
function isPrime(num){
    if(num<=1){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num);i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
function findPrime(start,end){
    let primes = [];
    for(let i = start; i <= end; i++){
       if(isPrime(i)){
        primes.push(i);
       }
    }
    return primes;
}
console.log(findPrime(30,80));