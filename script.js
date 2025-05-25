const cont = document.querySelector("#container");

let gridSize = 16;
let boxSize = 900 / gridSize;
let newBtn = document.querySelector("#newBtn");

function loadthing () {
    for (let i = 0; i < gridSize; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
        for (let j = 0; j < gridSize; j++) {
            let beep = document.createElement("div");
            beep.style.width = boxSize + "px";
            beep.style.height = boxSize + "px";
            beep.classList.add("gridBox");
            beep.style.backgroundColor = "white";
            column.appendChild(beep);
        }
        cont.appendChild(column);
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
})
cont.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "blue";
})
newBtn.addEventListener("mousedown", function () {
    function number(thing) {
        if (thing > 100) {
            return number(parseInt(prompt("please enter a number less than 100: ", "85")));
        } else if (thing <= 0) {
            return number(parseInt(prompt("please enter a number above 0: ", "57")));
        } else {
            return thing;
        }
    }
    doop = number(parseInt(prompt("enter in new grid size: ", "50")));
    changeGridSize(doop);
})