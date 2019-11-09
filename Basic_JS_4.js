function myPerson() {
    var person = {
        firstName:"John",
        lastName:"Smith",
        gender:"Male",
        age:32,
        birthdate:"02/23/1989"
    };
    delete person.firstName;
    document.getElementById("Dictionary").innerHTML = person.firstName;
}