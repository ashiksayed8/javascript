//Invoking function=======

//general function =====
function functionName() {
    console.log("I am ashik");
}


function add() {
    var a = 10
    var b = 30
    console.log("sum of two numbers:  " + (a + b));
}

function sub() {
    var a = 70;
    var b = 60;
    console.log(a - b);
}

// function calling  system=====
functionName();
add();
sub();

for( var i = 0; i < 10; i++) {
    functionName()
}

console.log(add);
console.log(add());

