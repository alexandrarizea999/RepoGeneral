const exampleNumbersA = [1, 2, 3];
const exampleNumbersB = [4, 5, 6];

const combineArray = exampleNumbersA.concat(exampleNumbersB);
console.log(combineArray);

// the second argument is exclusive
const firstSlice = combineArray.slice(0, 4);
console.log(firstSlice);

