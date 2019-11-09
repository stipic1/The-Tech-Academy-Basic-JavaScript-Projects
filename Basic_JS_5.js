function nanFunction() {
    document.getElementById("nan").innerHTML = 0 / 0;
    //alternate way to do this for future reference...
    /* 
    var NotNumber = 0 / 0;
    document.getElementById("ID").innerHTML = NotNumber;
    */
}

function stringFunction() {
    document.getElementById("string").innerHTML = isNaN("hello");
}

function numberFunction() {
    document.getElementById("number").innerHTML = isNaN(888);
}

function posInfinityFunction() {
    document.getElementById("positiveInfinity").innerHTML = 5E500;
}

function negInfinityFunction() {
    document.getElementById("negativeInfinity").innerHTML = -5E500;
}

function trueBooleanFunction() {
    document.getElementById("booleanTrue").innerHTML = 12 > 5;
}

function falseBooleanFunction() {
    document.getElementById("booleanFalse").innerHTML = 12 < 5;
}


console.log(3 * 3);

// Another option below if I want to use a function with variable...

/* 
function funFun() {
    var x = 3 * 3;
    console.log(x);
}

funFun();
*/

function typeCoercionFunction() {
    document.getElementById("typeCoercion").innerHTML = "12" + 5;
}

console.log(20 > 30);

function trueDoubleEqualFunction() {
    document.getElementById("doubleEqualTrue").innerHTML = 5 == 5;
}

function falseDoubleEqualFunction() {
    document.getElementById("doubleEqualFalse").innerHTML = 5 == 4;
}

function trueTripleFunction() {
    a = 25;
    b = 25;
    document.getElementById("tripleTrue").innerHTML = a === b;
}

function falseTripleFunction1() {
    a = 25;
    b = "cat";
    document.getElementById("tripleFalse1").innerHTML = a === b;
}

function falseTripleFunction2() {
    a = 25;
    b = "25";
    document.getElementById("tripleFalse2").innerHTML = a === b;
}

function falseTripleFunction3() {
    a = 25;
    b = 50;
    document.getElementById("tripleFalse3").innerHTML = a === b;
}

function andTrueFunction() {
    document.getElementById("andTrue").innerHTML = 5 > 2 && 3 < 8;
}

function andFalseFunction() {
    document.getElementById("andFalse").innerHTML = 5 > 2 && 3 > 8;
}

function orTrueFunction() {
    document.getElementById("orTrue").innerHTML = 5 > 2 || 3 > 8;
}

function orFalseFunction() {
    document.getElementById("orFalse").innerHTML = 5 < 2 || 3 > 8;
}

function notOperatorTrueFunction() {
    document.getElementById("notOperatorTrue").innerHTML = !(50 > 100);
}

function notOperatorFalseFunction() {
    document.getElementById("notOperatorFalse").innerHTML = !(100 > 50);
}