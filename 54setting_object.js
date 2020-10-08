var point = {
    x : 10,
    y : 20,
    z : 30
}

//object update===
point.x = 45
console.log(point);
//Object insert===
point.a = 56;
console.log(point);
//Undefined object====
console.log(point.d);

//update into array notation ====
point['y'] = 100
console.log(point);

var prop = 'z'
point[prop] = 55;

console.log(point);
