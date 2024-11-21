// Sumar 2 números y retornar el resultado
function funcion1(){
    let num1 = 5;
    let num2 = 3;
    let resultado = sumar(num1,num2);
    console.log("La suma de " + num1 + " y " + num2 + " es: " + resultado);
}

function sumar(a,b){
    return a + b;
}

// Recibe nombre como parametro y mostrar saludo en consola
function funcion2(){
    let nombre = "Astrid";
    saludar(nombre);
}

function saludar(nombre){
    console.log("Hola " + nombre + "!");
}

// Calcular el area de un circulo y retornar el resultado
function funcion3(){
    let radio = 4;
    let area = calcularAreaCirculo(radio);
    console.log("El area de un circulo con radio " + radio + " es: " + area);
}

function calcularAreaCirculo(radio){
    return Math.PI * Math.pow(radio, 2);
}

// Recibir dos numeros y retornar el mayor de ellos
function funcion4(){
    let num1 = 10;
    let num2 = 20;
    let mayor = obtenerMayor(num1, num2);
    console.log("El mayor entre " + num1 + " y " + num2 + " es: " + mayor);
}

function obtenerMayor(a, b){
    return a > b ? a : b;
}

// Recibir un numero y devolver true su es par o false si es impar
function funcion5(){
    let numero = 8;
    let esPar = verificarPar(numero);
    console.log("¿Es " + numero + " par? " + esPar);
}

function verificarPar(numero){
    return numero % 2 === 0;
}

// Función que tome un array de números y devuelva el promedio
function funcion6(){
    let numeros = [5, 10, 15, 20];
    let promedio = calcularPromedio(numeros);
    console.log("El promedio de " + numeros + " es: " + promedio);
}

function calcularPromedio(arr){
    let suma = arr.reduce((a, b) => a + b, 0);
    return suma / arr.length;
}