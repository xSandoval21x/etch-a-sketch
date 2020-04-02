const gridContainer = document.querySelector('#grid-container');
let gridSize = 16;
let colorChoice = 'rainbow';
let visibleGrid = true;
let opaque = false;

function createGrid(){
    document.getElementById('grid-container').style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    document.getElementById('grid-container').style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for(let i=0; i<gridSize*gridSize; i++){
        const grid = document.createElement('div');
        grid.setAttribute('id', 'grid-square');
        grid.style.borderLeft = '1px solid black';
        grid.style.borderBottom = '1px solid black';
        grid.style.background = 'rgba(256, 256, 256, 0.1)';
        gridContainer.appendChild(grid);
        grid.addEventListener('mouseover', changeColor);
    }

}

createGrid();


function changeColor(e){
    let background = this.style.background;
    let alpha = background.substr(-4, 3);

    let r = 0;
    let g = 0;
    let b = 0;

    switch(colorChoice){
        case 'rainbow':
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);
            break;       
        case 'black':
            r = 0;
            g = 0;
            b = 0;
            break;       
        case 'red':
            r = 245;
            g = 0;
            b = 0;
            break; 
        case 'orange':
            r = 255;
            g = 145;
            b = 0;
            break;
        case 'yellow':
            r = 255;
            g = 240;
            b = 0;
            break;
        case 'green':
            r = 102;
            g = 204;
            b = 0;
            break;
        case 'blue':
            r = 0;
            g = 0;
            b = 240;
            break;
        case 'purple':
            r = 153;
            g = 55;
            b = 251;
            break;
    }

    if(alpha < '1.0' && opaque == false){
        let incrementAlpha = (parseFloat(alpha) + 0.1).toFixed(1);
        this.style.background = `rgba(${r}, ${g}, ${b}, ${incrementAlpha})`;
    }else {this.style.background = `rgb(${r}, ${g}, ${b})`;}
}

const opaqueButton = document.getElementById('opaque');
opaqueButton.addEventListener('click', changeOpaque)

function changeOpaque(){
    opaque = !opaque;

    if(opaqueButton.style.opacity == 1){
        opaqueButton.style.opacity = '0.5'
    }else{opaqueButton.style.opacity = '1';}
}

const blackButton = document.getElementById('black');
blackButton.addEventListener('click', function(){colorChoice = 'black'});

const rainbowButton = document.getElementById('rainbow');
rainbowButton.addEventListener('click', function(){colorChoice = 'rainbow'});

document.getElementById('red').addEventListener('click', function(){colorChoice = 'red'});
document.getElementById('orange').addEventListener('click', function(){colorChoice = 'orange'});
document.getElementById('yellow').addEventListener('click', function(){colorChoice = 'yellow'});
document.getElementById('green').addEventListener('click', function(){colorChoice = 'green'});
document.getElementById('blue').addEventListener('click', function(){colorChoice = 'blue'});
document.getElementById('purple').addEventListener('click', function(){colorChoice = 'purple'});

const hideGridButton = document.getElementById('hide-grid');
hideGridButton.addEventListener('click', hideGrid);

function hideGrid(){
    const gridSquares = document.querySelectorAll('div[id=grid-square]');
    if(visibleGrid){
        gridSquares.forEach(div => {div.style.borderLeft = ''; div.style.borderBottom = ''});
        hideGridButton.textContent = 'Show Grid';
        visibleGrid = false;
    }else{
        gridSquares.forEach(div => {div.style.borderLeft = '1px solid black';
                                    div.style.borderBottom = '1px solid black'});
        hideGridButton.textContent = 'Hide Grid';
        visibleGrid = true;
    }
}

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetGrid);

function resetGrid(){
    const gridSquares = document.querySelectorAll('div[id=grid-square]');
    gridSquares.forEach(div => gridContainer.removeChild(div));
    gridSize = prompt('Enter grid size', '16');
    createGrid();
    hideGridButton.textContent = 'Hide Grid';
}

