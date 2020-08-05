function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 =" +addition;
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math_2").innerHTML = "5 - 2 =" +Subtraction;
}

function multiplication_Function() {
    var simple_Math = 6 * 8;
    document.getElementById("Math_3").innerHTML = "6 * 8 =" +simple_Math;
}

function division_Function() {
    var simple_Math = 48 / 6;
    document.getElementById("Math_4").innerHTML = "48 / 6 =" +simple_Math;
}

function modulus_Operator() {
    var simple_Math = 20 % 5;
    document.getElementById("Math_5").innerHTML = "When you divide 20 by 5 you have a remainder of:" + simple_Math;
    var X = 5;
    X--;
    document.write(X)
    window.alert(Math.random() * 100);
}