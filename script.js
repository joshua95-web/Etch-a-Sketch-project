const cells = document.getElementsByClassName("grid-item");

item.addEventListener("mouseover", hoverColour, false);
item.addEventListener("mouseout", colourReturn, false);
function hoverColour() {
    item.setAttribute("style", "background-color:black;")
}

function colourReturn() {
    item.setAttribute("style", "background-color:white;")
}
