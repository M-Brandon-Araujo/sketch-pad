const canvas = document.querySelector('.canvas');
const canvasChildren = canvas.childNodes;
const btn = document.querySelectorAll('.button');
const colorPicker = document.getElementById('colorPicker');
let gridSize = 50;
let currentColor = 'black';

//buttons
btn.forEach(buttonEvent, this);

function buttonEvent(element) {
    element.addEventListener('click', function(e) {
        let newText = element.textContent.toLowerCase();
        switch (newText) {
            case 'eraser':
                eraserFunction();
                break;
            case 'rainbow': 
                rainbowFunction();
                break;
            case 'large':
                clearGrid()
                createGrid(100);
                break;
            case 'medium':
                clearGrid();
                createGrid(50);
                break;
            case 'small':
                clearGrid();
                createGrid(20);
                break;
        }
    })
}

//change color
colorPicker.addEventListener('input', (e) => {
    let newColor = colorPicker.value;
    currentColor = newColor;
    canvasChildren.forEach((element) => {
        element.addEventListener('mouseover', function(e) {
            element.style.backgroundColor = `${newColor}`;
        })
    })
})

//rainbow
function rainbowFunction() {
    canvasChildren.forEach((element) => {
        element.addEventListener('mouseover', function(e) {
            element.style.backgroundColor = `rgb(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`;
        })
    })
}

//random rgb values
function randomRgb() {
    min = Math.ceil(0);
    max = Math.floor(255);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomRgb());

//eraser
function eraserFunction() {
    canvasChildren.forEach((element) => {
        element.addEventListener('mouseover', function(e) {
            element.style.backgroundColor = 'white';
        })
    })
}

//clear grid
function clearGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    }
}

createGrid(gridSize);

//grid creation
function createGrid(gridSize) {
    let gridSizeSquared = gridSize * gridSize;
    for (let i = 1; i <= gridSizeSquared; i++) {
        const cell = document.createElement('div');
        canvas.appendChild(cell);
        cell.classList.add('cell');
        cell.style.cssText = `height: ${600 / gridSize}px; width: ${600 / gridSize}px;`;
    }
    const theCells =document.querySelectorAll('.cell');
    theCells.forEach(element => mouseOverFunction(element));
}

//initialize pen color
function mouseOverFunction(element) {
    element.addEventListener('mouseover', function(e) {
            element.style.backgroundColor = currentColor;
    })
}