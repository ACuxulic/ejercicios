//Calificación al usuario
function EstructuraCondicional1(){
    let nota = prompt("Ingrese su calificación:");
    if (nota >= 60){
        alert("Aprobado");
    } else {
        alert("Reprobado");
    }
}

//Pedir número y ver si es negativo o positivo
function EstructuraCondicional2() {
    let numero = prompt("Ingrese un número");
    if (numero > 0) {
        alert("El número es positivo");
    } else if (numero <0) {
        alert("El número es negativo");
    } else {
        alert("El nímero es cero");
    }
}

//Pedir número del 1 al 7 luego decir dia de la semana
function EstructuraCondicional3() {
    let dia = prompt("Ingrese un número del 1 al 7:");
    switch (parseInt(dia)) {
        case 1: alert("Domingo"); break;
        case 2: alert("Lunes"); break;
        case 3: alert("Martes"); break;
        case 4: alert("Miercoles"); break;
        case 5: alert("Jueves"); break;
        case 6: alert("Viernes"); break;
        case 7: alert("Sábado"); break;
        default: alert("Número fuera del rango");
    }
}

//Pedir 2 numeros y mostrar cual es el mayor
function EstructuraCondicional4() {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    let mayor = (num1 > num2) ? num1 : num2;
    alert("El número mayor es: " + mayor);
}

//Pedir edad y definir si es mayor de edad o menor de edad
function EstructuraCondicional5() {
    let edad = prompt("Ingrese su edad:");
    if (edad >= 18) {
        alert("Usted es mayor de edad");
    } else {
        alert("Usted es menor de edad");
    }
}

//Pedir número y mostrar si es divisible por 3, 5 o ambos
function EstructuraCondicional6 () {
    let numero = prompt("Ingrese un número:");
    switch (true) {
        case (numero % 3 === 0 && numero % 5 === 0):
        alert("Es divisible por 3 y 5");
            break;
        case (numero % 3 === 0):
            alert("Es divisible por 3");
            break;
        case (numero % 5 === 0):
            alert("Es divisible por 5");
            break;
        default:
            alert("No es divisible ni por 3 ni por 5");
    }
}