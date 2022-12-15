import { Request, Response } from "express"

type User = {
    name: string,
    balance: number
}

type Transaction = {
    amount: number
}
const user: User = {
    name: 'Joshqin',
    balance: 17000
}

export function getBalance(req: Request, res: Response ){
    res.status(200).json(user)
}
export function postBalance(req: Request, res: Response ){
    const transaction: Transaction = req.body
    user.balance = user.balance + transaction.amount *.99
    res.status(200).send('Tabriklimiz')
}
export function deleteBalance(req: Request, res: Response ){
    user.balance = 0
    res.status(404).send('Yoq')
}