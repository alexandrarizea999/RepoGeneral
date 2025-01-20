console.log('Folosind for:');

for(let i = 0; i < 10; i++){
    if(i % 2 === 0){
        continue; // skip all even numbers
    }
    console.log(i);
}

console.log('Folosind while:');

let j = 0;
while(j < 10){
    j++;
    if(j % 2 === 0){
        continue;
    }
    console.log(j);
}

console.log('Folosind do-while:');

let k =0;
do{
    k++;
    if(k % 2 === 0){
        continue;
    }
    console.log(k);
}while(k < 10);

console.log('Folosind const:');

const obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6};
for(let element in obj){
    if(obj[element] % 2 === 0){
        continue;
    }
    console.log(obj[element]);
}

console.log('Folosind arr:');

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for(let el in arr){
    if(el % 2 === 0){
        continue;
    }
    console.log(el);
}