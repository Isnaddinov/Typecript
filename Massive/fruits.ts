import fs from 'fs'

type Object = {
    admin:{
        name: number,
        password: string
    },
    users:{
        name: string,
        password: string
    },
    fruit:{
        name: string,
        color: string,
        price: number,
        count: number
    }
}

const mass:Object ={
    admin:{
        name: 123,
        password: "Sqas"
    },
    users:{
        name:"swa",
        password: "as"
    },
    fruit:{
        name: "tring,",
        color: "string",
        price: 23,
        count: 23
    }
} 

const files = fs.readFileSync('./index.json', 'utf-8' )

const obj: Object = JSON.parse(files) 

console.log(obj.admin);

// type Fruit = {
//     name: string
//     color: string
//     price: number
//     count: number
// }

// const fruit: Fruit[] = [
//     {
//         name: "Apple",
//         color: "red",
//         price: 15,
//         count: 5
//     },
//     {
//         name: "Banana",
//         color: "yellow",
//         price: 22,
//         count: 3
//     },
//     {
//         name: "Cherry",
//         color: "red",
//         price: 7,
//         count: 50
//     },
//     {
//         name: "Stawberry",
//         color: "red",
//         price: 55,
//         count: 60
//     },
//     {
//         name: "Orange",
//         color: "yellow",
//         price: 30,
//         count: 8
//     }
// ]


