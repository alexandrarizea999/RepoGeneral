// logical operators
// console.log(true || true); // true
// console.log(false || true); // true
// console.log(false || false); // false
// console.log(true || false); // true

// let hasReservation = true; 
// let acceptingWalkIns = false; 
// const hasAccessToTable = hasReservation || acceptingWalkIns; 
// console.log(hasAccessToTable); 

// console.log(true && true); // true
// console.log(false && true); // false
// console.log(false && false); // false
// console.log(true && false); // false

// let age = 16;
// let hasCar = true;

// const canDrive = age >=16 && hasCar;
// console.log(canDrive);

// let a = true, b = true, c = true, d = true;
// console.log((a && b) || (c && d));

// console.log(!true);

// let isClosedOnSunday = true;
// const isRestaurantOpen = !isClosedOnSunday;

// console.log(isRestaurantOpen);

let a = null; 
const result = a ?? false;

console.log(result); // false

const result2 = (a !== null && a !== undefined) ? a : false;
console.log(result2);

let defaultChosenColor = 'blue';
let defaultColor = 'green';

const currentWebsiteColor = defaultChosenColor || defaultColor;
console.log(currentWebsiteColor);