function Area(R : number) : void
{
    
//let sum : number = 0;
    const pi : number=3.14;
    let A : number=0;
    
    A = pi*R*R;


    console.log("Area of cricle:"+A)
}

import * as promptSync from 'prompt-sync'

const prompt = promptSync();

var C = prompt('Enter the your number:');


//var A : number = 20

Area(C)