function lastWordLength(input){  
let arrayOfWords = input.trim().split(" ");
let lastWord = arrayOfWords[arrayOfWords.length-1];
let length = lastWord.length;
console.log(length);
}

lastWordLength("Hello World");
lastWordLength("fly me  to the  moon");