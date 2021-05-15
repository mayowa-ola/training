// Arrays are collection

let names = ['Mayowa', 'Isaac', 'Omose', 'John', 'Mary']; //Arrays are string
let different = ['John', 2 , true, null, undefined, 'lagos', ...names ] //spread operator

let combined = names.concat(different);
// Length

console.log('This is : ', names[names.length - 1]);

// Index - Position

// Adding element to Arrays
names.push('Matthew'); //adds element to the last
names.unshift('Alex'); //adds to the begining
names.shift() //Removes the first element
names.pop() //Removes the last element
names.splice(2,0,'Sunday')
console.log(names);
console.log(combined)

// Finding element in an arrays
let exist = names.includes('May');
console.log(exist);

let position = names.indexOf('Isaac')
console.log(position);

function add(a,b) {
    console.log( a + b);
}
// add(5,6)

// Arrow function
const add2 = a => {
    let b =20 ;
    console.log(a)
}
add2(5)