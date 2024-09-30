'use strict';

let choiceLanguage = prompt(`Choose a language:
    en = English
    de = German
    es = Spanish
    fr = French`);


//integrate google traslate api to automate the translation. 
if (choiceLanguage === 'de'){
    console.log(`Hello world in German is 'Hallo Welt`);
} else  if  (choiceLanguage === 'es') {
    console.log(`Hello world in Spanish is 'Hola Mundo`);
} else if (choiceLanguage === 'fr') {
    console.log(`Hello world in French is 'Bonjour le Monde`);
} else {
    console.log(`Hello world in English is 'Hello World`);
}