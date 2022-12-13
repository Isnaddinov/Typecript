import http, {IncomingMessage, ServerResponse} from 'http'

const fruits =[
    "Aplle",
    "Banana"
]

function onStart(){
    console.log('Server is running');
}

function handler(request: IncomingMessage, response: ServerResponse){
   console.log(request.method, request.url);
   response.writeHead(200)
   response.end('HelloU')
   
}

const server = http.createServer(handler)
server.listen(9090, 'localhost', onStart)
