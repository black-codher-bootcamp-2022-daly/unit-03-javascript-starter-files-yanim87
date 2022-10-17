// ****************************************************TASK 1 - OBJECTS****************************************************
const personA = {
    name: 'Amanda',
    age: 24,
    location: 'Cornwall',
    likes: 'swimming',
};

const personB = {
    name: 'Curtis',
    age: 27,
    location: 'Reading',
    likes: 'football',
};

const personC = {
    name: 'Layla',
    age: 22,
    location: 'Cambridge',
    likes: 'poetry',
};

const personD = {
    name: 'David',
    age: 44,
    location: 'Bath',
    likes: 'rugby',
};

function biography(person)
{
    return "Hi my name is " + person.name + ". I am " + person.age + " years old, I live in "
    + person.location + " and i like " + person.likes
};
console.log (biography(personA));
console.log (biography(personB));
console.log (biography(personC));
console.log (biography(personD));
 












// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

//const x = 6;
// const y = 4;

// const addition = x + y;

// console.log("Addition: x + y " + addition);

// const subtraction = x - y;

// console.log("Subtraction: x - y " + subtraction);

// const multiplication = x * y;

// console.log("multiplication: x * y " + multiplication);

// const division = x * y;

// console.log(x * x);

// console.log(x + x + y);

// console.log (x * y / x);

// console.log("Division: x + y " + division);

// const myAge = 35;
// const minimumDrivingAge = 18;
// const oldenoughtodrive = myAge > minimumDrivingAge;

// console.log ('Am I old enough to drive?' + oldenoughtodrive);

function addNumber (x,y) {
    return x + y
}
function subtractNumber (x,y) {
    return x - y
}
const calculator = {
    add: addNumber,
    subtract: subtractNumber,
    multiply: function multiplyNumber (x,y)
    { return x * y} ,
    
    divide: function divideNumber (x,y) {
        return x /y
},
}
console.log (calculator.add(3,5));
console.log (calculator.subtract(9,4));
console.log (calculator.multiply(6,7));
console.log (calculator.divide(46,2));

function whoIsOlder (personA, personB)








// ****************************************************TASK 3****************************************************















