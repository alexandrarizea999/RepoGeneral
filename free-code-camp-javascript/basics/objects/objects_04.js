// let a = 10;
// let b = a;

// a = 20; 

// console.log(a);
// console.log(b);

// Primitive values are passed by copy
let a = {value: 20};
let b = a; 

a.value = 100;
console.log(a);
console.log(b); 