const canvas = document.querySelector('.canvas');
const canvasChildren = canvas.childNodes;
const btn = document.querySelectorAll('.button');
const colorPicker = document.getElementById('colorPicker');
const eraserBtn = document.querySelector('.eraser-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');
const largeBtn = document.querySelector('.large-canvas');
const mediumBtn = document.querySelector('.medium-canvas');
const smallBtn = document.querySelector('.small-canvas');
let gridSize = 50;
let currentColor = 'black';

//buttons
btn.forEach(buttonEvent, this);

function buttonEvent(element) {
    element.addEventListener('click', function(e) {
        let newText = element.textContent.toLowerCase();
        switch (newText) {
            case 'eraser':
                eraserAnimation();
                eraserFunction();
                break;
            case 'rainbow': 
                rainbowAnimation();
                rainbowFunction();
                break;
            case 'large':
                largeAnimation();
                clearGrid()
                createGrid(100);
                break;
            case 'medium':
                mediumAnimation();
                clearGrid();
                createGrid(50);
                break;
            case 'small':
                smallAnimation();
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

function rainbowAnimation() {
    if (rainbowBtn.classList.contains('clicked')) {
        rainbowBtn.classList.toggle('clicked');
    }
    rainbowBtn.classList.toggle('clicked');
}

function eraserAnimation() {
    if (eraserBtn.classList.contains('clicked')) {
        eraserBtn.classList.toggle('clicked');
    }
    eraserBtn.classList.toggle('clicked');
}

function largeAnimation() {
    if (largeBtn.classList.contains('clicked')) {
        largeBtn.classList.toggle('clicked');
    }
    largeBtn.classList.toggle('clicked');
}

function mediumAnimation() {
    if (mediumBtn.classList.contains('clicked')) {
        mediumBtn.classList.toggle('clicked');
    }
    mediumBtn.classList.toggle('clicked');
}

function smallAnimation() {
    if (smallBtn.classList.contains('clicked')) {
        smallBtn.classList.toggle('clicked');
    }
    smallBtn.classList.toggle('clicked');
}