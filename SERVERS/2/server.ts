import http, { createServer, IncomingMessage, ServerResponse } from 'http'

let resuorce: string = `Not Found`

function handler(message: IncomingMessage, response: ServerResponse) {
    person(message, response)

}

function person(message: IncomingMessage, response: ServerResponse) {
    if (message.method == 'GET') {
        response.writeHead(200, 'OK')
        response.end(resuorce)
    }

    else if (message.method == 'POST') {
        let body: any[] = []
        message.on('data', (chunk: any) => {
            body.push(chunk)
        })
            .on('end', () => {
                const content = Buffer.concat(body).toString()
                resuorce = content
                response.writeHead(200, 'OK')
                response.end("Your content:" + content + "has posted")
            })

    }
    else if (message.method == 'DELETE') {
        resuorce = `Has Deleted`
        response.writeHead(404, 'No content')
        response.end(resuorce)
    }

    else {
        response.writeHead(501, 'Not Implemented')
        response.end('Method' + message.method + 'Not Implemented')
    }
}

const server = http.createServer(handler)

server.listen(9090, 'localhost', () => {
    console.log('Server is running on port:9090');

})