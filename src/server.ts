import { json } from 'body-parser'
import express from 'express'
import { postRadar, postCar, postFine, getCalc, deleteCalc } from './calc'


const server = express()

server.use(express.json())


server.post('/radar', postRadar)
server.post('/car', postCar)
server.post('/fine', postFine)
server.get('/calc', getCalc)
server.delete('/remove', deleteCalc )

server.listen(9090, () => {
    console.log('Server is running  on host: 9090');
    
})