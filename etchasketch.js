function generateGrid (square) {
  let container = document.createElement("div");
  container.id="container";
  document.body.appendChild(container);
  let grid = square *square;
  for (i=0; i<grid; i++) {
    let squareGrid =document.createElement("div");
    squareGrid.className = "squaregrid";
    squareGrid.id = "idsquaregrid";
    squareGrid.style.width = ((550)/(square)) + "px";
    container.appendChild(squareGrid);
  }
  colorPicker();
}
  


 function colorPicker() {
  let inputs = document.getElementsByClassName("squaregrid");
  for(let i = 0; i < inputs.length; i++) {
   {
    inputs[i].addEventListener("mouseover",function(){inputs[i].style.backgroundColor = pickColor()})
   }
  }
 }

 function gridOutline() {
  let inputs = document.getElementsByClassName("squaregrid");
  for(let i = 0; i < inputs.length; i++) {
   {
    inputs[i].style.outline = "1px grey solid"
   }
  }
 }


function pickRainbow() {
   pickcolor="rainbow"
   document.getElementById("rainbow").style.background='gold';
   document.getElementById("colorchanger").style.background='white';
}
function pickRGB() {
  pickcolor="rgb"
  document.getElementById("colorchanger").style.background='gold';
  document.getElementById("rainbow").style.background='white';
}



function pickColor () {
     if (pickcolor=="rgb") {
     return document.getElementById("colorchanger").value;
     }
     if (pickcolor=="rainbow")
     return random='#'+Math.floor(Math.random()*16777215).toString(16);
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

function clearCurrentGrid() {
  let inputs = document.getElementsByClassName("squaregrid");
  for(let i = 0; i < inputs.length; i++) {
    inputs[i].style.backgroundColor = "white";
  }
}
let pickcolor="rgb";
generateGrid(16);
colorPicker();