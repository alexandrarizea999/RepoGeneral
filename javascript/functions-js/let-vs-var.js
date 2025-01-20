// var is function-scoped
// let is block-level-scoped

// function display(){
//     for(var i = 0; i < 5; i++){
//         console.log(i);
//     }
//     console.log(`i = ${i}`);
// }

function display(){
    for(let i = 0; i < 5; i++){
        console.log(i);
    }
    // reference error
    console.log(`i = ${i}`);
}

display();