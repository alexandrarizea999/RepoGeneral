let course = {
    name: 'JavaScript for Beginners',
    hours: 3 
};

console.log(course);
console.log(course.hours);
console.log(course.name);

course.name = 'JavaScript Fundamentals';
console.log(course.name);

console.log(course['name']);

course['name'] = 'JavaScript 101';
console.log(course['name']);

let property = 'hours'
console.log(course[property]);