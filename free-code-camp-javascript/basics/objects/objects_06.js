let a = {value: 10};
let b = {...a}; // clone a

// Object.assign(b, a);

b.value = 20;

console.log(a);
console.log(b);