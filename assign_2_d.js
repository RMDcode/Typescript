function ChcArmstrongs(no) {
    var sum = 0;
    //let sum:number=0;
    //let remainder:number=0
    var temp = no;
    console.log("temp:" + temp);
    console.log("sum:" + sum);
    console.log("no:" + no);
    while (temp > 0) {
        var remainder = temp % 10;
        sum += remainder * remainder * remainder;
        temp = (temp / 10);
    }
    console.log("temp:" + temp);
    console.log("sum:" + sum);
    console.log("no:" + no);
    if (no == sum) {
        console.log("It is an Armstrong number");
    }
    else {
        console.log("It is not an Armstrong number");
    }
}
ChcArmstrongs(153);
