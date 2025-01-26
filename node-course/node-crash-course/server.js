import http from 'http'
import dotenv from 'dotenv'
import fs from 'fs/promises'
import url from 'url'
import path from 'path'

// TODO: vezi de ce nu merg index si about! 

// Get current path
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(`filename: ${__filename}`)
console.log(`dirname: ${__dirname}`)

dotenv.config();
const PORT = process.env.PORT

const server = http.createServer(async (req, res) => {
    try {
        // Check if GET request
        if(req.method === 'GET'){
            let filePath; 
            if(req.url === '/'){
               filePath = path.join(__dirname, 'public', 'index.html');
            }else if(req.url === '/about'){
                filePath = path.join(__dirname, 'public', 'about.html');
            }else{
                throw new Error('Not found.')
            }
        const data = await fs.readFile(filePath);
        res.setHeader('Content-type', 'text/html'); 
        res.write(data);
        req.end();
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
