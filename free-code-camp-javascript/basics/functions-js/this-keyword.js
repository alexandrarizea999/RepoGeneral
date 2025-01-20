// const course = {
//     name: 'JavaScript for Beginners',
//     start(){
//         console.log(this.name);
//     }
// }

// course.start();

// function startVideo(){
//     console.log(this);
// }

// startVideo();

// const course = {
//     name: 'ES6 syntax',
//     start: () => {
//         // this access the global name variable which is undefined
//         console.log(this.name);
//     }
// }

// course.start(); 

function introduce(language){
    console.log(this.name + ' teaches ' + language);
}

// this.name is bind into the instructor object
const instructor = {name: 'Steven'};
const introduction = introduce.bind(instructor);
introduction('JavaScript');

