import http, { IncomingMessage, ServerResponse } from 'http'
import nodeUrl from 'url'
 
let fruits: string[] = [

]


const server = new http.Server((req:IncomingMessage, res:ServerResponse) =>{
    const array:string[] = req.url!.split('?')
    const url = array[0]
    if(url == '/fruits' && req.method == 'GET'){
        res.writeHead(200, 'OK')
        res.write(JSON.stringify(fruits))
        res.end()
    }
    else if(url == '/fruits' && req.method == 'POST'){
        let body: any[] = []
        req.on('data', (chunk: any) => {
            body.push(chunk)
        })
            .on('end', () => {
                const content = Buffer.concat(body).toString()
                fruits.push(content)
                res.writeHead(200, 'OK')
                res.end("Your content:" + content + " has posted")
            })
    }
    else if(url == '/fruits' && req.method == 'DELETE'){
        const query = nodeUrl.parse(req.url!, true).query
        fruits.splice(+query.index!, 1)
        res.writeHead(204, 'No content')
        res.end()

    }
    else{
               res.writeHead(501, 'Not Implemented')
                res.end()
    }

})

server.listen(9090, 'localhost', () => {
    console.log(`Server is running on host: 9090`)})