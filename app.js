//object Oriented Programing

//Prototypal Inheritance

const dog = {
    name: "Oso",
    goodBoy: true,
    gender: "boy"
};

const dog2 = {
    name: "Frodo",
    color: "brown"
};

dog2.__proto__ = dog; //inherits everything from dog 

console.log(dog);
console.log(dog2);

console.log(dog2.goodBoy);


//make two objects
// one needs to inherit the other object

const apartOne = {
    location: "Brooklyn",
    color: "red",
    rooms: 3
};

const apartTwo = {
    location: "Long Island",
    color: "white"
};

apartTwo.__proto__ = apartOne;

console.log(apartTwo.rooms);

apartTwo.rooms = 4; //will check in apartOne if it has the 4 property in it
console.log(apartTwo.rooms);

console.log(apartOne.rooms);


//constructor functions

// let User = (name) => { //when using this function, use a capital letter in the begining
//     this.name = name;   //return this
// } doesn't work this way



function User(name) {
    this.name = name;
}


let adam = new User('Adam');
let pete = new User('pete');

console.log(adam.name);
console.log(pete.name);

function NBAPlayer(name, team, threePointShooter) {
    //this is equal to an object --> this = {}
    this.name = name;
    this.team = team;
    this.threePointShooter = threePointShooter;
}

let steph = new NBAPlayer('Steph Curry', 'Warriors', true);
console.log(steph);


function Person(first, last, age, gender) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.gender = gender;
}

let anna = new Person('Anna', 'Martinez', 20, 'Female');
console.log(anna);