//Pedir un número y mostrar si es mayor que 10
function condicional1() {
    let numero = prompt("Ingrese un número:");
    if (numero > 10) {
        alert("El número es mayor que 10");
    }
}

//Pedir al usuario y mostrar mensaje si es mayor de 18 años
function condicional2() {
    let edad = prompt("Ingrese su edad:");
    if (edad >= 18) {
        alert("Es mayor de 18 años");
    }
}

//Pedir calificación númerica (0-100) y si es mayor a 50 muestra aprobado
function condicional3() {
    let calificacion = prompt("Ingrese una calificación (0-100):");
    if (calificacion >= 50) {
        alert("Aprobado");
    }
}

//Verificar si el numero introducido es positivo
function condicional4() {
    let numero = prompt("Ingres un número:");
    if (numero > 0) {
        alert("El número es positivo");
    }
}

//Pedir dos números y mostrar cual de ellos es mayor si alguno lo es
function condicional5() {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    if (num1 > num2) {
        alert(num1 + " es mayor que " + num2);
    } else if (num2 > num1) {
        alert(num2 + " es mayor que " + num1);
    }
}