class Circle2
{
    Radius: number;
    PI: number;

    constructor(Data:number)
    {
        this.Radius=Data;
        this.PI=3.14;
    }

    CalculateAreaOfCircle(): number
    {
        let Ans :number=0;
        Ans= this.PI*this.Radius*this.Radius;
        return Ans;
    }
}

class Circle1x extends Circle2
{
    constructor(Data:number)
    {
        super(Data);    
    }

    CalculateCircumfaranceOfCircle(): number
    {
        let Ans :number=0;
        Ans= 2*this.PI*this.Radius;
        return Ans;
    } 
}

var object3 = new Circle1x(9);
var Dis:number=0;

Dis = object3.CalculateAreaOfCircle();
console.log("Area of circle is :"+Dis);

Dis = object3.CalculateCircumfaranceOfCircle();
console.log("Circumfarance of circle:"+Dis);
