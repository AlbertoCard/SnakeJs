export default function generarComida() {
    const $tablero = document.querySelector(".tablero");

    let comidaX = Math.floor(Math.random() * 25) + 1,
        comidaY = Math.floor(Math.random() * 25) + 1;
    console.log(comidaX, comidaY);

    let htmlmarkup = `<div class="comida" style="grid-column: ${comidaX}; grid-row: ${comidaY}"></div>`;

    $tablero.insertAdjacentHTML("beforeend", htmlmarkup);

}