const numbers = [5, 4, 3, 2, 1, 3];
// the index where the first 3 occurs
const indexOfThree = numbers.indexOf(3); 
//console.log(indexOfThree);

// last index where 3 occurs
const lastIndexOfThree = numbers.lastIndexOf(3); 
//console.log(lastIndexOfThree);

const indexOfTen = numbers.lastIndexOf(10);
// console.log(indexOfTen);
// console.log(numbers[indexOfTen]);

if(indexOfTen === -1){
    console.log('10 is not found in the array');
}

if(numbers.includes(10)){
    console.log('10 is found in the array');
}

