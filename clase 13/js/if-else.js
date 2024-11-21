//Pedir temperatura y mostrar si "Hace frío" si es menor a 20 grados "Hace calor" si es mayor
function ifelse1() {
    let temperatura = prompt("Ingrese la temperatura:");
    if (temperatura < 20) {
        alert("Hce frío");
    } else {
        alert("Hace calor");
    }
}

//Pedir edad y decir al usuario si es menor o mayor de edad
function ifelse2() {
    let edad = prompt("Ingrese su edad:");
    if (edad >= 18)  {
        alert("Es mayor de edad");
    } else {
        alert("Es menor de edad");
    }
}

//Pedir número y mostrar si es par o impar
function ifelse3() {
    let numero = prompt("Ingres un número:");
    if (numero % 2 === 0) {
        alert("El número es par");
    } else {
        alert("El número es impar");
    }
}

//Pedir calificación y mostrar si has aprobado o no (>=60)
function ifelse4() {
    let calificacion = prompt("Ingrese su calificación:");
    if (calificacion >= 60) {
        alert("Aprobado");
    } else {
        alert("Reprobado");
    }
}

//Pedir número y mostrar si es positivo, negativo o cero
function ifelse5 () {
    let numero = prompt("Ingrese un número:");
    if (numero > 0) {
        alert("El número es positivo");
    } else if (numero < 0) {
        alert("El número es negativo");
    } else {
        alert("El número es cero");
    }
}