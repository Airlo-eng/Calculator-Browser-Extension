document.getElementById("submit").addEventListener("click", calculate);
document.getElementById("7b").addEventListener("click", () => (addText(7)));
document.getElementById("8b").addEventListener("click", () => (addText(8)));
document.getElementById("9b").addEventListener("click", () => (addText(9)));
document.getElementById("4b").addEventListener("click", () => (addText(4)));
document.getElementById("5b").addEventListener("click", () => (addText(5)));
document.getElementById("6b").addEventListener("click", () => (addText(6)));
document.getElementById("1b").addEventListener("click", () => (addText(1)));
document.getElementById("2b").addEventListener("click", () => (addText(2)));
document.getElementById("3b").addEventListener("click", () => (addText(3)));
document.getElementById("0b").addEventListener("click", () => (addText(0)));
document.getElementById("+b").addEventListener("click", () => (addText("+")));
document.getElementById("/b").addEventListener("click", () => (addText("/")));
document.getElementById("-b").addEventListener("click", () => (addText("-")));
document.getElementById("*b").addEventListener("click", () => (addText("*")));

function calculate(){
    var input = document.getElementById("textField").value;
    const value = eval(input);
    if (value == null) {
        document.getElementById("textField").value = "NaN"
    }
    else {
        document.getElementById("textField").value = value;
    }
}

function addText(clickedButton){
    if (document.getElementById("textField").value == "NaN") {
        document.getElementById("textField").value = clickedButton;
    }
    else {
        document.getElementById("textField").value += clickedButton;
    }
}