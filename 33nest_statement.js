//Nest loop=====
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5 
var n = 10;
for(var i = 1; i <= n; i++){
    var str = ''
    for(var j = 1; j <= i; j++){
        str += j + ' '
    }
    console.log(str);
}
var a = 5;

for(var i = 0; i < a; i++){
    str = ''
    for(var j = 0; j < a; j++){
      str += '*' + '  '
    }
    console.log(str);
}
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *