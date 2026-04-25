function sayHi() {
    // alert("Hello");
    console.log("Hi");
}

sayHi();

let sayHello = function () {
    console.log("Hello");
};

sayHello();
console.log(sayHello);

// -----

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    console.log("You agreed.");
}

function showCancel() {
    console.log("You cancelled the execution.");
}

ask("Do you agreed?", showOk, showCancel);
