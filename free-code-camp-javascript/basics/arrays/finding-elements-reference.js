const employees = [
    {
        id: 1,
        name: 'Jim'
    },
    {
        id: 2,
        name: 'Michael'
    },
    {
        id: 3,
        name: 'Baby'
    }
];

// const employee = employees.find(function(e){
//     return e.name === 'Baby'
// });

const employee = employees.findIndex(function(e){
    return e.name === 'Baby'
});
console.log(employee);

// method 2
const employee2 = employees.find((e) => e.name === 'Jim');
console.log(employee);
