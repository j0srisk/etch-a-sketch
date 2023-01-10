let rainbowMode = false;
let selectedColor = '#000000'
let selectedResolution = 63;

// pulls existing elements from html
const grid = document.getElementById("grid");
const resetButton = document.getElementById("reset");
const colors = document.querySelectorAll('.color');
const currentColorWindow = document.getElementById("selected-color");
const rainbowButton = document.getElementById("rainbow");
const resolutionSelector = document.getElementById("resolution");

//adds event listeners and styles elements with defaults
colors.forEach(color => color.addEventListener('click', changeColor));
colors.forEach(color => color.style.backgroundColor = '#'+color.id);
currentColorWindow.style.backgroundColor = selectedColor;

// creates grid
function createGrid(resolution) {
    for (let i = 0; i < resolution * resolution; i ++){

        const pixel = document.createElement("div");
        pixel.setAttribute("class", "pixel")
        pixel.setAttribute("id" , "pixel-" + i);
    
        grid.style.gridTemplateColumns = "repeat("+ resolution + ", 1fr)";
        grid.appendChild(pixel);

        //styles checkboard only works on odd numbers rn
        if (i%2 != 0){
            pixel.style.backgroundColor = "#EDEDED";
        }
    }
}

//removes all pixel elements from the grid
function removeGrid() {
    grid.innerHTML=''
}


//fills pixels with selected color or rainbow
function fillPixel(e) {
    const pixel = document.getElementById(e.target.id);

    if (rainbowMode === true){
        pixel.style.backgroundColor = getRandomColor();
    } else {
        pixel.style.backgroundColor = selectedColor;
    }
}

//erases board
function resetBoard() {
    removeGrid();
    createGrid(selectedResolution);
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
        currentColorWindow.style.backgroundImage = "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)";
    } else {
        rainbowMode = false;
        currentColorWindow.style.backgroundImage = "none";
        currentColorWindow.style.backgroundColor = selectedColor;
    }
}

//changes selected color
function changeColor(e){
    if (rainbowMode === true){
        rainbowToggle();
    }
    selectedColor = "#"+e.target.id;
    currentColorWindow.style.backgroundColor = selectedColor;
}

function updateResolution(){
    selectedResolution = document.getElementById("resolution").value;
    removeGrid();
    createGrid(selectedResolution);
}

grid.addEventListener('mouseover', fillPixel);
resetButton.addEventListener('click', resetBoard);
rainbowButton.addEventListener('click', rainbowToggle);
resolutionSelector.addEventListener('change', updateResolution);

createGrid(selectedResolution);