//arguments as array and objects
function test(a, b, c) {
    console.log(arguments);
    console.log(typeof a);
}

//test()
test(4, 5, 6)

//argument print =======
function test1(a, b, c) {
   for( var i = 0; i < arguments.length; i++) {
       console.log(arguments[i]);
   }
}

test1(4, 5, 6)


//argument print as no parameters===
function test1() {
    for( var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
 }

 //add number using  no parameters=====
 function addAll() {
     var sum = 0;
    for( var i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    console.log(sum);
 }

 addAll(4, 5, 7, 8, 9)
