class Circle1
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

var object = new Circle1(9);
var Dis:number=0;

Dis = object.CalculateAreaOfCircle();
console.log("Area of circle is :"+Dis);
