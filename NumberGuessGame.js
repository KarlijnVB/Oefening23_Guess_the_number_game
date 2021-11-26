
// //Input User 

// Definition of prompt, keep it here
const prompt = require('prompt-sync')();

const inputName = prompt("Welcome! What is your name?");
console.log("Hey", inputName);

const inputNumber = prompt("Enter a whole number between 0 and 25 to start guessing...")
console.log("Your number is: ", inputNumber);


// //Define random number

const min = 1
const max = 25

const generateRandomNumber = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

randomNumber = generateRandomNumber(min, max)

// //Compare input with random number 

//console.log("Numbers random and input: ", randomNumber, inputNumber)

if (inputNumber == randomNumber) {
    console.log("Congratulations, you have won the game!")
    console.log("Bye,", inputName, ", see you!")
} else {
    do {

        console.log("Unfortunately, that is not correct!")
        const inputNewNumber = prompt("Guess again ")
        intInputNewNumber = parseInt(inputNewNumber);
        console.log("Your number is: ", intInputNewNumber);
        //console.log("random and input this guess: ", randomNumber, number);
    }
    while (intInputNewNumber != randomNumber);
}

console.log("Congratulations, you have won the game!")
console.log("Bye,", inputName, ", see you 2!")
