let rainbowMode = false;

const etchasketch = document.getElementById("etchasketch");
const resetButton = document.getElementById("reset");
const rainbowButton = document.getElementById("rainbow");
const resolutionButton = document.getElementById("resolution");

function createGrid(resolution) {
    for (let i = 0; i < resolution * resolution; i ++){

        const pixel = document.createElement("div");
        pixel.setAttribute("class", "pixel")
        pixel.setAttribute("id" , "pixel-" + i);
    
        etchasketch.style.gridTemplateColumns = "repeat("+ resolution + ", 1fr)";
        etchasketch.appendChild(pixel);
    }
}

function removeGrid() {
    etchasketch.innerHTML=''
}

function changeGrid(){
    const resolution = prompt("Enter Resolution: ")
    removeGrid();
    createGrid(resolution);
}

function changeColor(e) {
    const pixel = document.getElementById(e.target.id);
    console.log(pixel);

    if (rainbowMode === true){
        pixel.style.backgroundColor = getRandomColor();
    } else {
        pixel.style.backgroundColor = "#000";
    }

    //pixel.classList.add("colored")
}

function resetBoard(e) {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => pixel.style.backgroundColor = "#FFF");
}

function getRandomColor() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const randomColor = "rgb(" + x + "," + y + "," + z + ")";
    
    return randomColor
}

function rainbowToggle() {
    if (rainbowMode === false) {
        rainbowMode = true;
        rainbowButton.textContent = "Back to Black";
    } else {
        rainbowMode = false;
        rainbowButton.textContent = "Rainbow";
    }

}


etchasketch.addEventListener('mouseover', changeColor);
resetButton.addEventListener('click', resetBoard);
rainbowButton.addEventListener('click', rainbowToggle);
resolutionButton.addEventListener('click', changeGrid);

createGrid(16);