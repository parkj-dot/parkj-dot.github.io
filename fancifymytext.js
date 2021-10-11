function cow() {
    document.getElementById("textbox").style.textTransform = "uppercase";
    var tmp = document.getElementById("textbox");
    var seperate = tmp.value.split(".");
    tmp.value = seperate.join("-Moo.");
}
function borify() {
    alert("Kadabra-Abra! Text is normal!");
    document.getElementById("textbox").style.fontWeight = 'normal';
    document.getElementById("textbox").style.textDecoration = "none";
    document.getElementById("textbox").style.color = "black";
}

function fancify() {
    alert("Abra-Kadabra! Text is bold, underlined and blue!");
    document.getElementById("textbox").style.fontWeight = 'bold';
    document.getElementById("textbox").style.textDecoration = "underline";
    document.getElementById("textbox").style.color = "blue";
}

function bigger() {
    document.getElementById("textbox").style.fontSize = "24pt";
}

function greeting() {
    alert("Hello, world!");
}