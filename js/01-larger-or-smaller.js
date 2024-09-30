"use strict";

//Choices variable
let choiceOne = parseInt(prompt('Choose a number'));
let choiceTwo = parseInt(prompt('Choose another number'));


document.write('<h3>The Bigger the Better</h3>');


//needs loop back in the future to ensure user are promted for invalid inputs.
if (choiceOne === null || choiceTwo === null) {
    alert(`You\'ve cancelled the input, try again.`);
    choiceOne = parseInt(prompt('Choose a number'));
    choiceTwo = parseInt(prompt('Choose another number'));
} else if (isNaN(choiceOne) || isNaN(choiceTwo)) {
    alert('You did not choose a number. Try again');
    choiceOne = parseInt(prompt('Choose a number'));
    choiceTwo = parseInt(prompt('Choose another number'));
} else if (choiceOne === choiceTwo) {
    document.write(`Your two choices are the same`);
} else if (choiceOne > choiceTwo) {
    document.write(`The bigger number is: ${choiceOne}`);
} else {
    document.write(`The bigger number is: ${choiceTwo}`);
}

