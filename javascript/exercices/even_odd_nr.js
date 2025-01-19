console.log('Even nr:');
function evenNr(arr){
    for(let element in arr){
        if(element % 2 === 0){
            continue;
        }
        console.log(element);
    }
}

evenNr([0, 1, 4, 2, 5, 3, 10, 8, 16]);

console.log('Odd nr:');
function oddNr(arr){
    for(let element in arr){
        if(element % 2 !== 0){
            continue;
        }
        console.log(element);
    }
}

oddNr([0, 1, 4, 2, 5, 3, 10, 8, 16]);