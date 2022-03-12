$botonRojo = document.querySelector("#boton-rojo");
$audio = document.querySelector("#sonido-rojo");

const paneles= {
    "boton-rojo":"sonido-rojo",
    "boton-amarillo":"sonido-amarillo",
    "boton-verde":"sonido-verde",
    "boton-rojo":"sonido-rojo"

}


$botonRojo.onclick = function(event){
    event.preventDefault();
    $audio.play();
    $botonRojo.presionado = "true"
    alert($botonRojo.presionado)
}