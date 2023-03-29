class Arithematic1
{
    N1:number;
    N2:number;

    constructor(A: number, B: number)
    {
        this.N1=A;
        this.N2=B;
    }

    Addition(): number
    {
        return this.N1+this.N2;
    }

    Subtraction(): number
    {
        return this.N1-this.N2;
    }

    Multiplication(): number
    {
        return this.N1*this.N2;
    }

    Division(): number
    {
        return this.N1/this.N2;
    }
}

var object1=new Arithematic1(100,10);
var object2=new Arithematic1(21,15);

var Dis: number=0;

//First object

Dis=object1.Addition();
console.log("Addition of Object1:\n"+Dis);


Dis=object1.Subtraction();
console.log("Subtraction of Object1:\n"+Dis);


Dis=object1.Multiplication();
console.log("Mulitiplication of Object1:\n"+Dis);


Dis=object1.Division();
console.log("Division of Object1:\n"+Dis);

//Second object

Dis=object2.Addition();
console.log("Addition of Object2:\n"+Dis);


Dis=object2.Subtraction();
console.log("Subtraction of Object2:\n"+Dis);


Dis=object2.Multiplication();
console.log("Mulitiplication of Object2:\n"+Dis);


Dis=object2.Division();
console.log("Division of Object2:\n"+Dis);
