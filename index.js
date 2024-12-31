import darkTheme from './tema_oscuro.js';
import generarComida from './comida.js';

const $tablero = document.querySelector(".tablero");

let snakeX = 5, snakeY = 12,
    comidaX = 0, comidaY = 0,
    velocidadX = 0, velocidadY = 0,
    gameOver = false;

let cuerpo = [];

let intervaloIniciar;

[comidaX, comidaY] = generarComida();

    
    
document.addEventListener("keydown", (e) => {
    let snake = document.querySelector(".snake");
    snake.remove();

    if (e.key === "ArrowUp" && velocidadY !== 1) {
        velocidadX = 0;
        velocidadY = -1;
    }
    if (e.key === "ArrowDown" && velocidadY !== -1) {
        velocidadX = 0;
        velocidadY = 1;
    }
    if (e.key === "ArrowLeft" && velocidadX !== 1) {
        velocidadX = -1;
        velocidadY = 0;
    }
    if (e.key === "ArrowRight" && velocidadX !== -1) {
        velocidadX = 1;
        velocidadY = 0;
    }
});

const iniciarJuego = () => {
    if(gameOver){
        setgameOver();
    }

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

    if(snakeX < 0 || snakeX > 25 || snakeY < 0 || snakeY > 25){
        gameOver = true;
    }

    for(let i = 0; i < cuerpo.length; i++){
        htmlmarkup += `<div class="snake" style="grid-column: ${cuerpo[i][0]}; grid-row: ${cuerpo[i][1]}"></div>`;
        if(i != 0 &&  cuerpo[0][0] === cuerpo[i][0] && cuerpo[0][1] === cuerpo[i][1]){
            gameOver = true;
        }
    }

    $tablero.innerHTML = htmlmarkup;
}


const setgameOver = () =>{
    snakeX = 5;
    snakeY = 12;
    cuerpo = [];
    velocidadX = 0;
    velocidadY = 0;
    clearInterval(intervaloIniciar);
    alert("Game Over");
    location.reload();
};









darkTheme(".dark-theme-btn", "dark-theme");
intervaloIniciar = setInterval(iniciarJuego, 100);

