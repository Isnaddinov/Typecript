import fetch, { Response } from 'node-fetch'
 const response: Promise<Response> = fetch('https://jsonplaceholder.typicode.com/posts')
 
 type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
 }
 response .then(res => res.text()) 
          .then(text => {let posts:Post[] = JSON.parse(text)
            let filter: Post[] = posts.filter(posts => posts.userId ==4)
           let map:string =  filter.map(posts => posts.body).join(" ") 
            console.log(map);
            
             
          })




 
