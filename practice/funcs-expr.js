// Use Function Expressions

/*
Write a function called add7 that takes one number and returns that number + 7.
    add7(10) should return 17
*/

let add7 = function (num) {
    return num + 7;
};

console.log("Resut of add7 function: " + add7(12));

/*
Write a function called multiply that takes 2 numbers and returns their product.
    multiply(3, 2) should return 6
*/

let multiply = function (num1, num2) {
    return num1 * num2;
};

console.log("Result of multiply function: " + multiply(3, 2));

/*
Write a function called capitalize that takes a string and returns that string
with only the first letter capitalized.
Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
    capitalize("abcd") should return "Abcd"
    capitalize("ABCD") should return "Abcd"
    capitalize("aBcD") should return "Abcd"
*/

let capitalise = function (inputString) {
    let inputLower = inputString.toLowerCase();
    let inputFirstLetter = inputString[0].toUpperCase();
    let titleCase = inputLower.replace(inputLower[0], inputFirstLetter);
    return titleCase;
};

console.log("Result from capitalise function: " + capitalise("hello"));
console.log("Result from capitalise function: " + capitalise("simPliFy"));
console.log("Result from capitalise function: " + capitalise("TELEVISION"));

/*
Write a function called lastLetter that takes a string and returns the very
last letter of that string:
    lastLetter("abcd") should r eturn "d"
*/

let lastLetter = function (inputString) {
    return inputString[inputString.length - 1];
};

console.log("Result from lastLetter function: " + lastLetter("keyboard"));
console.log("Result from lastLetter function: " + lastLetter("Travelling"));
