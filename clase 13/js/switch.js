//Pedir número del 1 al 7 y mostrar el día de la semana que corresponde
function switch1() {
    let dia = prompt("Ingrese un número del 1 al 7:");
    switch (parseInt(dia)) {
        case 1: alert("Lunes"); break;
        case 2: alert("Martes"); break;
        case 3: alert("Miercoles"); break;
        case 4: alert("Jueves"); break;
        case 5: alert("Viernes"); break;
        case 6: alert("Sábado"); break;
        case 7: alert("Domingo"); break;
        default: alert("Número fuera del rango");
    }
}

//Recibir letras (A,B,C) y mostrar en consola Exelente, Bien o Regular
function switch2() {
    let letra = prompt("Ingrese una letra (A, B, C):").toUpperCase();
    switch (letra) {
        case "A": console.log("Excelente"); break;
        case "B": console.log("Bien"); break;
        case "C": console.log("Regular"); break;
        default: console.log("Letra Invalida");
    }
}

//Pedir número del 1 al 12 y mostrar mes correspondiente
function switch3() {
    let mes = prompt("Ingrese un número del 1 al 12:");
    switch (parseInt(mes)) {
        case 1: alert("Enero"); break;
        case 2: alert("Febrero"); break;
        case 3: alert("Marzo"); break;
        case 4: alert("Abril"); break;
        case 5: alert("Mayo"); break;
        case 6: alert("Junio"); break;
        case 7: alert("Julio"); break;
        case 8: alert("Agosto"); break;
        case 9: alert("Septiembre"); break;
        case 10: alert("Octubre"); break;
        case 11: alert("Noviembre"); break;
        case 12: alert("Diciembre"); break;
        default: alert("Número fuera del rango");
    }
}

//Pedir número y mostrar Par o Impar según el número
function switch4() {
    let numero = prompt("Ingres un número:");
    switch (numero % 2) {
        case 0: alert("Par"); break;
        case 1: alert("Impar"); break;
        default: alert("Número no valido");
    }
}

//Recibir valor de semaforo (verde, amarillo, rojo) mostra mensaje según el color
function switch5() {
    let color = prompt("Ingres un color de semáforo (verde, amarillo, rojo):").toLowerCase();
    switch (color) {
        case "verde": alert("Puede avanzar"); break;
        case "amarillo": alert("Precaución"); break;
        case "rojo": alert("Deténgase"); break;
        default: alert("Color Invalido");
    }
}