class Human {
    constructor(a){
        this.name = a;
    }
    name;
    hello() {
        console.log('My name is ', this.name)
    }
    eat() {
        console.log('Eating');
    }
}



const man = new Human('Mayowa');
const newMan = new Human('Tobi');

console.log(man.name);
console.log(newMan.name);


class Aquatic {
    name;
    constructor(name) {
        this.name = name;
    }
    swim(){
        console.log('Suimming')
    }
    breath() {
        console.log('I can breath');
    }
}

class Fish extends Aquatic {
    hello() {
        console.log('Hello');
    }
}

const firstFish = new Fish;
firstFish.swim();

//Encapuslation
// Inheritance
// Polymorphism
// Abstraction