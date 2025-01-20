// const number = [1, 2, 3, 4, 5, 6];
// const evenNumbers = number.filter(number => number % 2 === 0);
// console.log(evenNumbers);

const employees = [
    {id: 1, name: 'Alice', role: 'Developer'},
    {id: 2, name: 'John', role: 'Designer'},
    {id: 3, name: 'Charlie', role: 'Manager'},
    {id: 4, name: 'Danielle', role: 'Developer'},
];

// The filter method does not change the initial array
// it creates a new array with the item that match the criteria
const developers = employees.filter(employee => employee.role === 'Developer');
console.log(developers);