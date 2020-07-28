function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today ?";
    }
}

var X = 5;
function Add_numbers_1() {
    document.write(10 + X +"<br>");
}
function Add_numbers_2() {
    document.write(X + 50);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
    var X = 10;
    console.log(15 + X)
}
function Add_numbers_2() {
    console.log(X + 50);
}
Add_numbers_1();
Add_numbers_2();

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is afternoon time.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}