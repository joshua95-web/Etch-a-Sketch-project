// const cells = window.getElementsByClassName("gridContainer");

function hoverColour() {
    document.body.style.backgroundColor = 'black';
}

function colourReturn() {
    cells.setAttribute("style", "background-color:white;")
}


cells.addEventListener("onmouseover", hoverColour());
cells.addEventListener("onmouseleave", colourReturn());
