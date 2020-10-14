
// function greet(msg) {
//     function greetings (name) {
//         return msg + ', ' + name + '!'
//     }
//     return greetings
// }

// var gm = greet('Good morning')
// var gn = greet('Good night')
// var hello = greet('Hello')
// //console.log( typeof gm);
// var msg = gm('ashik')
// console.log(msg);
// console.log(gn('Atik'));
// console.log(hello('Aziz'));
// console.log(gm('ashik'));

function base (b) {

     return function(n) {
        var result = 1
        for(var i = 0; i < b; i++) {
            result *= n
        }
      return result
    }
}

var base10  = base(10)
console.log(base10(2));

var base5 = base(5)
console.log(base5(2));
console.log(base5(5));
console.log(base5(8));