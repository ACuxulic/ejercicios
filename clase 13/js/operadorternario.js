//Pedir edad para pedir si es mayor o menor de edad
function operadorternario1() {
    let edad = prompt("Ingrese su edad:");
    let resultado = (edad >= 18) ? "Mayor de edad" : "Menor de edad";
    alert(resultado);
}

//Pedir número para mostrar si es par o impar
function operadorternario2() {
    let numero = prompt("Ingrese un número:");
    let resultado = (numero % 2 === 0) ? "Par" : "Impar";
    alert(resultado);
}

//Pedir dos número y mostrar cual es mayor
function operadorternario3() {
    let num1 = prompt("Ingrese el primer número");
    let num2 = prompt("Ingrese el segundo número:");
    let mayor = (num1 > num2) ? num1 : num2;
    alert("El número mayor es: " + mayor);
}

//Recibir valor de temperatura para mostrar "Calor" o "Frio" según el valor
function operadorternario4() {
    let temperatura = prompt("Ingrese la temperatura:");
    let resultado = (temperatura >= 20) ? "Calor" : "Frío";
    alert(resultado);
}

//Pedir año de nacimiento para decir si puede votar
function operadorternario5() {
    let anoNacimiento = prompt("Ingrese su año de nacimiento:");
    let anoActual = new Date().getFullYear();
    let edad = anoActual - anoNacimiento;
    let puedeVotar = (edad >= 18) ? "Puede votar" : "No puede votar";
    alert(puedeVotar);
}