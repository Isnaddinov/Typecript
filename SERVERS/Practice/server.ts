import http, { IncomingMessage, ServerResponse } from 'http'


function handler(message: IncomingMessage, response: ServerResponse){
    person(message, response)
    // currency(message: IncomingMessage, response: ServerResponse)
}
type Resuorce = [ 
    name :string,
     capital:string
    // {name :string
    //  capital:string} ,
    // {name :string
    //  capital:string} ,
    // {name :string
    //  capital:string} ,
    // {name :string
    //  capital:string} ,
    // {name :string
    //  capital:string} ,
    // {name :string
    //  capital:string} ,
    // {name :string
    //  capital:string} ,
    // {name :string
    //  capital:string} ,
    // {name :string
    //  capital:string} ,
    // {name :string
    //  capital:string}, 
    // {name :string
    //  capital:string} ,
    // {name :string
    //  capital:string} ,
    // {name :string
    //  capital:string} ,
    ]
    

let resuorce: Resuorce = {
  name:'Afghanistan',
 capital: 'Kabul'  
}
 
 
 
    //  Afghanistan = 'Kabul',
    //  Albania = 'Tirana',
    //  Algeria = 'Algiers'
    //  Andorra	= 'Andorra la Vella'
    //  Angola	= 'Luanda'
    //  Argentina	= 'Buenos Aires'
    //  Armenia	= 'Yerevan'
    //  Australia	= 'Canberra'
    //  Austria	= 'Vienna'
    //  Azerbaijan= '	Baku'
    //  Bahamas	= 'Nassau'
    //  Bahrain	= 'Manama'
    //  Bangladesh= '	Dhaka'
    //  Barbados	= 'Bridgetown'
    //  Belarus	= 'Minsk'
    //  Belgium	= 'Brussels'
    //  Belize	= 'Belmopan'
    //  Bhutan	= 'Thimphu'
    //  Bolivia	= 'La Paz '
    //  Bosnia	= 'Sarajevo'
    //  Botswana	= 'Gaborone'
    //  Brazil	= 'Brasilia'
    //  Brunei	= 'Bandar Seri Begawan'
    //  Bulgaria	= 'Sofia'
    //  Burundi	= 'Gitega'
    //  Cambodia	= 'Phnom Penh'
    //  Cameroon	= 'Yaounde'
    //  Canada	= 'Ottawa'
    //  Greece	= 'Athens'
    //  Grenada	= 'Saint George'
    //  Guatemala = 'Guatemala City'
    //  Guineat ='Conakry'
    //  Guinea_Bissau	= 'Bissau'
    //  Guyana	= 'Georgetown'
    //  Haiti	= 'Port au Prince'
    //  Honduras	= 'Tegucigalpa'
    //  Hungary	= 'Budapest'
    //  Iceland	= 'Reykjavik'
    //  India	= 'New Delhi'
    //  Indonesia	= 'Jakarta'
    //  Iran	= 'Tehran'
    //  Iraq	= 'Baghdad'
    //  Ireland	= 'Dublin'
    //  Italy	= 'Rome'
    //  Jamaica =	'Kingston'
    //  Japan	= 'Tokyo'
    //  Jordan	= 'Amman'
    //  Kazakhstan	= 'Nur-Sultan'
    //  Kenya	 = 'Nairobi'
    //  Kiribati	= 'Tarawa Atoll'
    //  Kosovo	= 'Pristina'
    //  Kuwait	= 'Kuwait City'
    //  Kyrgyzstan =	'Bishkek'
    //  Laos = 'Vientiane'
    //  Latvia =	'Riga'
    //  Lebano =	'Beirut'
    //  Lesoth =	'Maseru'
    //  Liberi =	'Monrovia'


function person(message: IncomingMessage, response: ServerResponse){
    
    if(message.method == `GET` , message.url ){
        response.writeHead(200, 'OK');
        response.end(message.url.concat(resuorce.))
        
    }
    // else if(message.method == `POST`){
    //     let body: any[] = []

    //     message.on('data', (chunk:Resuorce) => {
    //         body.push(chunk)
    //     }).on('end', () =>{
    //         let content = Buffer.concat(body).toString()
    //         resuorce  = content
    //         response.writeHead(200, 'OK');
    //         response.end('Your resuorce has been added')
    //     })
    // }
    else if (message.method == `DELETE`){
            resuorce = [
                {name : '',
                capital: ''},
                {name : '',
                capital: ''},
                {name : '',
                capital: ''},
                {name : '',
                capital: ''},
                {name : '',
                capital: ''},
                {name : '',
                capital: ''},
                {name : '',
                capital: ''},
                {name : '',
                capital: ''},
                {name : '',
                capital: ''},
                {name : '',
                capital: ''},
                {name : '',
                capital: ''},
                {name : '',
                capital: ''},
                {name : '',
                capital: ''},
                {name : '',
                capital: ''}
    ]
            response.writeHead(204, 'No content')
            response.end()
    }
    else if(message.method != 'GET',
    message.method != 'POST',
    message.method != 'DELETE'){
        response.writeHead(501, 'Not Implemented')
        response.end('Method' + message.method + 'Not Implemented')
    }

}


const server = http.createServer(handler)

server.listen(9090, 'localhost', () => {
    console.log(`Server is running on host: 9090`);
    
})