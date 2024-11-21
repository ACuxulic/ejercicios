// Programa 1: Declarar array con 5 números y mostrar primer y último elemento
function Array1() {
    let numeros = [10, 20, 30, 40, 50];
    console.log("Primer número: " + numeros[0]);
    console.log("Último número: " + numeros[numeros.length - 1]);
}

// Programa 2: Array con 5 ciudades y mostrar la segunda ciudad
function Array2() {
    let ciudades = ["Madrid", "París", "Londres", "Roma", "Berlín"];
    console.log("La segunda ciudad es: " + ciudades[1]);
}

// Programa 3: Pedir 5 números al usuario, almacenarlos en un array y mostrar la suma
function Array2() {
    let numeros = [];
    let suma = 0;
    for (let i = 0; i < 5; i++) {
        numeros[i] = parseInt(prompt("Ingrese un número:"));
        suma += numeros[i];
    }
    alert("La suma de los números es: " + suma);
}

// Programa 4: Recorrer un array de 5 palabras y mostrar cada palabra en la consola
function Array4() {
    let palabras = ["Hola", "Mundo", "JavaScript", "Programación", "Array"];
    for (let i = 0; i < palabras.length; i++) {
        console.log(palabras[i]);
    }
}

// Programa 5: Pedir 5 nombres al usuario, almacenarlos en un array y mostrarlo
function Array5() {
    let nombres = [];
    for (let i = 0; i < 5; i++) {
        nombres[i] = prompt("Ingrese un nombre:");
    }
    alert("Los nombres ingresados son: " + nombres.join(", "));
}

// Programa 6: Pedir 10 números al usuario y mostrar cuántos son mayores a 50
function Array6() {
    let numeros = [];
    let contador = 0;
    for (let i = 0; i < 10; i++) {
        let numero = parseInt(prompt("Ingrese un número:"));
        if (numero > 50) {
            contador++;
        }
    }
    alert("Hay " + contador + " números mayores a 50.");
}
