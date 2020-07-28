function my_Dictionary() {
    var Car = {
        Brand : "Mercedes",
        Color : "Black",
        Type : "S-Class",
        Gear : 5,
    };
    delete Car.Gear;
    document.getElementById("Dictionary").innerHTML = Car.Gear;
}