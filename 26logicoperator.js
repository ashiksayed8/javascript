// && || !
//a && b AND operator=======
//true && true = true
//true && false = false
// false && true = false
// false && false = false

//a || b OR operator=======
//true || true = true
//true || false = true
// false || true = true
// false || false = false

var a = 10
var b = 20
var c = 30
var d = 40
if (a > b && c >d) {
    console.log("A is greater than B and C i s greater than D");
} else {
    console.log("At least one condition is false");
}

if (a > b || c > d) {
    console.log("A is greater than B or C i s greater than D");
} else {
    console.log("At least one condition is false");
}

var check = !(a > b)// a > b means false but !(a > b) means true
console.log(check);