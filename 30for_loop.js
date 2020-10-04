//For loop=====
for(var i = 0; i<1000; i+=100) {
   console.log((i + 1) +" Ashik Islam.");
}

//for (initializer statement; condition statement; increment statement/ decrement statement){
//    
//}
for( var i = 1; i <= 100; i++){
    console.log(i);
}
for( var i = 1; i <= 100; i++){
    if (i % 2 === 1){
        console.log(i + "is odd number");
    }
}
var sum = 0;
for( var i = 1; i <= 10; i++){
    console.log(sum + ' + ' + i + ' = ' + (sum + i));
   sum += i
}