function Maximum(Arr : number[]) : number
{
    let i : number=0;
    let max = Arr[0];

    for(i=1 ; i < Arr.length ; i++)
    {
        if(Arr[i] > max)
        {   
            max = Arr[i];
        }
    }
    return max;
}

//import * as promptSync from 'prompt-sync'
//const prompt = promptSync();
//var arr = prompt('Enter the your array numbers:');
//var arr : number[]=[0];
var arr: number[]=[23,89,6,29,56,45,77,32]
console.log("Maximum number is :"+Maximum(arr));