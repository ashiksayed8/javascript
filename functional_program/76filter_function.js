
var arr = [4, 8, 1, 3, 5, 6,  4, 3, 9]

// var filteredArr = arr.filter(function (value){
    
//     //return value % 2 === 1
//     return value > 4
// })

// console.log(filteredArr);

function myFilter(arr ,cb)  {
    var newArr= [];
    for (var i = 0 ; i < arr.length; i++) {
        if(cb (arr[i]) ) {
            newArr.push(arr[i])
        }
    }
    return newArr;
}
//console.log(myFilter(arr));

var odd = myFilter(arr, function (value) {
    return value % 2 === 1
})
var even = myFilter(arr, function (value) {
    return value % 2 === 0
})
var value1 = myFilter(arr, function (value) {
    return value > 4
})
console.log(odd);
console.log(even);
console.log(value1);