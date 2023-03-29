var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle2 = /** @class */ (function () {
    function Circle2(Data) {
        this.Radius = Data;
        this.PI = 3.14;
    }
    Circle2.prototype.CalculateAreaOfCircle = function () {
        var Ans = 0;
        Ans = this.PI * this.Radius * this.Radius;
        return Ans;
    };
    return Circle2;
}());
var Circle1x = /** @class */ (function (_super) {
    __extends(Circle1x, _super);
    function Circle1x(Data) {
        return _super.call(this, Data) || this;
    }
    Circle1x.prototype.CalculateCircumfaranceOfCircle = function () {
        var Ans = 0;
        Ans = 2 * this.PI * this.Radius;
        return Ans;
    };
    return Circle1x;
}(Circle2));
var object3 = new Circle1x(9);
var Dis = 0;
Dis = object3.CalculateAreaOfCircle();
console.log("Area of circle is :" + Dis);
Dis = object3.CalculateCircumfaranceOfCircle();
console.log("Circumfarance of circle:" + Dis);
