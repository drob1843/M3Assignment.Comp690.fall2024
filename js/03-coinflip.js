'use strict';

let coinFlip;
let randomNum = Math.round(Math.random());


if (randomNum === 0) {
    coinFlip = 'heads';
} else {
    coinFlip = 'tails';
}

let choice = (prompt(`Choose either 'heads' or 'tails'`));


if (choice != 'heads' && choice != 'tails') {
    alert('You chose an invalid value try again');
} else if (coinFlip === choice) {
    alert(`The flip was ${coinFlip} and you chose ${choice}...you win!`)
} else {
    alert(`The flip was ${coinFlip} but you chose ${choice}...you lose!`)
}