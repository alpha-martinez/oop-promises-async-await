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
    this.intro = function() {
        console.log("Hi, my name is " + this.firstName);
    }
}



let anna = new Person('Anna', 'Martinez', 20, 'Female');
let alpha = new Person('Alpha', 'Martinez', 20, 'Female');
console.log(anna);
anna.intro(); //invoke

alpha.intro();


//make a constructor function
//make 3 variables with that constructor function

//class...constructor is what you pass through your class//constructor is the info
// you put in and drive is what you put out

class Car {
    constructor(year, make, model, color) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color;
    }

    drive() {
        console.log('Vroom');
    }
    
    intro() {
        console.log('This car is a ' + this.make + ' ' + this.model);
    }
}
let tesla = new Car (2020, 'Tesla', 'Model S', 'red');
console.log(tesla);
tesla.drive();
tesla.intro();


class GithubProfile {
    constructor(username, name, url) {
        this.username = username;
        this.name = name;
        this.url = url;
    }
    intro() {
        console.log(`My name is ${this.name} and my username is @${this.username}`)
    }
}



fetch('https://api.github.com/users/alpha-martinez')
.then (response => {
    return response.json();
 })
.then(data =>{
    //console.log(data);
    let githubURL = data.url;
   // console.log(githubUrl);
   let githubUsername = data.login;
   let githubName = data.name;

   let alpha = new GithubProfile(githubUsername, githubName, githubURL);
   alpha.intro();
})



let isMomHappy = true;

// // Promise
// let willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             let phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone); // fulfilled
//         } else {
//             var reason = new Error('mom is not happy');
//             reject(reason); // reject
//         }

//     }
// );

// willIGetNewPhone.then(result => {
//     console.log(result); //result is the answer from the promise. we created a new variable for it 
// })
//console.log(willIGetNewPhone);

let willIGetNewPhone = new Promise(resolve, reject) => {
    if(isMomHappy) {
        const phone = {
            brand: 'iPhone',
            color: 'red'
        }
        resolve(phone);
    } else {
        reject('no phone');
    }
    
}