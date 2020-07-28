function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Isaac = new Vehicle("Mercedes", "S-Class", 2020, "Black");
var Nnonye = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
function myFunction() {
    document.getElementById("New_and_This").innerHTML = "Issac drives a " + Isaac.Vehicle_Color + "-colored" + Isaac.Vehicle_Model + "manufactured in" + Isaac.Vehicle_Year;
}