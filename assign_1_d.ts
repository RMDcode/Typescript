function ChkPrime(No : number) : void
{    
let i : number = 0;
let p : number = 0;

if(No == 0 || No == 1)
{
    p = 1;
}

for(i=2;i<=No/2;++i )
{
        if(No%i==0) 
        {
                p = 1;
                break;
        }
}

if(p==0)
{
    console.log("This number is prime :"+No);

}
else
{
    console.log("This number is not prime :"+No);
}
       
}

import * as promptSync from 'prompt-sync'

const prompt = promptSync();

var A = prompt('Enter the your number:');
//A=Number.parseInt(A);
ChkPrime(A)