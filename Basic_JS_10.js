function call_Loop() {
    var num = "";
    var i = 1;
    while (i < 16) {
        num += "<br>" + i;
        i++;
    }
    document.getElementById("Loop").innerHTML = num;
}

function my_Function1() {
    var str = "Farewell my friend!";
    var x = str.length;
    document.getElementById("my_Id1").innerHTML = x;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Paint_Color = [];
    Paint_Color[0] = "baby blue";
    Paint_Color[1] = "maroon";
    Paint_Color[2] = "navy";
    Paint_Color[3] = "beige";
    document.getElementById("Array").innerHTML = "You've picked the paint color " + Paint_Color[3] + ".";
}

function constant_Function() {
    const Car = {
        make:"Jeep",
        model:"Wrangler",
        engine:"V6",
        color:"black"
    }
    Car.color = "navy blue";
    Car.year = "2016";
    document.getElementById("Constant").innerHTML = "The car for sale is a " + Car.color + " " + Car.year + " " + Car.make + " " + Car.model + " with a " + Car.engine + " engine.";
}

function let_Function() {
    let num = 27;
    document.getElementById("let").innerHTML = "<br>" + num;
}

function return_Function() {
    return "This was done by using \"return\".";
}
document.getElementById("return").innerHTML = return_Function()

function object_Function() {
    let car = {
        make: "Acura",
        model: "MDX",
        engine: "V6",
        color: "pearl",
        year: "2007",
        description: function() {
            return "The is a " + this.year + " " + this.color + " " +  this.make + " " + this.model;
        }
    }
    document.getElementById("object").innerHTML = car.description();
}

function break_Function() {
    var str = "";
    var i;
    for (i = 1; i < 11; i++) {
        if (i === 4) { break; }
        str += "The number is " + i + "<br>";
    }
    document.getElementById("break").innerHTML = str;
}

function continue_Function() {
    var str = "";
    var i;
    for (i = 1; i < 11; i++) {
        if (i === 4) { continue; }
        str += "The number is " + i + "<br>";
    }
    document.getElementById("continue").innerHTML = str;
}