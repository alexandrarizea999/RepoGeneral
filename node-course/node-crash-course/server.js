import http from 'http'
import dotenv from 'dotenv'

dotenv.config();
const PORT = process.env.PORT

const server = http.createServer((req, res) => {
    // res.write('Hello World')
    // res.setHeader('Content-Type', 'text/html')
    // res.statusCode = 404
    // res.end('<h1>Hello World</h1>')

    // console.log(req.url)
    // console.log(req.method)

    try {
        // Check if GET request
        if(req.method === 'GET'){
            if(req.url === '/'){
                res.writeHead(200, { 'Content-type': 'text/html' })
                res.end('<h1>HomePage</h1>')
            }else if(req.url === '/about'){
                res.writeHead(200, { 'Content-type': 'text/html' })
                res.end('<h1>About</h1>')
            }else{
                res.writeHead(404, { 'Content-type': 'text/html' })
                res.end('<h1>Page not found.</h1>')
            }
        }else{
            throw new Error('Method now allowed.');
        }
    } catch (error) {
        res.writeHead(500, { 'Content-type': 'text/html' })
        res.end('<h1>Server error.</h1>')
    }
})

server.listen(PORT, () => {
    console.log(`Connected to port ${PORT}`)
})
