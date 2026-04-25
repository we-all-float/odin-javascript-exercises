let sum = (a, b) => a + b;

console.log(sum(1, 2));

let double = n => n * 2;

console.log(double(2));

let sayHi = () => console.log("Hi");

sayHi();

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    () => console.log("Hello!") :
    () => console.log("Greetings");

welcome();
