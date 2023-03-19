function Summation(Arr) {
    var sum = 0;
    var cnt = 0;
    for (cnt = 0; cnt < week.length; cnt++) {
        sum = sum + week[cnt];
    }
    return sum;
}
var week = [23, 6, 7, 4, 5, 7];
var Ret = 0;
Ret = Summation(week);
console.log("Display addition is :" + Ret);
