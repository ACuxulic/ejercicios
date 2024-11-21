//Mostrar números del 1 al 10
function ciclo1() {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += i + " ";
    }
    alert("Números del 1 al 10: " + resultado);
}

//Sumar números del 1 al 100
function ciclo2() {
    let suma = 0;
    let i = 1;
    while (i <= 100) {
        suma += i;
        i++;
    }
    alert("La suma de los números del 1 al 100 es: " + suma);
}

//Pedir número y mostrar tabla de multiplicar de ese número
function ciclo3() {
    let numero = prompt("Ingres un número para mostrar su tabla de multiplicar:");
    let resultado = "";
    for (let i = 1; i <=10; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }
    alert("Tabla de multiplicar del " + numero + ":\n" + resultado);
}

//Mostrar los primeros 10 números pares
function ciclo4() {
    let pares = "";
    let i = 1;
    let contador = 0;
    while (contador < 10) {
        if (i % 2 === 0) {
            pares += i + " ";
            contador++;
        }
        i++;
    }
    alert("Los primeros 10 números pares son: " + pares);
}

//Pedir número a usuario hasta que ingrese un número negativo
function ciclo5() {
    let numero;
    do {
        numero = prompt("Ingrese un número (Ingrese un número negativo para salir):");
    } while (numero >= 0);
    alert("Ingresaste un número negativo.");
}

//Contar cuantas veces aparece la letra 'a' en una palabra dada por el usuario
function ciclo6() {
    let palabra = prompt("Ingrese una palabra:");
    let contador = 0;
    for (let i = 0; i < palabra.length; i++) {
        if (palabra[i].toLowerCase() === 'a') {
            contador++;
        }
    }
    alert("La letra 'a' aparece " + contador + " veces en la palabra " + palabra);
}