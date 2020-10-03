//Arithmetic operator======
//+ - * / %  ++ --
var a = 10;
var b = 3;
console.log(a / b);
console.log(a % b);

//Incremental====
//pre Incremental - post Incremental
console.log("Incremental Operators");
console.log(++a);
console.log(b++);
console.log(b);

console.log("Decremental operator");
console.log(--a);
console.log(b--);
console.log(b);

//Assignoperators========
var a = 10;
var b = 20;
console.log("Assignoperators are");
a = a + b;
a += b;
console.log(a);
a -= b;
console.log(a);

a *= b;
console.log(a);

a /= b;
console.log(a);

a %= b
console.log(a);

//Comparison Operators
 var a = 10;
 var b = 20;
 console.log("Comparsion operators:");
 console.log(a == b); //true
 console.log(a != b); //false

 console.log(a > b);// false
 console.log(a < b); //true

 a = 20;
 console.log(a >= b);// true
 console.log(a <= b); //true

 var c = '50';
 var d = 50;

 console.log(c == d); //true (check value)
 console.log(c === d);// false (check value and data type)
 console.log(c !== d); //true

 //logic operator=====
//  && means and
//  || means or
//  !  means not

//bitwise operator=========
// & AND
// | or
// ~ not
// ^
// << left shift
// >> right shift

//type operator=======
 console.log(typeof 10);
 console.log(typeof 'String');


