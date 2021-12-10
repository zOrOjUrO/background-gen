var content = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randBtn = document.getElementById("random");
const genRanHex = 
    size => [...Array(size)].map(
        () => Math.floor(Math.random() * 16).toString(16))
        .join('');

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";

    content.textContent = body.style.background + ";" ;
}



function genColorsAndSetbg() {
    color1.value = '#'+genRanHex(6) ;
    color2.value = '#'+genRanHex(6) ;
    setGradient();
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randBtn.addEventListener("click", genColorsAndSetbg);
