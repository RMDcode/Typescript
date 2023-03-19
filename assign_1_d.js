"use strict";
exports.__esModule = true;
function ChkPrime(No) {
    //let sum : number = 0;
    var i = 0;
    var p = 0;
    if (No == 0 || No == 1) {
        p = 1;
    }
    for (i = 2; i <= No / 2; ++i) {
        if (No % i == 0) {
            p = 1;
            break;
        }
    }
    if (p == 0) {
        console.log("This number is prime" + No);
    }
    else {
        console.log("This number is not prime" + No);
    }
}
var promptSync = require("prompt-sync");
var prompt = promptSync();
var A = prompt('Enter the your number:');
//A=Number.parseInt(A);
ChkPrime(A);
