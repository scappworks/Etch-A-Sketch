let gridParent = document.querySelector("#grid-container");
let gridChild = gridParent.children;

let populateGrid = () => {
    let gridColumnNumber = 16;
    let gridRowNumber = 16;
    let expectedGridSize = gridColumnNumber * gridRowNumber;

    for (i = 1; i <= gridRowNumber; i++) {
        for (j = 1; j <= gridColumnNumber; j++) {
            let newChild = gridChild[0].cloneNode();
            newChild.style.setProperty("grid-column-start", j);
            newChild.style.setProperty("grid-column-end", j);
            newChild.style.setProperty("grid-row-start", i);
            newChild.style.setProperty("grid-row-end", i);
            gridParent.appendChild(newChild);
        }
    }

    console.log(gridParent.childElementCount);
};

console.log(gridParent.length);

populateGrid();