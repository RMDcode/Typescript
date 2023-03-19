function Maximum(No1 : number , No2 : number , No3 : number) : void
{

    if(No1>=No3)
    {
        if(No1>=No2)
        {  
            console.log("The Maximum number is:",No1);
        }
        else
        {
            console.log("The Maximum number is:",No2);
        }
    }
    else
    {
        console.log("The Maximum number is:",No3);
    }   
     
}

import * as promptSync from 'prompt-sync'

const prompt = promptSync();

var A = prompt('Enter the your number:');
var B = prompt('Enter the your number:');
var C = prompt('Enter the your number:');
//var A : number = 23
//var B : number = 89
//var C : number = 6

Maximum(A,B,C)