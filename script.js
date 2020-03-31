const gridContainer = document.querySelector('#grid-container');
let gridSize = 16;

function createGrid(){
    document.getElementById('grid-container').style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    document.getElementById('grid-container').style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for(let i=0; i<gridSize*gridSize; i++){
        const grid = document.createElement('div');
        grid.setAttribute('id', 'grid-square');
        grid.style.outline = '0.5px solid black';
        gridContainer.appendChild(grid);
    }

}

createGrid();