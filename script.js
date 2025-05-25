const cont = document.querySelector("#container");

let gridSize = 16;
let boxSize = 900 / gridSize;
let newBtn = document.querySelector("#newBtn");
console.log("beep");

function loadthing () {
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        for (let j = 0; j < gridSize; j++) {
            let beep = document.createElement("div");
            beep.style.width = boxSize + "px";
            beep.style.height = boxSize + "px";
            beep.classList.add("gridBox");
            row.appendChild(beep);
        }
        cont.appendChild(row);
    }
}
function changeGridSize (input) {
    cont.innerHTML = "";
    gridSize = input;
    boxSize = 900 / gridSize;
    loadthing();
}
document.addEventListener("DOMContentLoaded", function () {
    loadthing();
    console.log("boop");
})
cont.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "blue";
    addButton();
})
newBtn.addEventListener("mousedown", function () {
    let newGridSize = prompt("input new grid size: ", "25");
    let newGridSizee = parseInt(newGridSize);
    changeGridSize(newGridSizee);
})