const dog = {
    name: 'Max',
    age: 5,
    eyeColor: 'blue'
};

// const keys = Object.keys(dog);
// console.log(keys);

// const values = Object.values(dog);
// console.log(values);

// const entries = Object.entries(dog);
// console.log(entries);

console.log('Cu for:');
for(const key of Object.keys(dog)){
    console.log(key);
}
for(const values of Object.values(dog)){
    console.log(values);
}
for(const entries of Object.entries(dog)){
    console.log(entries);
}