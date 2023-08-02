const canvas = document.querySelector('.canvas');
createGrid(16);

function createGrid(cellNumber) {
    let cellNumberSquared = cellNumber * cellNumber;
    for (let i = 1; i <= cellNumberSquared; i++) {
        const cell = document.createElement('div');
        canvas.appendChild(cell);
        cell.classList.add('cell');
        cell.style.cssText = `height: ${600 / cellNumber}px; width: ${600 / cellNumber}px;`;
    }
}

const theCells =document.querySelectorAll('.cell');

theCells.forEach(element => mouseOverFunction(element));

function mouseOverFunction(element) {
    element.addEventListener('mouseover', function(e) {
        element.classList.add('hovered');
    })
}