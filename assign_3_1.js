var Arithematic1 = /** @class */ (function () {
    function Arithematic1(A, B) {
        this.N1 = A;
        this.N2 = B;
    }
    Arithematic1.prototype.Addition = function () {
        return this.N1 + this.N2;
    };
    Arithematic1.prototype.Subtraction = function () {
        return this.N1 - this.N2;
    };
    Arithematic1.prototype.Multiplication = function () {
        return this.N1 * this.N2;
    };
    Arithematic1.prototype.Division = function () {
        return this.N1 / this.N2;
    };
    return Arithematic1;
}());
var object1 = new Arithematic1(100, 10);
var object2 = new Arithematic1(21, 15);
var Dis = 0;
//First object
Dis = object1.Addition();
console.log("Addition of Object1:\n" + Dis);
Dis = object1.Subtraction();
console.log("Subtraction of Object1:\n" + Dis);
Dis = object1.Multiplication();
console.log("Mulitiplication of Object1:\n" + Dis);
Dis = object1.Division();
console.log("Division of Object1:\n" + Dis);
//Second object
Dis = object2.Addition();
console.log("Addition of Object2:\n" + Dis);
Dis = object2.Subtraction();
console.log("Subtraction of Object2:\n" + Dis);
Dis = object2.Multiplication();
console.log("Mulitiplication of Object2:\n" + Dis);
Dis = object2.Division();
console.log("Division of Object2:\n" + Dis);
