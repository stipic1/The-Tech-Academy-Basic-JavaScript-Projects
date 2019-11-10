function fullSentence() {
    var part1 = "Hello there, ";
    var part2 = "I am four  ";
    var part3 = "seperate strings ";
    var part4 = "concatenated together!";
    var wholeSentence = part1.concat(part2, part3, part4);
    document.getElementById("concatenate").innerHTML = wholeSentence;
}

function sliceMethod() {
    var Sentence = "The comback is greater than the setback.";
    var Section = Sentence.slice(15,22);
    document.getElementById("Slice").innerHTML = Section;
}

function upperCaseMethod() {
    var str = "I love a good pizza!";
    var newstr = str.toUpperCase();
    document.getElementById("upperCase").innerHTML = newstr;
}

function searchMethod() {
    var str = "Portland, Oregon is a city in the United States with an urban growth boundary to control sprawl.";
    var pos = str.search("United States");
    document.getElementById("search").innerHTML = pos;
}

function numberMethod() {
    var x = 67;
    document.getElementById("number2string").innerHTML = x.toString();
}

function precisionMethod() {
    var num = 445.1825982;
    document.getElementById("precision-number").innerHTML = num.toPrecision(7);
}

function fixedMethod() {
    var num = 445.1825982;
    var new_num = num.toFixed(2);
    document.getElementById("fixed-number").innerHTML = new_num;
}

function valueMethod() {
    var str = "Welcome to my page.";
    var valueStr = str.valueOf();
    document.getElementById("value-str").innerHTML = valueStr;
}