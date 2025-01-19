// for(let i = 0; i < 10; i++){
//     if(i === 5){
//         break;
//     }
//     console.log(i);
// }

// let i = 0;
// while(i < 10){
//     if(i === 5){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// let i = 0;
// do{
//     if(i === 5){
//         break;
//     }
//     console.log(i);
//     i++;
// }while(i < 10);

// const obj = { a: 1, b: 2, c: 3};
// for(let key in obj){
//     if(key === 'b'){
//         break;
//     }
//     console.log(obj[key]);
// }

const arr = [1, 2, 3, 4, 5];
for(let element of arr){
    if(element === 3){
        break;
    }
    console.log(element);
}