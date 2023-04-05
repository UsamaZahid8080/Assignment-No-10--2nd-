//Write a js program to find diameter, circumference and area of circle using function
//Part no 1 diameter
function diameter(r){
    return 2 * r;
}
let  radius = 4;
let result = diameter(radius);
console.log(`The diameter of the circle with radius ${radius} is ${result}.`);
//Part no 2 circumference
let pi = 3.14;
let r = 45;
function circumference(r){
    return 2 * pi * r;
}
let c = Math.floor(circumference(r));
console.log("The cicumference of "+r+' '+"is"+' '+c);
//Part no 3 area
let rad = 50;
function area(rad){
    return pi * rad * rad;
}

let A = Math.floor(area(rad));
console.log("The Area of a"+' '+rad+' '+"is"+' '+A);
