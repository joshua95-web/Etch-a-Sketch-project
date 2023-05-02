const grid = document.createElement("div");

function makeRows(rows, cols) {
    grid.style.setProperty("grid-rows", rows);
    grid.style.setProperty("grid-cols", cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        grid.appendChild(cell).className = "grid-item"
    };
};

makeRows(16,16);

grid.style.borderColor = "solid red";