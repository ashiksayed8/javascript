//First class function========

function add(a, b) {
    return a + b
}

//1. A Function can be stored in a variable

var sum = add
console.log(sum(4, 5));
console.log(typeof sum);

//2. A Function can be stored in a array
var arr = []
arr.push(add)
console.log(arr);
console.log(arr[0](5, 4)); // arr[0] means add

//3. A function can be stored in a object
var obj  = {
    sum : add
}

console.log(obj);
console.log(obj.sum(7, 9));
//4. We can create function as need

setTimeout(function ()  {

    console.log("I have created........");

},100)


//5. We can return pass  function as a arguments
//6. We can return function from another function
