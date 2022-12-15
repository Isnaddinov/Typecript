import express from "express";
import { deleteBalance, getBalance, postBalance } from "./balance";
import { getName, postName } from "./name";

const server = express()

server.use(express.json())

server.get('/name', getName)
server.post('/name', postName)

server.get('/balance', getBalance)
server.post('/balance', postBalance )
server.delete('/balance',deleteBalance )

server.listen(9090, () => {
    console.log('Express ishladi');
    
})