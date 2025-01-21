//-------------NodeJS vs Vanilla JS-------------------------
// 1) Node runs on a server - not in a browser (backend)
// 2) The console is in the terminal window
console.log('Hello World')
const { dir } = require('console')
// 3) Global object instead of window object
// console.log(global);
// 4) Has Common Core modules 
// 5) CommonJS modules instead of ES6 modules
// 6) Missing some JS APIs like fetch

const os = require('os')
const path = require('path')
// const math = require('./math)
const {add, subtract, multiply, divide} = require('./math')

console.log(add(2, 2))
console.log(subtract(4, 2))
console.log(multiply(2, 2))
console.log(divide(3, 5))

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

// console.log(`Dir name: ${path.dirname(__filename)}`) // Directory name
// console.log(`Base name: ${path.basename(__filename)}`) // Directory name + current file
// console.log(`Ext name: ${path.extname(__filename)}`) // The extension of the file

// console.log(path.parse(__filename)) // An object with the values: root, dir, base,
                                    // ext, and name

