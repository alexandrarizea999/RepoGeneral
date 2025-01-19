let job = 'Designer';

// if(job === 'Software Developer'){
//     console.log('Writes Code');
// } else if(job === 'Designer'){
//     console.log('Makes user interface documents'); 
// } else if(job === 'Cloud Engineer'){
//     console.log('Manages and deploys cloud resources');
// } else { 
//     console.log('Works directly with customers');
// }

switch (job){
    case 'Software Developer': console.log('Writes Code');
    break;
    case 'Designer': console.log('Makes user interface documents'); 
    break;
    case 'Cloud Engineer': console.log('Manages and deploys cloud resources');
    break;
    default: console.log('Works directly with customers');
}

