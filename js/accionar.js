const $botonRojo = document.querySelector("#boton-rojo");
const $botonAmarillo = document.querySelector("#boton-amarillo");
const $botonVerde = document.querySelector("#boton-verde");
const $botonAzul = document.querySelector("#boton-azul");

function accionarBoton(color) {
        const boton = document.querySelector(`#boton-${color}`)
        document.querySelector(`#sonido-${color}`).play()
        boton.style.filter = "brightness(80%)"
        setTimeout(apagarBoton, 40, boton);

    }


    function apagarBoton($boton) {


        $boton.style.filter = "brightness(100%)"
    }