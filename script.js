const grid = document.createElement("div");

function makeRows(rows, cols) {
    grid.style.setProperty("grid-rows", rows);
    grid.style.setProperty("grid-cols", cols);
}