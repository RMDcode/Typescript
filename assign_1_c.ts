function DisplayFactor(No : number) : void
{
    
//let sum : number = 0;
let i : number = 0;

    for(i = 1; i < No; i++)
    {
        if(No % i == 0)
        {
            console.log(i);
        }
    }
       
}

import * as promptSync from 'prompt-sync'

const prompt = promptSync();

var A = prompt('Enter the your number:');


//var A : number = 20

DisplayFactor(A)