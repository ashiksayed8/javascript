//Comparing two objects=============
var obj1 = {
    a : 10,
    b : 20
}
var obj2 = {
    a : 10,
    b : 2
}

//object compare======
console.log(obj1 === obj2);  // false

//proper system for compare=====
if (obj1.a === obj2.a && obj1.b === obj2.b) {
    console.log(true);
} else {
    console.log(false);
}

//convert string into json======= and compare====
console.log(obj1);
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));