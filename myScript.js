//Variable
const container = document.getElementById("container");

// Sets number of grid blocks
const gridNumber = x => {
    for (i=0;i<x;i++){
        let tag = document.createElement("div");
        tag.className = "block";
        tag.id = "block" + i
        container.appendChild(tag);
        }

    //Variable for new divs created by grid
    const block = document.getElementsByClassName("block");
    let bock = Array.from(block);
    bock.forEach(el => el.addEventListener('mouseover', e => {
        el.classList.add("blocks");
    }));
}


// Sets number of Columns and Rows and removes previous 
const gridSize = x => {

    container.style.removeProperty('gridTemplateColumns');
    container.style.removeProperty('gridAutoRows');
    
    container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${x}, 1fr)`;
}

// board size based on selection
const setGrid = num => {
    let x = parseInt(num);

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    if(x == 0){
        gridNumber(1*1)
        gridSize(1)
    }else{
        gridNumber(x*x)
        gridSize(x)
    }
  }

    
// Set Number on Slider to show on screen

const size = document.getElementById("size"), 
    sizeNum = document.getElementById("sizeNumber");

size.oninput = () => sizeNum.innerHTML = size.value;
size.onchange = () => setGrid(size.value);

// Set Slider Number on page load to default
window.addEventListener('load', (event) => sizeNum.innerHTML = size.defaultValue);

// reset Board Button Action
let reset = document.getElementById("reset");
reset.onclick = () => {setGrid(document.getElementById('sizeNumber').innerHTML)}


gridNumber(50*50)
gridSize(50)
sliderNumber()
