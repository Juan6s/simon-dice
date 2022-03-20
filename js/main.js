
let secuenciaUsuario = [];
let secuenciaMaquina = [];
let turnoUsuario = false;
let tiempoEspera = 700;

function agregarSecuencia() {
    secuenciaMaquina.push(random(1, 4));
}

function reproducirSecuencia(indice) {

    switch (secuenciaMaquina[indice]) {

        case 1:
            accionarBoton("amarillo");

            break;
        case 2:
            accionarBoton("azul");

            break;
        case 3:
            accionarBoton("rojo");

            break;
        case 4:
            accionarBoton("verde");
            break;
        default:
            return;


    }


}

function turnoMaquina() {
    agregarSecuencia();
    document.querySelector("#contador").innerText = secuenciaMaquina.length;

    let i = 0;
    setInterval(function () {
        if (i === secuenciaMaquina.length) {
            turnoUsuario = true;
            clearInterval();
        }
        reproducirSecuencia(i);
        i++;
    }, tiempoEspera);
    tiempoEspera -= 10;
}

function iniciarJuego() {
    secuenciaMaquina = [];
    secuenciaUsuario = [];
    turnoUsuario = false;
    turnoMaquina();
}


function compararSecuencias() {

    if (secuenciaUsuario.length === secuenciaMaquina.length) {
        for(let i = 0; i<secuenciaMaquina.length; i++){
            if(secuenciaMaquina[i] !== secuenciaUsuario[i]){
                secuenciaUsuario = [];
                return false;
            }
        }
        secuenciaUsuario=[]
        return true;    
        
    }

}



document.querySelector(".panel-botones").onclick = function () {

    resultadoComparacion = compararSecuencias();

    if (resultadoComparacion === false) {
        document.querySelector("#contador").innerText = "-";
        document.querySelector("#sonido-pierde").play();
    } else if (resultadoComparacion === true) {
        setTimeout(turnoMaquina, 700);
    }
}

document.querySelector("#boton-comenzar").onclick = function () {

    iniciarJuego();


}


document.querySelector("#boton-amarillo").onclick = function () {

    if (turnoUsuario) {
        accionarBoton("amarillo");
        secuenciaUsuario.push(1)
    }

}
document.querySelector("#boton-azul").onclick = function () {

    if (turnoUsuario) {
        accionarBoton("azul");
        secuenciaUsuario.push(2);
    }


}

document.querySelector("#boton-rojo").onclick = function () {
    if (turnoUsuario) {
        accionarBoton("rojo");
        secuenciaUsuario.push(3)
    }

}

document.querySelector("#boton-verde").onclick = function () {

    if (turnoUsuario) {
        accionarBoton("verde");
        secuenciaUsuario.push(4)
    }

}





function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);

}
