export default function generarComida() {

    let comidaX = Math.floor(Math.random() * 25) + 1,
        comidaY = Math.floor(Math.random() * 25) + 1;

        console.log(comidaX, comidaY);
    return [comidaX, comidaY ];
}