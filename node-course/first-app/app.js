// Load the module
// Now logger is a function
// const log = require('./logger.js');
// log('message');

// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// const os = require('os');
// var totalMemory = os.totalmem;
// var freeMemory = os.freemem;

// console.log(`Total memory: ${totalMemory}`);
// console.log(`Free memory: ${freeMemory}`);

// The files in this folder
// const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('./', function(err, files){
//     if(err) console.log('Error', err);
//     else console.log('Result', files);
// });

// Events modules
// It's a class = container for methods and properties
const EventEmmiter = require('events');
const emitter = new EventEmmiter();
// To raise en event
emitter.emit('messageLogged');

