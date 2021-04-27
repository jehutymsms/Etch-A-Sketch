//Variable for Container div
const container = document.getElementById("container");



// Sets number of grid blocks
function gridNumber(x){
    for (i=0;i<x;i++){
        let tag = document.createElement("div");
        tag.className = "block";
        tag.id = "block" + i
        container.appendChild(tag);
        }
    //Variable for new divs created by grid
    const block = document.getElementsByClassName("block");
    let bock = Array.from(block);
    bock.forEach(el => el.addEventListener('mouseover', event => {
        el.classList.add("blocks");
    }));

    }




// Change div Color
// function divChange(){

// }

// Sets number of Columns and Rows and removes previous 
function gridSize(x){

    container.style.removeProperty('gridTemplateColumns');
    container.style.removeProperty('gridTemplateRows');
    
    container.style.gridTemplateColumns = `repeat(${x}, 50px)`;
    container.style.gridTemplateRows = `repeat(${x}, 50px)`;
}

// board size based on selection
function setGrid() {
    let x = document.getElementById("mySelect");
    let y = parseInt(x.options[x.selectedIndex].text)
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    gridNumber(y*y)
    gridSize(y)
  }

//Reset Board to Default Size 4x4
function resetBoard(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    gridNumber(4*4)
    gridSize(4)
}

// reset Button Action
let reset = document.getElementById("reset");
reset.onclick = function(){
    resetBoard()
}


gridNumber(16)
gridSize(4)

