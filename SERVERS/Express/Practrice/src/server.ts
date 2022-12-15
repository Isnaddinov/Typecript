import { json } from 'body-parser'
import express from 'express'

const server = express()

server.use(express.json())

server.post('/radar', )
server.post('/car', )
server.post('/fine', )
server.get('/calc', )

server.listen(9090, () => {
    console.log('Server is running  on host: 9090');
    
})