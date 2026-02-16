const greenRange = document.getElementById("greenRange");
const redRange = document.getElementById("redRange");

const greenStripe = document.getElementById("greenStripe");
const redStripe = document.getElementById("redStripe");

const greenHex = document.getElementById("greenHex");
const redHex = document.getElementById("redHex");

function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

greenRange.addEventListener("input", function() {
    let value = parseInt(greenRange.value);
    let color = `rgb(0, ${value}, 0)`;
    greenStripe.style.backgroundColor = color;

    let hexColor = rgbToHex(0, value, 0);
    greenHex.textContent = hexColor.toUpperCase();
});

redRange.addEventListener("input", function() {
    let value = parseInt(redRange.value);
    let color = `rgb(${value}, 0, 0)`;
    redStripe.style.backgroundColor = color;

    let hexColor = rgbToHex(value, 0, 0);
    redHex.textContent = hexColor.toUpperCase();
});
