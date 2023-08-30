const tiles = document.querySelectorAll('.grid-item')

function hoverColour() {
    document.body.style.backgroundColor = 'black';
}

function colourReturn() {
    cells.setAttribute("style", "background-color:white;")
}


cells.addEventListener("onmouseover", hoverColour());
cells.addEventListener("onmouseleave", colourReturn());
