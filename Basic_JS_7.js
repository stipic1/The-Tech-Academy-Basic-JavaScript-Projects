function function1() {
    var x = 50;
    document.getElementById("demo1").innerHTML = x + 50;
}
// Since var x is in function1() it only has local scope
// and cant be used globally in function2()
function function2() {
    console.log(x - 25);
}

function getDate() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "Good afternoon!";
    }
}

function getAnotherDate() {
    if (new Date().getHours() < 12) {
        document.getElementById("AM").innerHTML = "Good Morning!";
    }
}

//my own if statement
function ifFunction() {
    if (3 == "3") {
        document.getElementById("check").innerHTML = "3 == \"3\" is true";
    }
}

// my own if with else statement
function purchaseAlcoholFunction(){
    var Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Purchase = "You are old enough to purchase alcohol.";
    }
    else {
        Purchase = "You are not old enough to purchase alcohol";
    }
    document.getElementById("maybePurchase").innerHTML = Purchase;
}


function timeFunction() {
    var time = new Date().getHours();
    var answer;
    if (time < 12 && time > 0) {
        answer = "It is morning time!";
    }
    else if (time > 12 && time < 18) {
        answer = "It is the afternoon!";
    }
    else {
        answer = "It is evening time!";
    }
    document.getElementById("timeOfDay").innerHTML = answer;
}
