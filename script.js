const btn = document.querySelector('#btn');
const grid = document.querySelector('.grid');


for(let i=0;i<16;i++){
    const row = document.createElement('div');
    row.classList.add('row');
    for(let j=0;j<16;j++){
        const cellSize = 500/16;
        const cell = document.createElement('div');
        cell.style.width = cellSize+'px';
        cell.style.height = cellSize+'px';
        cell.dataset.brightness = 0.1;
        cell.classList.add('cell');
        row.appendChild(cell); 
    }
    grid.appendChild(row);
}
const cells = document.querySelectorAll('.cell');
cells.forEach(cell=>{
    cell.addEventListener('mouseover',handleHover);
});
function handleHover(event){
    const currentBrightness = Math.min((parseFloat(event.target.dataset.brightness))+0.1,1);
    event.target.dataset.brightness = currentBrightness;
    event.target.style.backgroundColor = getColor(currentBrightness);
  }
  function getColor (brightness){
      const r = Math.min(Math.floor(Math.random()*256*brightness),255);
      const g = Math.min(Math.floor(Math.random()*256*brightness),255);
      const b = Math.min(Math.floor(Math.random()*256*brightness),255);
      return `rgb(${r},${g},${b})`;
  }


btn.addEventListener('click',makeGridAndHover);

 function makeGridAndHover(){
    let grid_size = prompt("Enter the size of grid");
    grid.textContent = '';
    grid_size = parseInt(grid_size);
    if(grid_size> 100)
    grid_size = 100;
    for(let i=0;i<(grid_size);i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(let j=0;j<(grid_size);j++){
            const cell = document.createElement('div');
            const cellSize = 500 / (grid_size);
            cell.style.width = cellSize + 'px';
            cell.style.height = cellSize + 'px';
            cell.dataset.brightness = 0.1;
            cell.classList.add('cell');
            row.appendChild(cell); 
        }
        grid.appendChild(row);
    }
const cells = document.querySelectorAll('.cell');
cells.forEach(cell=>{
    cell.addEventListener('mouseover',handleHover);
});


 }
