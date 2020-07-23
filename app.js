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



