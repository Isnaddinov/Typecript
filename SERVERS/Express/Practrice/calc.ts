import { Request, Response } from "express";


let radar: Radar[] = [

]
 

type Radar = {
    radar: number,
    car: number,
    fine: number
}


export function postRadar(req:Request, res: Response){
    let rpush:Radar = req.body
    radar.push(rpush)
    res.status(200).send("Berilgan ko'rsatkichlar:" + '\n'+ "Belgilangan tezlik: " + radar[0].radar + " km/h"+ '\n'+ "Avtomabil tezliki: " + radar[0].car +" km/h"+ '\n' +"Jarima miqdori har km/h uchun: " + radar[0].fine + " so'm"+'\n' + "Kiritildi")
}

export function getCalc(req:Request, res: Response){
   if(radar[0].car > radar[0].radar){
    const c = radar[0].car
    const r = radar[0].radar
    const f = radar[0].fine
    let h = c-r
    let j = f*h

    res.status(200).send('Siz tezlikni oshirdingiz belgilangan tezlik: ' + r + ' km/h' + '\n' + 'Sizning tezligingiz: '+ c +' km/h' +'\n' + 'Belgilangan jarima miqdori har km/h uchun: '+ f +" so'm" +'\n' + 'Jarimangiz: ' + j + " so'm" + '\n' + "Agar 2 oy ichida to'lasangiz 30% skidka")
    radar = []

   } 
   else if(radar[0].car <= radar[0].radar){
    res.status(200).send("Sizning tezligingiz: " + radar[0].car + " belgilangan tezlikdan oshmagan")
   }
}



