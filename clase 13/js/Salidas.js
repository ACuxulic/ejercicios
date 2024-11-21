//Bienvenida en consola
function saludo1(){
    console.log("WELCOME");
}

// 2a Resultado de la suma de dos números
function salida2a(){
    alert(5 + 3);
    alert("La suma de los números es "+ (5 + 3));
}

// 2b Resultado de la suma de dos números
function salida2b(){
    let element = document.getElementById("resultadoSuma");
    element.innerHTML = "La suma es " + (5 + 3);
}

// 3 Pedir nombre del usuario y mostrar saludo
function salida3(){
    let nombre = prompt("Por favor, ingrese su nombre.");
    alert("Saluton " + nombre);
}

// 4 Mostrar valor de una variable en consola
function salida4(){
    let miVariable = "Este es el valor de mi variable.";
    console.log(miVariable);
}

// 5 Mostrar fecha actual en un alert
function salida5(){
    let fechaActual = new Date();
    alert("La fecha y hora actual es: " + fechaActual);
}

// 6 Mostrar Hola Mundo
function salida6(){
    document.write("Hola Mundo");
}