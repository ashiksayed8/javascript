


 var addition = function (a, b) {
    return a + b;
}

addition(5, 6)

setTimeout(function (){
    console.log("ashik");
}, 5000)

var another = addition;
console.log(another(7, 8));
console.log(addition(6, 7));