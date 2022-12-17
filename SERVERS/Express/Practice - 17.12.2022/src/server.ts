import express, { Request, Response } from 'express'
import { getBook, postBook,deleteBook } from './function'

const server = express()
server.use(express.json())


server.get('/books', getBook)
server.post('/books', postBook)
server.delete('/books/:id', deleteBook)


server.listen(9090, ()=>{
    console.log('Server is running on host: 9090');
    
})