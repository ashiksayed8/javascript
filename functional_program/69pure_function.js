//What is pure Function??

//*It Returns the same result if given the same arguments.
//It does not cause any observable side effects.


// This function is pure function======
function sqr(n) {
    return n*n
}

console.log(sqr(2));
console.log(sqr(2));


//Following two functions are not pure function=====
var n = 10

function change() {
    n = 100
}
change()
console.log(n);


var point = {
    x: 45,
    y: 30
}

function printPoint(point) {
    point.x = 100
    point.y = 200
    console.log(point);
}

printPoint(point)
console.log(point);
