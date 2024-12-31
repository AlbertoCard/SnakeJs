import darkTheme from './tema_oscuro.js';
import generarComida from './comida.js';

const $tablero = document.querySelector(".tablero");

let snakeX = 5, snakeY = 12;

darkTheme(".dark-theme-btn", "dark-theme");
generarComida();

let htmlmarkup = `<div class="snake" style="grid-column: ${snakeX}; grid-row: ${snakeY}"></div>`;
$tablero.insertAdjacentHTML("beforeend", htmlmarkup);

