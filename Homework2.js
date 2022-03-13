// Homework 2

//Exercise 1

let num = +prompt("Write a number");
let sum = 0;

while(num){
    sum = sum + (num % 10);
    num = Math.floor(num / 10);
}

console.log(sum);

//Exercise 2

let a = +prompt("Write a number");
let b = +prompt("Write a number");
let c = +prompt("Write a number");

if(a + b > c && a + c > b && b + c > a){
    console.log("yes");
} else {
    console.log("no");
}

//Exercise 3

let Num = +prompt("Write a number");
let count = 0;

while(Num){
    if(Num % 10 === 9){
        count++;
    }
    Num = Math.floor(Num / 10);
}

console.log(count);

//Exercise 4

let x = +prompt("Write a number");
let reverseX = "";

while(x > 0){
    reverseX = reverseX + x % 10
    x = Math.floor(x / 10);
}

console.log(reverseX);

//Exercise 5

let number = +prompt("Write a number");

if(Math.log2(number) % 1 === 0) {
    console.log(true);
}else{
    console.log(false)
}