// for heading
function headingColorChange () {
    var firstString = "Website Heading";
    var result = firstString.fontcolor("blue");
    document.getElementById("text_change_heading").innerHTML = result; 
}

function headingSizeChange () {
    var secondString = "Website Heading";
    var result = secondString.fontsize(10);
    document.getElementById("text_change_heading").innerHTML = result; 
}

// for the paragraph changes
function pChange () {
    var thirdString = "WOW, Like magic ";
        thirdString += "it appears in bold and red!";
    var result = thirdString.fontsize(10).fontcolor("red").bold();
    document.getElementById("text_change_p").innerHTML = result; 
}

