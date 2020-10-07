//Insert and Remove Element=========

var arr = [1, 2, 3, 4, 5, 6, 7, 8]

//Insert 9 to index 3======

//arr[3] = 9
//arr.push(9) //add into end
//arr.unshift(9) //add into start
// arr.splice(3, 0, 9, 10)// (insert index, remove number ,add value-----)
//arr[3] = undefined;
//arr.pop() //delete from end
//arr.shift() //delete from frist
// arr.splice(3 , 2) //(delete insert number, nuber count)
arr.splice(3 , 1, 44)// (delete index, number, insert number)
console.log(arr);