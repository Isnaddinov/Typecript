import http, { IncomingMessage, ServerResponse } from 'http'

const pupils: string = `
Bu yerda spsika ba karochi
`
function handler(message: IncomingMessage, response:ServerResponse){
    console.log(message.method + " " + message.url + " " + message.httpVersion);
    console.log(message.rawHeaders);

    const buffer = Buffer.from(pupils, 'utf-8')

    const contentType: string = 'text/plain'
    let contentLength: number = buffer.byteLength

    response.writeHead(200 , 'OK', [
        'Content-Type', contentType,
        'Content-Length', contentLength
    ])
    
    response.write(buffer)
    response.end
    
}

const server = http.createServer(handler)
server.listen(9090, 'localhost', () =>{
    console.log('Server is running on port: 9090');
    
})