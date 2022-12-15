import {  Request, Response } from "express";

let resuorce: string = ''
export function getName(req: Request, res: Response){
    res.status(200).send(resuorce)
}
export function postName(req: Request, res: Response){
    resuorce = req.body.text
    res.status(201).send('Resuorce added')
}