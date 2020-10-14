
function say(n) {
    if(n === 0) {
        return 
    }
    console.log('I am Ashik');
    say(n-1)
}

say(10)

function sum(n) {
    if (n === 1) {
        return 1
    }
    return n + sum(n- 1)
}

console.log(sum(5));

//factorial number determine============

function fact(n) {
    if(n === 1) {
        return 1
    }

    return n * fact(n -1)
}

console.log(fact(5));

var arr = [1, 2, 3, 5, 6]

function sumofArray(arr, lastIndex) {
    if(lastIndex < 0) {
        return 0;
    }
    return arr[lastIndex] + sumofArray(arr, lastIndex - 1)
}

console.log(sumofArray(arr, arr.length - 1));