let gridParent = document.querySelector("#grid-container");
let gridChild = gridParent.children;

let populateGrid = () => {
    let gridColumnNumber = 16;
    let gridRowNumber = 16;
    let expectedGridSize = gridColumnNumber * gridRowNumber;

    gridParent.style.setProperty("grid-template-columns", "repeat(" + 
    gridColumnNumber + ", auto)");
    gridParent.style.setProperty("grid-template-rows", "repeat(" + 
    gridRowNumber + ", auto)");

    for (i = 1; i <= gridRowNumber; i++) {
        for (j = 1; j <= gridColumnNumber; j++) {
            if (i !== 1 || j !== 1) {
                let newChild = gridChild[0].cloneNode();
                newChild.style.setProperty("grid-column-start", j);
                newChild.style.setProperty("grid-column-end", j);
                newChild.style.setProperty("grid-row-start", i);
                newChild.style.setProperty("grid-row-end", i);
                gridParent.appendChild(newChild);
            }
        }
    }

    gridChild = gridParent.classList;

    for (i = 0; i < gridChild.length; i++) {
        gridChild[i].addEventListener("mouseover", function() {
            gridChild[i].style.setProperty("background", "yellow");
            console.log(gridChild[i]);
            console.log(gridChild.length);
        }, false);
    }

    
    console.log(expectedGridSize);
    console.log(gridParent.childElementCount);
};

populateGrid();