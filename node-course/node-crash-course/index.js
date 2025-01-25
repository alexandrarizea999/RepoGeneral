// const {generateRandomNumber, celciusToFehrenheit} = require('./utils')
// console.log(`Random number: ${generateRandomNumber()}`);
// console.log(`Temperature in Fahrenheit: ${celciusToFehrenheit(25)}`);

import getPosts, {getPostsLength} from './postController.js';
console.log(getPosts());
console.log(getPostsLength());