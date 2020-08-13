function isSubstring(searchString,subString){
    if(searchString.includes(subString)){
        return true;
    } else {
        return false;
    }
}

function fizzBuzz(array) {
    let newArray = [];
    array.forEach(num => {
        if ((num % 3 === 0 || num % 5 === 0) && 
        !(num % 3 === 0 && num % 5 === 0)) {
            newArray.push(num)
        }
    });
    return newArray;
}

function isPrime(num) {
    if(num < 2) { return false; }

    for (let i = 2; i < num; i++) {
      if(num % i === 0) {
          return false;
      }
    }
    return true;
}

function sumOfNPrimes(n) {
    let sum = 0;
    let count = 0;
    let i = 2;

    while (count < n) {
        if(isPrime(i)){
            sum += i;
            count ++;
        }
        i++
    }
    return sum;
}

function titleize(nameArray,callback) {
    let mapped = nameArray.map(name => (`Mx.${name} Jingleheimer Schmidt`));
    callback(mapped);
};

/*
titleize(["Mary","Brian"], (names) => {
    names.forEach(name => console.log(name));
});
*/

function Elephant(name,height,tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!`)
};

Elephant.prototype.grow = function() {
    this.height += 12;
};

Elephant.prototype.addTrick = function(trick) {
    this.tricks.push(trick);
};

Elephant.prototype.play = function() {
    var randTrick = tricks[Math.floor(Math.random() * this.tricks.length)];
    console.log(`${this.name} is ${this.randTrick}!`)
}

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];