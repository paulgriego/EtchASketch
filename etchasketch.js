function createDiv (numberGrid) 
  {
  while(i<(numberGrid*numberGrid)) {
  i++;
  const newDiv = document.createElement("div");
  newDiv.className="Grid";
  newDiv.style.backgroundColor="red";
  newDiv.style.border= "thin solid black";
  newDiv.style.height="30px";
  newDiv.style.width="30px";
  document.getElementById("container").appendChild(newDiv);

  }
} 
let numberGrid=0;
let i=0; 
createDiv(4);


