const cont = document.querySelector("#container");

let gridSize = 16;
let boxSize = 900 / gridSize;
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
document.addEventListener('DOMContentLoaded', function() {
    loadthing();
    console.log("boop");
})