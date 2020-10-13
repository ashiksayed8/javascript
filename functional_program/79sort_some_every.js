//
var persons = [
    {

    name: "A",
    age: 24

    },

    {
        name: 'B',
        age: 20
    },

    {
        name: 'C',
        age: 26
    },

    {
        name: 'D',
        age: 21
    }
]

var arr = [4, 5, 6, 7, 8, 9, 3, 5, 7, -2]

// arr.sort()
// console.log(arr)

// person.sort()
// console.log(person);


arr.sort(function(a, b) {
    //asending order =======
    // if (a > b)  {

    //     return 1

    // } else if (a < b) {

    //     return -1
    // } else {
        
    //     return 0
    // }
    //desending order==========
    if (a > b)  {

        return -1

    } else if (a < b) {

        return 1

    } else {
        
        return 0
    }

})

console.log(arr);

//sorting age =============

persons.sort(function (a, b) {

    if(a.age > b.age) {
        
        return 1;

    } else if (a.age < b.age) {

        return -1;

    } else {
        return 0;
    }
})

console.log(persons);


//every method==========
var res1 = arr.every(function(value) {
    return value % 2 === 0;
})
console.log(res1);

var res2 = arr.every(function(value) {

    return value >= 0

})
console.log(res2);

//some method ================ 

var res3 = arr.some(function (value) {
    return value % 2 === 1
})

var res4 = arr.some(function (value) {
    return value < 0
})
console.log(res3);
console.log(res4);