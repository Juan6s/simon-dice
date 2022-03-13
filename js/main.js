
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
            accionarBotonAmarillo();

            break;
        case 2:
            accionarBotonAzul();

            break;
        case 3:
            accionarBotonRojo();

            break;
        case 4:
            accionarBotonVerde();
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



document.querySelector(".panel-botones").onclick = function (event) {
    event.preventDefault();

    resultadoComparacion = compararSecuencias();

    if (resultadoComparacion === false) {
        document.querySelector("#contador").innerText = "-";
        document.querySelector("#sonido-pierde").play();
    } else if (resultadoComparacion === true) {
        setTimeout(turnoMaquina, 700);
    }
}

document.querySelector("#boton-comenzar").onclick = function (event) {
    event.preventDefault();
    iniciarJuego();


}


document.querySelector("#boton-amarillo").onclick = function (event) {
    event.preventDefault();
    if (turnoUsuario) {
        accionarBotonAmarillo();
        secuenciaUsuario.push(1)
    }
    accionarBotonAmarillo();
}
document.querySelector("#boton-azul").onclick = function (event) {
    event.preventDefault();
    if (turnoUsuario) {
        accionarBotonAzul()
        secuenciaUsuario.push(2);
    }


}

document.querySelector("#boton-rojo").onclick = function (event) {
    event.preventDefault();
    if (turnoUsuario) {
        accionarBotonRojo();
        secuenciaUsuario.push(3)
    }

}

document.querySelector("#boton-verde").onclick = function (event) {
    event.preventDefault();
    if (turnoUsuario) {
        accionarBotonVerde();
        secuenciaUsuario.push(4)
    }

}





function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);

}
