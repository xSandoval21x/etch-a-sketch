const gridContainer = document.querySelector('#grid-container');
let gridSize = 16;

function createGrid(){
    document.getElementById('grid-container').style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    document.getElementById('grid-container').style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for(let i=0; i<gridSize*gridSize; i++){
        const grid = document.createElement('div');
        grid.setAttribute('id', 'grid-square');
        grid.style.outline = '0.5px solid black';
        grid.style.background = 'rgba(256, 256, 256, 0.1)';
        gridContainer.appendChild(grid);
    }

}

createGrid();

const gridSquares = document.querySelectorAll('div[id=grid-square]');
gridSquares.forEach(div => div.addEventListener('mouseover', changeColor));

function changeColor(e){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    let background = this.style.background;
    let alpha = background.substr(-4, 3);

    if(alpha < '1.0'){
        let incrementAlpha = (parseFloat(alpha) + 0.1).toFixed(1);
        this.style.background = `rgba(${r}, ${g}, ${b}, ${incrementAlpha})`;
        console.log(background);
    }
}

