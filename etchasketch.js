
  function createDiv (numberGrid) 
  {
  while(i<numberGrid) {
  i++;
  const newDiv = document.createElement("div");
  newDiv.className="Grid"
  document.getElementById("container").appendChild(newDiv);
  }
} 
let numberGrid=0;
let i=0; 
createDiv(16);