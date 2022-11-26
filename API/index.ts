import {posts} from './posts'
// import fetch, {Response} from 'node-fetch'
// import { type } from 'os'
// import { from } from 'form-data'

// const response: Promise<Response> =  fetch('https://jsonplaceholder.typicode.com/posts')
type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}
// response
// .then(res =>res.text())
// .then(text => {
    //  let posts:Post[] = JSON.parse(text)
    
     let filter: Post[] = posts.filter( posts => posts.userId ==4)
     let map:string[] = posts.map(posts=> posts.body)
    console.log(map)



