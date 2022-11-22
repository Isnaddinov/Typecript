
// type Fruit = {
//     name: string,
//     price: number,
//     count: number
// }
// function calc(fruit: Fruit){
//     console.log(fruit.name + " $" + fruit.price + " = " + (fruit.price * fruit.count))
// }

// const apple : Fruit = {
//     name:"Apple", 
//     price: 15,
//     count: 10
// }

// calc(apple)

//------------------------------------

// type Person = {
//     name: string,
//     lastname: string,
//     age:number
// }

// function showMassage(person: Person){
//     console.log(person.name +" "+   person.lastname + " " + person.age);
    
// }
//  const Im = {
//     name: "Otabek",
//     lastname: "Isnaddinov",
//     age:23
//  }
// showMassage(Im)
//----------------------------------------
 
// type Files = {
//     appname: string,
//     downloads: number,
//     price: number,
//     package: string
// }

// function app(files: Files){
//     console.log(files.appname + " "+ "-" + " " + files.price +"\n" + files.package + "\n" + files.downloads );
    
// }

// const frist = {
//     appname: "collage",
//     downloads: 17,
//     price: 24,
//     package: "now"
// }

// app(frist)

// -------------------------------------
 

type Amounts ={
    phones: number,
    computers: number,
    monitors: number
}
function func(persentage:number,amounts: Amounts ){
    console.log("phones: " + persentage * amounts.phones + "\n" +
                "computers: " + persentage * amounts.computers + "\n" +
                "monitors: " + persentage * amounts.monitors);
    
}
 
const Immer = {
    phones: 14,
    computers:15,
    monitors: 16
}

func(2, Immer)
