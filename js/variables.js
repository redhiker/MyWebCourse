let x, y, z;

x = 10;
y = '10';
z = 10;

console.log(`x is ${typeof x}`);
console.log(`y is ${typeof y}`);
console.log(`z is ${typeof z}`);

var newX = x++;

console.log(newX);

console.log('The comparison of x==z is:', (x==z));

let timeInMs = Date.now();

console.log(timeInMs);

console.log(`timeInMs is ${typeof timeInMs}`);