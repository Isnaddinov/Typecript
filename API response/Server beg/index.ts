import PromptSync from "prompt-sync";

const prompt = PromptSync()
let fruits =[
    "Aplle",
    "Banana"
]
   


while(true){

    const request = prompt('Wait request: ')
    const body = prompt('Body: ')
    if(request == "toxta"){
        break
    }
      const array = request.split(' ')
       const method = array[0]
       const resourse = array[1]
if(resourse == 'fruits'){
    if(method == 'GET'){
        console.log('Response: ', fruits);
    }
   else if(method == 'POST'){
    fruits.push(body)
    console.log('Response: ', 'Your data has pushed');
    
   }
   else{
    console.log('404: Resourse ' + resourse + ' has not method ' + method);
    
   }
  }  
   
   else{
    console.log('404: Resourse ' + resourse + ' not found');
    
   }
     
}
