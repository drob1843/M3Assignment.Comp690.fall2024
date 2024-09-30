'use strict';

let grade = parseFloat(prompt(`Enter a score between 1-100`));

document.write('<h3>Check your letter grade</h3>');

if (grade <= 100 && grade >= 90) {
    document.write('You received an A');
} else if (grade < 90 && grade >= 80) {
    document.write('You received an B');
} else if (grade < 80 && grade >= 70) {
    document.write('You received an C');
} else if (grade < 70 && grade >= 60) {
    document.write('You received an D');
} else if (grade < 70 && grade >= 1) {
    document.write('You received an F');
} else {
    document.write('You selected an invalid value only 1-100 are accepted.');
}