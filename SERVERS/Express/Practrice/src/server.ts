import express from 'express'
import { postRadar, getCalc,  } from './calc';

const server = express()

server.use(express.json())

server.post('/radar',postRadar )
server.get('/calc',  getCalc)


server.listen(9090, () => {
    console.log('Server is running  on host: 9090');
    
})
