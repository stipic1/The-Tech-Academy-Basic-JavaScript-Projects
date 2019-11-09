// Ternary Operators
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";
}

function voteFunction() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote!";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + ".";
}

function Person(firstName, lastName, age, gender) {
    this.Person_firstName = firstName;
    this.Person_lastName = lastName;
    this.Person_age = age;
    this.Person_gender = gender;
}
var Beth = new Person("Beth", "Vikers", 56, "female");
var David = new Person("David", "Williams", 45, "male");
var Jessica = new Person("Jessica", "Pimento", 22, "female");
function anotherFunction() {
    document.getElementById("new_and_this").innerHTML = Jessica.Person_firstName + " " + Jessica.Person_lastName + " is a " + Jessica.Person_gender + " who is " + Jessica.Person_age + " years old.";
}

function reservedWordFunction() {
    var hello = "hello";
    document.getElementById("reservedWord").innerHTML = hello;
}

//write an object constructor function
function Student(first, last, gpa) {
    this.firstName = first;
    this.lastName = last;
    this.gpa = gpa;
  }
  
function nestedFunction () {
    document.getElementById("Nested_Function").innerHTML = mathFunction();
    function mathFunction() {
        var x = 3 * 12;
        return x;
    }
}