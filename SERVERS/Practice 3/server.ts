import { write } from 'fs'
import http, { IncomingMessage, ServerResponse } from 'http'
import nodeUrl from 'url'
 
let radar: number[] = []
let car: number[] = []
let fine :number[] = []


const server = new http.Server((req:IncomingMessage, res:ServerResponse) =>{
    
    if(req.url == '/radar' && req.method == 'POST'){
        let body: any[] = []
        req.on('data', (chunk: any) => {
            body.push(chunk)
        })
            .on('end', () => {
                const content = Number(Buffer.concat(body).toString())
                radar.push(content)
                res.writeHead(200, 'OK')
                res.end("Belgilangan tezlik: " + content +'km/h'+ " kiritildi")
            })
    }
    else if(req.url == '/car' && req.method == 'POST'){
        let nody: any[] = []
        req.on('data', (chunk: any) => {
            nody.push(chunk)
        })
            .on('end', () => {
                const montent = Number(Buffer.concat(nody).toString())
                car.push(montent)
                res.writeHead(200, 'OK')
                res.end("Avtomabil tezligi: " + montent + 'km/h'+ " kirtildi")
            })
    }
    else if(req.url == '/fine' && req.method == 'POST'){
        let mody: any[] = []
        req.on('data', (chunk: any) => {
            mody.push(chunk)
        })
            .on('end', () => {
                const sontent = Number(Buffer.concat(mody).toString())
                fine.push(sontent)
                res.writeHead(200, 'OK')
                res.end("Jarima miqdori: " + sontent +" so'm"+ ' har km/h uchun' + " kiritildi")
            })
    }
    else if(req.url == '/calc' && req.method == 'GET' && car[0]>radar[0]){
       
        const c = car[0]
        const r = radar[0]
        const f = fine[0]
        let h = c-r
        let j = f*h
        res.writeHead(200, 'OK')
        res.write('Siz tezlikni oshirdingiz belgilangan tezlik: ' + r + ' km/h' + '\n' + 'Sizning tezligingiz: '+ c +'\n' + 'Belgilangan jarima miqdori har km/h uchun: '+ f +" so'm" +'\n' + 'Jarimangiz: ' + j + " so'm" + '\n' + "Agar 2 oy ichida to'lasangiz 30% skidka")
        res.end()



    }

    else if(req.url == '/calc' && req.method == 'GET' && car[0]<radar[0]){
        const c = car[0]
        res.writeHead(200, 'OK')
       res.write('Sizning tezligingiz: ' + c  + '\n' + ' ' + 'Bu ruxsat etilgan tezlik') 
       res.end()
    }
    
    else{
               res.writeHead(501, 'Not Implemented')
                res.end()
    }

})

server.listen(9090, 'localhost', () => {
    console.log(`Server is running on host: 9090`)})