// Reference type

// let car = {}; //An Object of car

let car = {
    'name' : 'Honda',
    color: 'blue', //properties
    model: 'Toyota',
    sitType: {
        color: 'black',
        make: 'leather'
    },
    start: function (owner) { //method
        console.log('My car is color ', this.color , owner , 'is the owner of the car'); //this keyword
    },
    // stop: (owner) => console.log('My car is color ', color , owner , 'is the owner of the car')
    // function Car (color, model) {
    //     color = this.color;
    //     model = this.model
    // }
};

// The this keyword References the object where the function is called
// console.log(car);
// Dot notation
// console.log('The color of the car is: ', car.color);
// car.start('John');
// bracket notation


let anotherCar = car ;
anotherCar.color = 'black';
anotherCar.user = 'Mary';

console.log(anotherCar);
console.log(car.stop('James'));