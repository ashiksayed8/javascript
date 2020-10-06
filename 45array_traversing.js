//Traverse an array========
var arr = [4, 5, 6, 7, 8 ]

for(var i = 0; i < arr.length ; i++){
    // console.log(arr[i]);
    arr[i] =  arr[i] + 2
    console.log(arr[i]);
}
var sum = 0;
for(var i = 0; i < arr.length ; i++){
    
    sum += arr[i];
   
}
console.log('Sum of the array:');
console.log(sum);

for(var i = 0; i < arr.length ; i++){
    if(arr[i] % 2 === 0){
        console.log(arr[i]);
    }
   
}
