function generateGrid (square) {
  var container = document.createElement("div");
  container.className="container";
  document.body.appendChild(container);
  var grid = square *square;
  for (i=0; i<grid; i++) {
    var squareGrid =document.createElement("div");
    squareGrid.className = "squaregrid";
    squareGrid.style.width = ((350)/(square)) + "px";
    container.appendChild(squareGrid);
  }
} 
generateGrid(20);

 

