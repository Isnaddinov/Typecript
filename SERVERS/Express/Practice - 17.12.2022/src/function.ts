import { Request, Response } from "express";
import { Books,  } from "./types";
let id: number = 0
let books: Books[] = []


export function getBook(req: Request, res: Response) { res.status(200).send(books) }

export function postBook(req: Request, res: Response) {
    id++
    let lbook = req.body
    lbook["id"] = id
    books.push(lbook)
    res.status(201).send("Your book has Created")
}

export function deleteBook(req: Request, res: Response) {
    let { id } = req.params
    let arr: Books[] = books.filter(book => book.id.toString() !== id)
    books = arr
    res.status(200).send(`Book with id ${id} has been deleted.`)
}


