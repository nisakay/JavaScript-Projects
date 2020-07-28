function My_First_Function() {
    var str = "This Text is Blue!";
    var result = str.fontcolor("blue");
    document.getElementById("Blue_Text") .innerHTML = result;
    var sentence = "I Love Coding";
    sentence += "I Enjoy it!";
    document.getElementById("Concatenate").innerHTML = sentence;
}