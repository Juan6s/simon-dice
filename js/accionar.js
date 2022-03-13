const $botonRojo = document.querySelector("#boton-rojo");
const $botonAmarillo = document.querySelector("#boton-amarillo");
const $botonVerde = document.querySelector("#boton-verde");
const $botonAzul = document.querySelector("#boton-azul");

function accionarBotonRojo(){
    document.querySelector("#sonido-rojo").play();
    $botonRojo.name = "activado";
    setTimeout(apagarBoton,40, $botonRojo);

}
function accionarBotonAzul(){
    document.querySelector("#sonido-azul").play();
    $botonAzul.name = "activado";
    setTimeout(apagarBoton,40, $botonAzul);
}
function accionarBotonVerde(){
    document.querySelector("#sonido-verde").play();
    $botonVerde.name = "activado";
    setTimeout(apagarBoton,40, $botonVerde);
}
function accionarBotonAmarillo(){
    document.querySelector("#sonido-amarillo").play();
    $botonAmarillo.name = "activado";
    setTimeout(apagarBoton,40, $botonAmarillo);
}


function apagarBoton($boton){
    

    $boton.name=""; 
}