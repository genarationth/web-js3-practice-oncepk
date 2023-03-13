let x = Math.floor(Math.random() * 10);
let y = Math.floor(Math.random() * 10);

let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => Math.floor(x * y);
let divide = (x, y) => Math.floor(x / y);

console.log(add(x, y));
console.log(subtract(x, y));
console.log(multiply(x, y));
console.log(divide(x, y));
