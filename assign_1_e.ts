function Fibonacci(No : number) : void
{
    let i: number=0;
    let n: number=1;


     console.log(n);
    let n1:number;
    
    for(let i=1;i<=No;i++)
    {
          console.log(i)
          n1=i+n;
          i=n;
          n=n1;
    }
    
}

var A : number = 21;

Fibonacci(A);