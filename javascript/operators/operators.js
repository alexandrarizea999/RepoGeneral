let a = 2;
let b = '2';

console.log(a == b); // truthy
console.log(a === b); // strict equality (it does not do any conversions)

console.log(1 == '1'); // true
console.log(1 === '1'); // false

console.log(true == '1'); // true
