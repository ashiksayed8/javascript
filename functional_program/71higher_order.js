
function add (a, b) {
    return a + b

}

function manipulate(a, b, func)  {
    
    var c = a + b;
    var d = a - b;

    // function multifly() {
    //     var m = func(a, b)
    //     return a*b*m
    // }
    // return multifly

    return function () {
        var m = func(a, b)
        return a*b*m
    }
}

var multiply = manipulate(4, 3, add)
console.log(multiply());