function generateGrid (square) {
  let container = document.createElement("div");
  container.id="container";
  document.body.appendChild(container);
  let grid = square *square;
  for (i=0; i<grid; i++) {
    let squareGrid =document.createElement("div");
    squareGrid.className = "squaregrid";
    squareGrid.style.width = ((550)/(square)) + "px";
    container.appendChild(squareGrid);
  }
  let inputs = document.getElementsByClassName("squaregrid");
  for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("mouseover",function(){inputs[i].style.backgroundColor = pickColor()})
  }
}

function pickColor () {
      return rgb = document.getElementById("colorchanger").value;
}

function removeContainer() {
  var child = document.getElementById('container');
  child.parentNode.removeChild(child);
}

function newGrid() {
   
   let gridsize = prompt("What size grid? *Note max is 100 per side!");

   if (gridsize>100 || gridsize<=0) {
     alert("Sorry the grid can be no less then 0 or bigger then 100!");
   }
   else  {
   removeContainer();
   generateGrid(gridsize);
}
}
generateGrid(16);
