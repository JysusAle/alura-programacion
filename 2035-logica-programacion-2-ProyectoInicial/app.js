let listaNumerosSorteados = [];
let intentos = 1;
let numeroSecreto = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHMTL = document.querySelector(elemento);
    elementoHMTL.innerHTML = texto;
    return;
}

function verificarIntento() {

    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    if(numeroSecreto === numeroUsuario){
        console.log(`Lista numeros: ${listaNumerosSorteados}`);
        
        asignarTextoElemento('p', `Felicidades, has adivinado el numero secreto en ${intentos} ${(intentos===1 ? 'intento' : 'intentos')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{

        // Si el usuario no ha adivinado el numero secreto
        intentos++;


        if (numeroSecreto < numeroUsuario){

            asignarTextoElemento('p', 'El numero secreto es menor');
        }
        else if (numeroSecreto > numeroUsuario){

            asignarTextoElemento('p', 'El numero secreto es mayor');
        }

        limpiarCaja();
    }

    return;
}

function limpiarCaja() {

    document.querySelector('#valorUsuario').value = '';
    return;
}
function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random() * 10) + 1;
    //si el numero generado esta incluido en la lista
    if(listaNumerosSorteados.includes(numeroGenerado)){

        return generarNumeroSecreto();

    }else {
        
        if (listaNumerosSorteados.length === 5)
            listaNumerosSorteados.shift();


        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

}

function condicionesIniciales() {

    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', 'Indica un numero del 1 al 10');

    numeroSecreto = generarNumeroSecreto();

    intentos = 1;
}

function reiniciarJuego() {
    //limpiarCaja();
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //Desactivar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();