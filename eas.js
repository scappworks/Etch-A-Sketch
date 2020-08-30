let gridParent = document.querySelector("#grid-container");
let gridChild = gridParent.children;
let resetButton = document.querySelector("#reset-button");
let firstRun = true;
let timesTouchedNumberArray = [];
let timesTouchedNodeArray = [];

resetButton.addEventListener("click", function() {
    let tempColumn = prompt("Enter a number of columns");
    let tempRow = prompt("Enter a number of rows");

    populateGrid(parseInt(tempColumn), parseInt(tempRow), true);
});

let populateGrid = (col = -1, row = -1, started = false) => {
    let gridColumnNumber;
    let gridRowNumber;

    if (!(started))
    {
        gridColumnNumber = 16;
        gridRowNumber = 16;
        started = true;
    }
    
    else if (started) {
        gridColumnNumber = col;
        gridRowNumber = row;
        
        if (gridColumnNumber < 1 || gridRowNumber < 1) {
            do {
                let newColumnNumber =
                 prompt("Please choose a number of columns greater than 0");
                let newRowNumber =
                 prompt("Please choose a number of rows greater than 0");

                 gridColumnNumber = newColumnNumber;
                 gridRowNumber = newRowNumber;
            } while (gridColumnNumber < 1 || gridRowNumber < 1);
        }
    }

    gridParent.style.setProperty("grid-template-columns", "repeat(" + 
    gridColumnNumber + ", auto)");
    gridParent.style.setProperty("grid-template-rows", "repeat(" + 
    gridRowNumber + ", auto)");

    if (gridParent.children.length > 1) {
        for (i = gridParent.children.length; i > 1; i--) {
            gridParent.removeChild(gridParent.lastChild);
        }
    }

    gridParent.children[0].style.setProperty("background", "none");

    for (i = 1; i <= gridRowNumber; i++) {
        for (j = 1; j <= gridColumnNumber; j++) {
            let newChild = gridChild[0].cloneNode();
            newChild.style.setProperty("grid-column-start", j);
            newChild.style.setProperty("grid-column-end", j);
            newChild.style.setProperty("grid-row-start", i);
            newChild.style.setProperty("grid-row-end", i);
            newChild.style.setProperty("counter", "0");
            newChild.addEventListener("mouseover", function() {
                newChild.style.getPropertyValue("counter");
                let color = getRandomColor();
                newChild.style.setProperty("background", color);

                if (timesTouchedNumberArray.length > 0) {
                    for (x = timesTouchedNumberArray.length; x > 0; x--) {
                        if (timesTouchedNodeArray[x] === 
                            gridParent.children[x]) {
                            setTimesTouched(0, x, true);
                        }
                    }
                }
                });

            if (i !== 1 || j !== 1) {
                gridParent.appendChild(newChild);
            }

            else {
                gridParent.appendChild(newChild);
                gridParent.removeChild(gridParent.firstElementChild);
                
                for (y = timesTouchedNumberArray.length; y > 0; y--) {
                    timesTouchedNumberArray.pop();
                }
            }

            if (i === gridRowNumber && j === gridColumnNumber) {
                setTimesTouched(gridParent.children.length, 0, false);
            }
        }
    }
};

function setTimesTouched(NumberOfChildren = 0, indexOfChild = 0, 
    started = false) {
        if (!(started)) {
            for (i = 0; i < NumberOfChildren; i++)
            {
                timesTouchedNumberArray[i] = 0;
            }

            timesTouchedNodeArray = gridParent.children;
            console.log("Arr " + timesTouchedNumberArray);
        }

    else {
        timesTouchedNumberArray[indexOfChild]++;
        console.log("index " + indexOfChild);
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

if (firstRun)
{
    firstRun = false;
    populateGrid();
}