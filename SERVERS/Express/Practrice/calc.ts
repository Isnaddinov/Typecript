import { Request, Response } from "express";

let radar: number[] = []
let car: number[] = []
let fine :number[] = []

export function postRadar(req:Request, res: Response){
    let rpush = Number(req.body) 
    radar.push(rpush)
    res.status(200).send("Belgilangan tezlik: " + rpush +'km/h'+ " kiritildi")
}
export function postCar(req:Request, res: Response){
    let cpush = Number(req.body) 
    car.push(cpush)
    res.status(200).send("Avtomabil tezligi: " + cpush + 'km/h'+ " kirtildi")
}
export function postFine(req:Request, res: Response){
    let fpush = Number(req.body)
    fine.push(fpush)
    res.status(200).send("Jarima miqdori: " + fpush +" so'm"+ ' har km/h uchun' + " kiritildi")
}
export function getCalc(req:Request, res: Response){
   if(car[0]>radar[0]){
    const c = car[0]
    const r = radar[0]
    const f = fine[0]
    let h = c-r
    let j = f*h

    res.status(200).send('Siz tezlikni oshirdingiz belgilangan tezlik: ' + r + ' km/h' + '\n' + 'Sizning tezligingiz: '+ c +' km/h' +'\n' + 'Belgilangan jarima miqdori har km/h uchun: '+ f +" so'm" +'\n' + 'Jarimangiz: ' + j + " so'm" + '\n' + "Agar 2 oy ichida to'lasangiz 30% skidka")

   } 
   else if(car[0]<radar[0]){
    
   }
}



