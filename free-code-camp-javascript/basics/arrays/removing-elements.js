const numbers = [1, 2, 3, 4, 5];

// remove from the end
const lastElement = numbers.pop();
console.log(`lastElement: ${lastElement}`);
// remove from the beginning
const firstElement = numbers.shift();
console.log(`firstElement: ${firstElement}`);
// remove from the middle
// index, number of items to delete, new values to add
const middleElement = numbers.splice(1, 1);
console.log(`middleElement: ${middleElement}`);

console.log(numbers);
