function Maximum(Arr) {
    var i;
    var n = 0;
    i = Arr.sort();
    return i[6];
}
var num = [23, 89, 6, 29, 56, 45, 77, 32];
var Ret = 0;
Ret = Maximum(num);
console.log("Display second maximum number is:" + Ret);
