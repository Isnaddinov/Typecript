import { Request, Response } from "express";

type Rpush = {
    rspeed: number
}
type Cpush = {
    cspeed: number
}
type Fpush = {
    fprice: number
}


type Radar = {
    radar: number
}
type Car = {
    car: number
}
type Fine = {
    fine: number
}

let radar:Radar = {
    radar: 0
}
let car: Car = {
    car: 0
}
let fine: Fine = {
    fine: 0
}

export function postRadar(req:Request, res: Response){
    let rpush: Rpush = req.body
   radar.radar = radar.radar + rpush.rspeed
    res.status(200).send("Belgilangan tezlik: " + radar.radar +' km/h'+ " kiritildi")
}
export function postCar(req:Request, res: Response){
    let cpush: Cpush = req.body 
    car.car = car.car + cpush.cspeed
    res.status(200).send("Avtomabil tezligi: " + car.car + ' km/h'+ " kirtildi")
}
export function postFine(req:Request, res: Response){
    let fpush: Fpush = req.body
    fine.fine = fine.fine + fpush.fprice
    res.status(200).send("Jarima miqdori: " + fine.fine +" so'm"+ ' har km/h uchun' + " kiritildi")
}
export function getCalc(req:Request, res: Response){
   if(car.car>radar.radar){
    const c = car.car
    const r = radar.radar
    const f = fine.fine
    let h = c-r
    let j = f*h

    res.status(200).send('Siz tezlikni oshirdingiz belgilangan tezlik: ' + r + ' km/h' + '\n' + 'Sizning tezligingiz: '+ c +' km/h' +'\n' + 'Belgilangan jarima miqdori har km/h uchun: '+ f +" so'm" +'\n' + 'Jarimangiz: ' + j + " so'm" + '\n' + "Agar 2 oy ichida to'lasangiz 30% skidka")

   } 
   else if(car.car<radar.radar || car.car == radar.radar ){
    const c = car.car
    res.status(200).send('Sizning tezligingiz: ' + c  +  ' km/h' + '\n' + ' ' + 'Bu ruxsat etilgan tezlik')
   }
}

export function deleteCalc(req:Request, res: Response){
radar.radar = 0
car.car = 0
fine.fine = 0
res.status(204).send('Program has refleshed')

}


