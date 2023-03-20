function op1() {
    var a = parseFloat(document.getElementById("firstnum").value);
    var b = parseFloat(document.getElementById("secondnum").value);
    document.getElementById("print").innerHTML = "The sum of " + a + " and " + b + " is " + (a+b) + ".";
}
function op2() {
    var a = parseFloat(document.getElementById("firstnum").value);
    var b = parseFloat(document.getElementById("secondnum").value);
    document.getElementById("print").innerHTML = "The difference of " + a + " and " + b + " is " + (a-b) + ".";
}
function op3() {
    var a = parseFloat(document.getElementById("firstnum").value);
    var b = parseFloat(document.getElementById("secondnum").value);
    document.getElementById("print").innerHTML = "The product of " + a + " and " + b + " is " + (a*b) + ".";
}
function op4() {
    var a = parseFloat(document.getElementById("firstnum").value);
    var b = parseFloat(document.getElementById("secondnum").value);
    document.getElementById("print").innerHTML = "The quotient of " + a + " and " + b + " is " + (a/b) + ".";
}
function op5() {
    var a = parseFloat(document.getElementById("firstnum").value);
    var b = parseFloat(document.getElementById("secondnum").value);
    document.getElementById("print").innerHTML = "The remainder of " + a + " and " + b + " is " + (a%b) + ".";
}