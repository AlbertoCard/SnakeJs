import darkTheme from './tema_oscuro.js';
import generarComida from './comida.js';

const $tablero = document.querySelector(".tablero");

let snakeX = 5, snakeY = 12,
    comidaX = 0, comidaY = 0,
    velocidadX = 0, velocidadY = 0;

let cuerpo = [];

[comidaX, comidaY] = generarComida();

    
    
document.addEventListener("keydown", (e) => {
    let snake = document.querySelector(".snake");
    snake.remove();

    if (e.key === "ArrowUp") {
        velocidadX = 0;
        velocidadY = -1;
    }
    if (e.key === "ArrowDown") {
        velocidadX = 0;
        velocidadY = 1;
    }
    if (e.key === "ArrowLeft") {
        velocidadX = -1;
        velocidadY = 0;
    }
    if (e.key === "ArrowRight") {
        velocidadX = 1;
        velocidadY = 0;
    }
});

const iniciarJuego = () => {
    if(snakeX === comidaX && snakeY === comidaY){
        [comidaX, comidaY] = generarComida();
        cuerpo.push([snakeX, snakeY]);
    }

    let htmlmarkup = `<div class="comida" style="grid-column: ${comidaX}; grid-row: ${comidaY}"></div>`;

    for(let i = cuerpo.length - 1; i > 0; i--){
        cuerpo[i] = cuerpo[i - 1];
    }

    cuerpo[0] = [snakeX, snakeY];

    snakeX += velocidadX;
    snakeY += velocidadY;

    if(snakeX < 1 || snakeX > 25 || snakeY < 1 || snakeY > 25){
        snakeX = 5;
        snakeY = 12;
        cuerpo = [];
        velocidadX = 0;
        velocidadY = 0;
    }

    for(let i = 0; i < cuerpo.length; i++){
        htmlmarkup += `<div class="snake" style="grid-column: ${cuerpo[i][0]}; grid-row: ${cuerpo[i][1]}"></div>`;
    }

    $tablero.innerHTML = htmlmarkup;
}










darkTheme(".dark-theme-btn", "dark-theme");
setInterval(iniciarJuego, 100);


