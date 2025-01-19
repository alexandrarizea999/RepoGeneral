const course = {
    name: 'JavaScript for Beginners',
    duration: 3,
    sections: 7
};

for(const key in course){
    console.log(course[key]);
}

console.log('The elements are:');
let numbers = [1, 2, 3, 4, 5];

for(let element of numbers){
    console.log(element);
}