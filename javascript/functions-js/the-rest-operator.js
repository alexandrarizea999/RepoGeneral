let course = {
    name: 'JavaScript for Beginners', 
    duration: '3 hours'
};

// let newCourse = {...course};

let newCourse = {
    ...course, 
    name: 'JavaScript Pro'
};
console.log(newCourse);

function multiply2(...args){
    return args.reduce((accumulator, currentValue) => accumulator * currentValue, 1); 
}
console.log(multiply2(1, 2, 3, 4));

function multiply3(multiplier, ...numbers){
    return numbers.map(number => number * multiplier);
}
// the first arg is the multiplier
console.log(multiply3(2, 1, 2, 3, 4));