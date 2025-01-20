// const numbers = [2, 4, 6, 8, 10];
// const squaredNumbers = numbers.map(num => num * num);
// console.log(squaredNumbers);

// a map works with any data type
// const characters = ['a', 'b', 'c', 'd'];
// const upperCaseCharacters = characters.map(char => char.toUpperCase());
// console.log(upperCaseCharacters);

const employees = [
    {id: 1, name: 'Alice', email: 'alice@gmail.com'},
    {id: 2, name: 'Josh', email: 'JoSH@gmail.com'},
    {id: 3, name: 'Matthew', email: 'mATtHew@gmail.com'},
    {id: 4, name: 'Rares', email: 'RaRES@gmail.com'},
]

const updatedEmployees = employees.map(employee => ({
    ...employee,
    email: employee.email.toLowerCase() 
}));

console.log(updatedEmployees);