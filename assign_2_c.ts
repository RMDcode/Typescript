function Maximum(Arr : number[]) : any
{
  let i:number[];
  let n:number=0;

  i=Arr.sort();

  return i[6];


}



var num : number[]=[23,89,6,29,56,45,77,32]

var Ret : number = 0;

Ret = Maximum(num);

console.log("Display second maximum number is:"+Ret)