// an array is an object
const numbers = [5, 4, 3, 2, 1];

// add a value to the end (it can accept multiple arg)
// numbers.push(7, 8, 9);
// console.log(numbers);

// add a value to the beginning
// numbers.unshift(25);
// console.log(numbers);

// index, how many i want to delete, the values 
// that i wanna add
numbers.splice(1, 0, 45, 43);
console.log(numbers);