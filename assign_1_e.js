function Fibonacci(No) {
    var i = 0;
    var n = 1;
    console.log(n);
    var n1;
    for (var i_1 = 1; i_1 <= No; i_1++) {
        console.log(i_1);
        n1 = i_1 + n;
        i_1 = n;
        n = n1;
    }
}
var A = 21;
Fibonacci(A);
