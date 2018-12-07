var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var h3 = document.querySelector("h3");

console.log(css, color1, color2);

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value + ", " 
    + color2.value + ")";

    css.textContent = body.style.background + ";";
    // h3.innerHTML = "Color 1: " + color1.value + "<br>Color 2: " + color2.value;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

