import http from 'http'
import dotenv from 'dotenv'

dotenv.config();
const PORT = process.env.PORT

const server = http.createServer((req, res) => {
    // res.write('Hello World')
    // res.setHeader('Content-Type', 'text/html')
    // res.statusCode = 404
    // res.end('<h1>Hello World</h1>')

    res.writeHead(200, { 'Content-type': 'text/html' })
    res.end('<h1>Hello world!</h1>')
})

server.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`)
})
