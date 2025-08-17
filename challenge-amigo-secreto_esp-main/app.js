//Este código es parte del reto de programación "Amigo Secreto" del curso de JavaScript de Alura.
//El objetivo es crear una aplicación que permita a los usuarios ingresar los nombres de sus amigos y sortear un amigo secreto entre ellos.
//El código incluye funciones para agregar nombres a una lista y para sortear un amigo secreto.

//lista para almacenar los nombres de los amigos
//Se inicializa como un array vacío.
let listaNombresAmigos = [];

//Función para agregar un nombre a la lista de amigos
//Esta función se ejecuta cuando el usuario hace clic en el botón "Añadir".
//Toma el valor del input con id 'amigo', lo agrega a la lista y lo imprime en la consola.

function limpiarCaja() {

    document.querySelector('#amigo').value = '';
    return;
}

function asignarTextoElemento(elemento,texto){
    let elementoHMTL = document.querySelector(elemento);
    elementoHMTL.innerHTML = texto;
    return;
}

function agregarNombre() {

    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }

    listaNombresAmigos.push(nombreAmigo);
    console.log(listaNombresAmigos);

    //Limpia el input después de agregar el nombre
    limpiarCaja();
    return;
}

function sortearAmigo() {

    // Verifica si hay al menos dos amigos en la lista para poder sortear
    if (listaNombresAmigos.length < 2) {
        alert('Por favor, ingrese al menos dos amigos para sortear.');
        return;
    }
    //Sortea los amigos de manera aleatoria
    let amigoSecreto = listaNombresAmigos[Math.floor(Math.random() * listaNombresAmigos.length)];

    asignarTextoElemento('p', `El amigo secreto es: ${amigoSecreto}`);

    return;
}

