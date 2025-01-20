const name = 'Steven';

let sentence = 'A new sentence.';

const doesIncludeNew = sentence.includes('new');
console.log(doesIncludeNew);

console.log(sentence[3]);

const startsWithA = sentence.startsWith('A');
console.log(startsWithA); 

const endssWithA = sentence.endsWith('A');
console.log(endssWithA); 

console.log('Updated sentence:');
let updateSentence = sentence.replace('new', 'short');
console.log(updateSentence);

trimmedSentence = sentence.trim();
console.log(trimmedSentence);

const wordsInSentence = sentence.split(' ');
console.log(wordsInSentence);

let email = 'TesTEMAIL@Gmail.com';
let lowerCaseEmail = email.toLocaleLowerCase();
console.log(lowerCaseEmail);

let upperCaseEmail = email.toLocaleUpperCase();
console.log(upperCaseEmail);