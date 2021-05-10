// Variables
let bucket = 1;
bucket = "hellow";

console.log("The variable is " + bucket);

const container = 5;
console.log("The contains value" + container);

// Primitive Types
// Numbers /Interger e.g 1,4,7
//Float/ decimal e.g 1.2, 2.7
// String e.g "Hello world"
// boolean e.g true or false
// null  e.g null
//undefined e.g undefined


// Artithemetic
// + - * / % BODMAS () **
let a = 3 * 3 *3 *3 *3;
console.log(a)

// Expression

let i = 2;
console.log(i+=3) 
// i = i + 3
// Operator  &&(AND) or || (OR)

// Conditions
// If else if and else

// Function - block of code that carryout an action
// Functions are called using parentheses

// How a function is declared
function hello(){ //declared a hello function

}

function buck() {
    let firstBucket = "water";
    let secondBucket = "sand";
    console.log("My buket is a combination of " + firstBucket + ' and ' + secondBucket);
}

buck();

// function remainder(){
//     let a = 50;
//     let b = 7;
//     let remain = a % b;
//     console.log("The remainder of the division is " + remain);
// }

// remainder();

function remainder(a , b, c){
    // let a = 50;
    // let b = 7;
    let remain = a % b * c;
    console.log("The remainder of the division is " + remain);
}

remainder(48,5, 7);

// function checkCondition (x,y) {
//     if(x >= 5) {
//         console.log('High Five')
//     } else if ( y < 20) {
//         console.log('Yeahhhhhhhh')
//     } 
//     else {
//         console.log('Noooooo')
//     }

// }

// checkCondition(4,89)

function checkCondition (x,y) {
    if(x >= 5 || x === 9) {
        console.log('High Five')
    } else if ( y < 20) {
        console.log('Yeahhhhhhhh')
    } 
    else {
        console.log('Noooooo')
    }

}

checkCondition(7,89)

// if( a%3 === 0 ) {
//     console.log('Fizz')
// } else if( a%5 === 0) {
//     console.log('Buzz')
// } else if( (a%3 === 0) && (a%5 === 0)) {
//     console.log('FizzBuzz')
// } else {
//     console.log(a)
// }

// fuzzBuzz
// "Write a program that prints the numbers from 1 to 100. 
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
// For numbers which are multiples of both three and five print “FizzBuzz”.

function fizzBuzz (a) {
    if(a <= 100) {
        
        if( (a%3 === 0) && (a%5 === 0))  {
            console.log('FizzBuzz')
        } else if(a%5 === 0) {
            console.log('Buzz')
        } else if(a%3 === 0) {
            console.log('Fizz')
        }
        else {
            console.log(a)
        }
    } 
}

fizzBuzz(30)
