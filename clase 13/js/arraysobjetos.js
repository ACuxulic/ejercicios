// Programa 1: Array de personas
function marrayobjet1() {
    let personas = [
        { nombre: "Ana", edad: 25 },
        { nombre: "Juan", edad: 30 },
        { nombre: "María", edad: 28 }
    ];

    personas.forEach(persona => console.log(persona.nombre));
}

// Programa 2: Array de coches
function arrayobjet2() {
    let coches = [
        { marca: "Toyota", modelo: "Corolla" },
        { marca: "Honda", modelo: "Civic" },
        { marca: "Ford", modelo: "Fiesta" },
        { marca: "BMW", modelo: "X5" },
        { marca: "Audi", modelo: "A3" }
    ];

    coches.forEach(coche => console.log(coche.modelo));
}

// Programa 3: Array de productos
function arrayobjet3() {
    let productos = [
        { nombre: "Televisor", precio: 300 },
        { nombre: "Celular", precio: 150 },
        { nombre: "Teclado", precio: 50 },
        { nombre: "Computadora", precio: 800 },
        { nombre: "Mouse", precio: 30 }
    ];

    productos.filter(producto => producto.precio > 100).forEach(producto => console.log(producto.nombre));
}

// Programa 4: Array de alumnos
function arrayobjet4() {
    let alumnos = [
        { nombre: "Carlos", nota: 70 },
        { nombre: "Laura", nota: 55 },
        { nombre: "Pedro", nota: 65 },
        { nombre: "Ana", nota: 40 },
        { nombre: "Sofía", nota: 90 }
    ];

    alumnos.filter(alumno => alumno.nota >= 60).forEach(alumno => console.log(alumno.nombre));
}

// Programa 5: Array de libros
function arrayobjet5() {
    let libros = [
        { titulo: "El Quijote", autor: "Miguel de Cervantes" },
        { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
        { titulo: "1984", autor: "George Orwell" },
        { titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón" },
        { titulo: "Orgullo y prejuicio", autor: "Jane Austen" }
    ];

    libros.forEach(libro => console.log(libro.titulo));
}

// Programa 6: Array de películas
function arrayobjet6() {
    let peliculas = [
        { titulo: "Inception", director: "Christopher Nolan", ano: 2010 },
        { titulo: "The Matrix", director: "Lana Wachowski y Lilly Wachowski", ano: 1999 },
        { titulo: "Interstellar", director: "Christopher Nolan", ano: 2014 },
        { titulo: "El Padrino", director: "Francis Ford Coppola", ano: 1972 },
        { titulo: "Pulp Fiction", director: "Quentin Tarantino", ano: 1994 }
    ];

    peliculas.forEach(pelicula => {
        console.log(`Película: ${pelicula.titulo}, dirigida por ${pelicula.director}, año: ${pelicula.ano}`);
    });
}
