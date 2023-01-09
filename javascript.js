let gridResolution = 10;

for (let i = 0; i <= gridResolution * gridResolution; i ++){
    console.log(i);

    const pixel = document.createElement("div");
    pixel.setAttribute("id" , "Pixel-" + i);

    etchasketch.appendChild(pixel);
}

