//Object accessing ==============
// first system=
var point =  {
    x: 10,
    y: 20,
    z: 15
}

console.log(point.x);
console.log(point.y);
console.log(point.x + point.y);

//Second system===
console.log(point['x']);
console.log(point['y']);

///using array notation
var show = 'x'
console.log(point[show]);