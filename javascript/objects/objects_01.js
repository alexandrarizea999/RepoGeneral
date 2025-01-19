const person = {
    name: 'Steven'
};

person.favoriteFood = 'Tacos';
console.log(person);
person['favoriteIceCream'] = 'chocolate';
console.log(person);

delete person.favoriteIceCream; 
console.log(person);

person.eat = function(){
    console.log('start eating');
}
person.eat();
console.log(person);

// error: person = {};