var Circle1 = /** @class */ (function () {
    function Circle1(Data) {
        this.Radius = Data;
        this.PI = 3.14;
    }
    Circle1.prototype.CalculateAreaOfCircle = function () {
        var Ans = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    };
    return Circle1;
}());
var object = new Circle1(9);
var Dis = 0;
Dis = object.CalculateAreaOfCircle();
console.log("Area of circle is :" + Dis);
