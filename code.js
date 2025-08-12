let textoPixeles = document.querySelector(".texto__pixeles");
let rangoPixeles = document.querySelector(".rango__pixeles");

let cantidadPixeles = rangoPixeles.value * rangoPixeles.value;

let containerCuadricula = document.querySelector(".container__cuadricula-juego");

let widthAndHeightCuadricula = 640;

let dibujarCeldasEnCuadricula = (cuadricula, cantidadPixeles) => {
    for (let i = 0; i < cantidadPixeles; i++) {
        let celda = document.createElement("span");
        celda.classList.add("container__celda");
        celda.style.width = widthAndHeightCuadricula / rangoPixeles.value + "px";
        celda.style.height = widthAndHeightCuadricula / rangoPixeles.value  + "px";
        cuadricula.appendChild(celda);
    }
}

let eliminarCeldasEnCuadricula = (cuadricula) => {
    while (cuadricula.firstChild) {
        cuadricula.removeChild(cuadricula.firstChild)
    }
}

const letrasHexadecimales = "0123456789ABCDEF";

let generarColorAleatorio = (letrasHexadecimales) => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letrasHexadecimales[Math.floor(Math.random() * 16)];
    }
    return color;
}

let buttonBlackMode, buttonArcoirisMode, buttonEraserMode;

buttonBlackMode = document.getElementById("button__black-mode");
buttonArcoirisMode = document.getElementById("button__arcoiris-mode");
buttonEraserMode = document.getElementById("button__eraser-mode");

let banderaClickApretado = false

document.body.addEventListener("mousedown", () => {
    banderaClickApretado = true;
});

document.body.addEventListener("mouseup", () => {
    banderaClickApretado = false;
});


dibujarCeldasEnCuadricula(containerCuadricula, cantidadPixeles);

let celdas = document.querySelectorAll(".container__celda");

let añadirColorACeldas = (celdas) => {
    celdas.forEach((celda) => {
        celda.addEventListener("mouseover", () => {
            if (banderaClickApretado) {
                if (buttonBlackMode.checked) {
                    celda.style.backgroundColor = "#000";
                }
                else if (buttonArcoirisMode.checked) {
                    colorAleatorio = generarColorAleatorio(letrasHexadecimales);
                    celda.style.backgroundColor = colorAleatorio;
                }
                else if (buttonEraserMode.checked) {
                    celda.style.backgroundColor = "#fff";
                }
                }
            })

    })
}

añadirColorACeldas(celdas);

rangoPixeles.addEventListener("input", () => {
    cantidadPixeles = rangoPixeles.value * rangoPixeles.value;
    textoPixeles.textContent = rangoPixeles.value + "x" + rangoPixeles.value;
    if (containerCuadricula.hasChildNodes()) {
        eliminarCeldasEnCuadricula(containerCuadricula);
    };

    dibujarCeldasEnCuadricula(containerCuadricula, cantidadPixeles);

    celdas = document.querySelectorAll(".container__celda");
    añadirColorACeldas(celdas);
})









