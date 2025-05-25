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
    let newGridSize;
    if (input === undefined) {
        newGridSize = prompt("Enter new grid size: ", "50");
        if (parseInt(newGridSize) > 100) {
            let again = prompt("Enter a new grid size less than 100: ", "99");
            changeGridSize(again);
        } else if (parseInt(input) > 100) {
            let again = prompt("Please enter a number less than 100: ", "60");
            changeGridSize(again)
        }
        else if (parseInt(input) <= 0) {
            console.log("what")
            let again = prompt("please enter a number above 0: ", "37");
            changeGridSize(again);
        }
    } 
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
    changeGridSize();
})