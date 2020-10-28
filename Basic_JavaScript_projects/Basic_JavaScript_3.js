// will return the result of 2 + 2
function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 =" +addition;
}
// will return the result of 5 - 2
function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("Math_2").innerHTML = "5 - 2 =" +Subtraction;
}

// will return the result of 6 * 8
function multiplication_Function() {
    var simple_Math = 6 * 8;
    document.getElementById("Math_3").innerHTML = "6 * 8 =" +simple_Math;
}

// will return the result of 48 / 6
function division_Function() {
    var simple_Math = 48 / 6;
    document.getElementById("Math_4").innerHTML = "48 / 6 =" +simple_Math;
}

// will return the result of 20 % 5
function modulus_Operator() {
    var simple_Math = 20 % 5;
    document.getElementById("Math_5").innerHTML = "When you divide 20 by 5 you have a remainder of:" + simple_Math;
    var X = 5;
    X--;
    document.write(X)
    window.alert(Math.random() * 100);
}

function increment_Operator() {
    var simple_Math = 10 % 5;
    document.getElementById("Math_5").innerHTML = "When you divide 10 by 5 you have a remainder of:" + simple_Math;
    var X = 5;
    X++;
    document.write(X)
    window.alert(Math.random() * 100);
}