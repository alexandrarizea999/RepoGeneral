const exampleNumbersA = [1, 2, 3];
const exampleNumbersB = [4, 5, 6];

let combined = [...exampleNumbersA, 9, ...exampleNumbersB, 10];
console.log(combined);

let a = [1, 2];
// let b = a;
let b = [...a];
console.log(b);

