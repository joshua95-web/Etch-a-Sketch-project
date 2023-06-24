const gridContainer = document.createElement("div");

function makeRows(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
        for (c = 0; c < (rows * cols); c++) {
            let cell = document.createElement("div");
            gridContainer.appendChild(cell).className = "grid-item";        
        };
};

makeRows(16, 16);

grid.style.borderColor = "solid red";