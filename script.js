const cells = document.getElementsByClassName("grid-item");

cells.addEventListener("onmouseover", hoverColour);
cells.addEventListener("onmouseleave", colourReturn);


function hoverColour() {
    cells.setAttribute("style", "background-color:black;")
}

function colourReturn() {
    cells.setAttribute("style", "background-color:white;")
}
