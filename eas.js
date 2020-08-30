let gridParent = document.querySelector("#grid-container");
let gridChild = gridParent.children;
let resetButton = document.querySelector("#reset-button");

resetButton.addEventListener("click", function() {
    
});

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
                newChild.addEventListener("mouseover", function() {
                    newChild.style.setProperty("background", "yellow");
                    });
                gridParent.appendChild(newChild);
            }

            else {
                let newChild = gridChild[0].cloneNode();
                newChild.style.setProperty("grid-column-start", j);
                newChild.style.setProperty("grid-column-end", j);
                newChild.style.setProperty("grid-row-start", i);
                newChild.style.setProperty("grid-row-end", i);
                newChild.addEventListener("mouseover", function() {
                    newChild.style.setProperty("background", "yellow");
                    });
                gridParent.appendChild(newChild);
                gridParent.removeChild(gridParent.firstElementChild);
            }
        }
    }
    
    console.log(expectedGridSize);
    console.log(gridParent.childElementCount);
};

populateGrid();