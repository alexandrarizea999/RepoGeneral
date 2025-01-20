// const dog = {
//     name: 'Max',
//     breed: 'Dachshund',
//     age: 5, 
//     weightInPounds: 12, 
//     eat: function(){
//         console.log('Chomp!');
//     },
//     bark(){
//         console.log('Woof!');
//     }
// }

// const anotherDog = {
//     name: 'Marley',
//     breed: 'Chocolate Lab',
//     age: 3, 
//     weightInPounds: 60, 
//     eat: function(){
//         console.log('Chomp!');
//     },
//     bark(){
//         console.log('Woof!');
//     }
// }

// function getDog(name, breed, age, weightInPounds){
//     return{
//         name: name, // i can just say name, 
//         breed: breed,
//         age: age,
//         weightInPounds: weightInPounds,
//         eat(){
//             console.log('Chomp!');
//         },
//         bark(){
//             console.log('Woof!');
//         }

//     }
// }

function getDog(name, breed, age, weightInPounds){
    return{
        name,
        breed,
        age,
        weightInPounds,
        eat(){
            console.log(this.name + 'Chomp!');
        },
        bark(){
            console.log(this.name + 'Woof!');
        }

    }
}

function Dog(name, breed, age, weightInPounds){
    //this{}

    // Add properties to this
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.weightInPounds = weightInPounds;

    this.eat = function(){
        console.log(this.name + ': Chomp!');
    }
    
    this.bark = function(){
        console.log(this.name + ": Woof!");
    }

    // return this
}

// const anotherDog = getDog('Marley', 'Chocolate Lab', 3, 60);
const anotherDog = new Dog('Marley', 'Chocolate Lab', 3, 60);
console.log(anotherDog);