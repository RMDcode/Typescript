"use strict";
exports.__esModule = true;
function Area(R) {
    //let sum : number = 0;
    var pi = 3.14;
    var A = 0;
    A = pi * R * R;
    console.log("Area of cricle:" + A);
}
var promptSync = require("prompt-sync");
var prompt = promptSync();
var C = prompt('Enter the your number:');
//var A : number = 20
Area(C);
