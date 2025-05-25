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
            beep.style.backgroundColor = "white";
            row.appendChild(beep);
        }
        cont.appendChild(row);
    }
}
function changeGridSize (input) {
    let newGridSize = input;
    
    console.log(input);
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
})
newBtn.addEventListener("mousedown", function () {
    function number(thing) {
        if (thing > 100) {
            number(parseInt(prompt("please enter a number less than 100: ", "85")));
        } else if (thing <= 0) {
            number(parseInt(prompt("please enter a number above 0: ", "57")));
        } else {
            return parseInt(thing);
        }
    }
    doop = number(parseInt(prompt("enter in new grid size: ", "50")));
    changeGridSize(doop);
})