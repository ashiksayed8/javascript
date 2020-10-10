//Argument and parameters=============
//parameter means variable declare===

// function add(a, b)  {
//    var result = a + b
//    console.log(result);
// }
// add(10, 20)
// add(7, 3)
// add(100, 500)

// var arr1 = [1, 2, 3]
// var arr2 = [5, 6, 7]
// var arr3 = [9, 7, 2]

// var sum1 = 0;
// for(var i =0 ; i < arr1.length; i++) {
//     sum1 += arr1[i]
// }
// console.log(sum1);

// var sum2 = 0;
// for(var i =0 ; i < arr2.length; i++) {
//     sum2 += arr2[i]
// }
// console.log(sum2);

// var sum3 = 0;
// for(var i =0 ; i < arr3.length; i++) {
//     sum3 += arr3[i]
// }
// console.log(sum3);


var arr1 = [1, 2, 3]
var arr2 = [5, 6, 7]
var arr3 = [9, 7, 2]

function sumArray (arr){
    var sum = 0;
    for(var i =0 ; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum)
}

sumArray(arr1)
sumArray(arr2)
sumArray(arr3)
