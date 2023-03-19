function DisplayFactor(No) {
    //let sum : number = 0;
    var i = 0;
    for (i = 1; i < No; i++) {
        if (No % i == 0) {
            console.log(i);
        }
    }
}
var A = 20;
DisplayFactor(A);
