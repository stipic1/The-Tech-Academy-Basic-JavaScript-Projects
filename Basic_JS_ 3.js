function additionFunction() {
    var addition = 36 + 12;
    document.getElementById("MathAddition").innerHTML = "36 + 12 = " + addition;
}

function subtractionFunction() {
    var subtraction = 36 - 12;
    document.getElementById("MathSubtraction").innerHTML = "36 - 12 = " + subtraction;
}

function multiplicationFunction() {
    var multiplication = 36 * 12;
    document.getElementById("MathMultiplication").innerHTML = "36 * 12 = " + multiplication;
}

function divisionFunction() {
    var division = 36 / 12;
    document.getElementById("MathDivision").innerHTML = "36 / 12 = " + division;
}

function allFunction() {
    var all = 36 + 12 * 12 / 12;
    document.getElementById("MathAll").innerHTML = "36 + 12 * 12 / 12 = " + all;
}

function modulusFunction() {
    var modulus = 36 % 11;
    document.getElementById("MathModulus").innerHTML = "36 % 11 = " + modulus + " (further explanation: 33 with a remainder of 3)";
}

function negationUnaryFunction() {
    var unary = 36;
    document.getElementById("MathUnary").innerHTML = -unary;
}

function incrementFunction() {
    var increment = 36;
    increment++;
    document.getElementById("MathIncrement").innerHTML = "36 + 1 = " + increment;
}

function decrementFunction() {
    var decrement = 36;
    decrement--;
    document.getElementById("MathDecrement").innerHTML = "36 - 1 = " + decrement;
}

function randomNumberFunction() {
    var randomNumber = Math.round(Math.random() * 100);
    document.getElementById("MathRandomNumber").innerHTML = randomNumber;
}

/* another shorter way to get a random number...

window.alert(Math.random() * 100);
or
console.log

*/