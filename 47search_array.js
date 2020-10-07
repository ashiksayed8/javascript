//Search Data=====================

var arr = [4, 7, 4, 6, 7, 8, 3, 5, 67,45, 78]

var find = 45;
var isFound = false
for (var i = 0; i < arr.length; i++) {
    if(arr[i] === find) {
        console.log("Data is found: " + i);
        isFound = true;
        break;
    }
}
console.log(!isFound);
if(!isFound) {
    console.log("Data is not found");
}

