// let characters = ['c', 'd', 'b', 'a'];
// characters.sort();
// console.log(`characters sorted ${characters}`);
// characters.reverse();
// console.log(`characters after reverse ${characters}`);

let employees = [
    {id: 1, name: 'Jim'}, 
    {id: 2, name: 'Steven'}, 
    {id: 3, name: 'Andrew'}, 
    {id: 4, name: 'Terry'}, 
];

employees.sort((a, b) => {
    const lowerCaseA = a.name.toLowerCase();
    const lowerCaseB = b.name.toLowerCase();
    // -1 mean that object a comes before object b
    // so we can compare two items at a time
    if(lowerCaseA < lowerCaseB) return -1;
    if(lowerCaseA > lowerCaseB) return 1;
    return 0; 
});

console.log(employees);