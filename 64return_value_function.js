//return value from function ====

function addAll() {
    var sum = 0;
   for( var i = 0; i < arguments.length; i++) {
     sum += arguments[i]
   }
   return sum;
}

var a = addAll(4, 5, 7, 8, 9)
console.log(a);

function person(name ,email)  {
    return {
    name: name,
    email: email
    }
    console.log("I will never show");
}

var p1 = person('ashik' , 'ashiksayed8@gmail.com')
console.log(p1);