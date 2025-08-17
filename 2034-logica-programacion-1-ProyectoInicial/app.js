// variables
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximoIntentos = 5;
let NumeroRangoMaximo = 0;

while (NumeroRangoMaximo <=2){

    NumeroRangoMaximo = prompt('Ingresa el rango de numeros que quieres jugar, del 1 al:  ');

    if (NumeroRangoMaximo < 2) {alert('Elegir un numero mayora o igual a 2');}
}

let numeroSecreto = Math.floor(Math.random() * NumeroRangoMaximo) + 1; // Genera un numero aleatorio del 1 al 10

while (numeroUsuario != numeroSecreto){
 
    let numeroUsuario = parseInt(prompt(`Indica un numero del 1 al 10, Intento restantes: ${maximoIntentos}`));

    console.log(typeof(numeroUsuario));

    /*
    Este codigo realiza
    la comparacion
    */

    if (numeroUsuario == numeroSecreto) {
        // Si el numero del usuario es igual al numero secreto
        alert(`Enhorabuena, has acertado. El número secreto era: ${numeroUsuario}, y lo has conseguido en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}.`);

        break;
    }
    else {

        if(numeroUsuario > numeroSecreto){

            alert('El numero que has indicado es mayor que el numero secreto.');

        }
        else{

            alert('El numero que has indicado es menor que el numero secreto.');

        }
        intentos += 1;
        //palabraVeces = 'veces';
        maximoIntentos -= 1;
        if (maximoIntentos == 0) {
            alert('Has agotado todos los intentos. El numero secreto era: ' + numeroSecreto);
            break
        }
        // Si el numero del usuario no es igual al numero secreto
        //alert('Lo siento, el numero secreto era: ' + numeroSecreto);
    }
}