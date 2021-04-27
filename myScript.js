

// Sets number of grid blocks
function gridNumber(x){
    for (i=0;i<x;i++){
        let tag = document.createElement("div");
        // let tic = document.createTextNode(x+1);
        // tag.appendChild(tic);
        tag.className = "block";
        document.getElementById("container").appendChild(tag);
        }
    }

// Sets number of Columns and Rows
function gridSize(x){

    document.getElementById("container").style.removeProperty('gridTemplateColumns');
    document.getElementById("container").style.removeProperty('gridTemplateRows');
    
    document.getElementById("container").style.gridTemplateColumns = `repeat(${x}, 50px)`;
    document.getElementById("container").style.gridTemplateRows = `repeat(${x}, 50px)`;
}

// initiates board size based on selection
function setGrid() {
    let x = document.getElementById("mySelect");
    let y = parseInt(x.options[x.selectedIndex].text)
    
    const container = document.getElementById("container")
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    gridNumber(y*y)
    gridSize(y)
  }

//Reset Board to Default Size 4x4
function resetBoard(){
    const container = document.getElementById("container")
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
// Set Size Button Action
let set = document.getElementsByTagName('input')[0];
set.onclick = function(){
    resetBoard()
    setGrid()
}


gridNumber(16)
gridSize(4)