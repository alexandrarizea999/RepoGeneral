const fsPromises = require('fs').promises
const path = require('path') // Easier to use

const fileOps = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8')
        console.log(data)
        // Delete the file
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'))
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\nNice to meet you.')
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'))
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8')
        console.log(newData)
    }catch (err) {
        console.error(err)
    }
}

fileOps();

//------------READING FROM THE FILE-----------------------------------------------
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if(err) throw err
//     console.log(data) // Will give me a buffer with a bunch of numbers if i don't add 'utf8'
//     // console.log(data.toString())
// })

// This statement will be the first 
// console.log('Hello...')

//------------WRITING TO THE FILE-----------------------------------------------
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you! :)',(err) => {
//     if(err) throw err
//     console.log('Write complete!')

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nYes it is!',(err) => {
//         if(err) throw err
//         console.log('Append complete!')

//         fs.rename(path.join(__dirname, 'files', 'test.txt'), path.join(__dirname, 'files', 'newreply.txt'), (err) => {
//             if(err) throw err
//             console.log('Rename complete!')
//         })
//     })
// })

// It creates a file if it doesn't exist
// fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'Testing test.',(err) => {
//     if(err) throw err
//     console.log('Append complete!')
// })

// Exit on uncaught errors
// We don't need to import 'process'
// process.on('uncaughtException', err => {
//     console.error(`There was an uncaught error: ${err}`)
//     process.exit(1)
// })

