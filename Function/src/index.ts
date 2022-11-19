function sum(a: number, b:number): string{
    return (a + b).toString()
}

let addition: (a: number, b: number)=> string = sum

let s: string = "result, " + addition(13,2)

// console.log(s)

function procress(){
    console.log('download file Rork');
    console.log('1%');
    console.log('15%');
    console.log('17%');
    console.log('18%');
    return "Fullcamkill"
    console.log('22%');
    console.log('33%');
    console.log('44%');
    return
    
}

let res: string | undefined = procress()
if(typeof res == "string"){
 console.log(res[0], res[1], res[4], res[7]);
 
}
else{
    console.log(res);
    
}