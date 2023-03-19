function ChcArmstrongs(no: number) : void
{
    
    let sum:number=0;
    //let sum:number=0;
    //let remainder:number=0
    var temp:number=0;
    temp=no;

    while (temp > 0) 
{
    
    let remainder = temp % 10;

    sum += remainder * remainder * remainder;
    
    temp =parseInt(temp/10); 
}

if (no == sum) 
{

    console.log("It is an Armstrong number");
}
else 
{
    console.log("It is not an Armstrong number");
}
    
}


ChcArmstrongs(153);


