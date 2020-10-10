 
 var a = 'abc'
//we can access variable anywhere except function====
 if(true) {
     if(true) {
         var a = 10
         var b =" I am B"
     }
 }
 console.log(b);
 console.log(a);


 function x() {
    var a =20;
     function y () {
         var a = 10
         console.log(a);
     }
     console.log(a);
     y()
 }
 x()


 function test(n) {

     function a() {
         return n%3 === 0
     }
     function b() {
        return n%5 === 0
    }
    
    if(a() && b()) {
        console.log(n + ' is divisible by both 3 and 5');
    } else {
        console.log('Not a valid number');
    }

 }

 test(15)