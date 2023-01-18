let grid = document.querySelector("#grid");
let gridSizeBtn = document.querySelector("#grid-size");
let resetBtn = document.querySelector("#reset");

function colorGrid() {
  let grids = document.querySelectorAll(".grid-tile");

  grids.forEach((gridElement) => {
    gridElement.addEventListener("mouseover", (e) => {
      e.target.classList.add("tile-hover");
    });
  });
}

for (let j = 0; j < 16; j++) {
  for (let i = 0; i < 16; i++) {
    let gridTile = document.createElement("div");
    gridTile.classList.add("grid-tile");
    grid.appendChild(gridTile);
  }
}

colorGrid();

gridSizeBtn.addEventListener("click", (e) => {
  let size = prompt("Write down the size of your grid (min:20, max: 100)");
  grid.innerHTML = "";
  if (size >= 20 && size <= 100) {
    for (let j = 0; j < size; j++) {
      for (let i = 0; i < size; i++) {
        let gridTile = document.createElement("div");
        gridTile.classList.add("grid-tile");
        grid.appendChild(gridTile);
        grid.style.width = size * 12 + "px";
      }
    }
  } else {
    for (let j = 0; j < 16; j++) {
      for (let i = 0; i < 16; i++) {
        let gridTile = document.createElement("div");
        gridTile.classList.add("grid-tile");
        grid.appendChild(gridTile);
        grid.style.width = "192px";
      }
    }
    alert("Please enter a value between 20 and 100.");
  }
  colorGrid();
});

function resetGrid() {
  let grids = document.querySelectorAll(".grid-tile");

  grids.forEach((gridElement) => {
    gridElement.classList.remove("tile-hover");
  });
}

resetBtn.addEventListener("click", (e) => {
  resetGrid();
});
