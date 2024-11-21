//Objeto persona con las propiedades nombre, edad y ciudad y mostrarlas
function objeto1() {
    let persona = {
        nombre: "Juan",
        edad: 25,
        ciudad: "Ciudad de Guatemala"
    };
    console.log("Nombre: " + persona.nombre);
    console.log("Edad: " + persona.edad);
    console.log("Ciudad: " + persona.ciudad);
}

//Objeto coche con las propiedades marca, modelo y año y mostrarlo en consola
function objeto2() {
    let coche = {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2020,
        descripcion: function() {
            console.log("Coche: " + this.marca + " " + this.modelo + " del año " + this.ano);

        }
    };
    coche.descripcion();
}

//Objeto rectangulo con las propiedades ancho y alto
function objeto3() {
    let rectangulo = {
        ancho: 10,
        alto: 5,
        calcularArea: function() {
            return this.ancho * this.alto;
        }
    };
    console.log("El área del rectangulo es: " + rectangulo.calcularArea());
}

//Objeto libro con las propiedades título, auto y año y mostrar descripción en consola
function objeto4() {
    let libro = {
        titulo: "Cine años de soledad",
        autor: "Gabriel García Márquez",
        ano: 1967,
        descripcion: function() {
            console.log("Libro: '" + this.titulo + "' escrito por " + this.autor + " en el año " + this.ano);
        }
    };
    libro.descripcion();
}

//Ojeto usuario con las propiedades nombre y contraseña y verificar si la contraseña es "123456"
function objeto5() {
    let usuario = {
        nombre: "Carlos",
        contrasena: "123456",
        varificarContrasena: function() {
            let ingreso = prompt("Ingrese la contraseña:");
            if (ingreso === this.contrasena) {
                alert("Contraseña correcta");
            } else {
                alert("Contraseña Incorrecta");
            }
        }
    };
    usuario.varificarContrasena();
}

//Objeto gato con las propiedades nombre y edad
function objeto6() {
    let gato = {
        nombre: "Nicolas",
        edad: 2,
        descripcion: function() {
            return "El gato " + this.nombre + " tiene " + this.edad + " años.";
        }
    };
    alert(gato.descripcion());
}