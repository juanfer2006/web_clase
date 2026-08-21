"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Ejercicio 1
let estudiantes = ["Juan", "Maria", "Carlos", "Ana", "Pedro"];
for (let i = 0; i < estudiantes.length; i++) {
    console.log(estudiantes[i]);
}
// Ejercicio 2
console.log("Cantidad de estudiantes:", estudiantes.length);
// Ejercicio 3
let numeros = [10, 25, 60, 45, 80, 15, 90];
let sumaTotal = 0;
for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i];
}
console.log("Suma total:", sumaTotal);
// Ejercicio 4
let numerosAleatorios = [];
let sumaAleatorios = 0;
for (let i = 0; i < 1500; i++) {
    let numeroAleatorio = Math.round(Math.random() * 100);
    numerosAleatorios.push(numeroAleatorio);
    sumaAleatorios += numeroAleatorio;
}
console.log("Suma total de 1500 números:", sumaAleatorios);
// Ejercicio 5
let promedioPunto3 = sumaTotal / numeros.length;
console.log("Promedio punto 3:", promedioPunto3);
// Ejercicio 6
console.log("Números mayores a 50:");
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 50) {
        console.log(numeros[i]);
    }
}
let persona = {
    nombre: "Carlos",
    edad: 22,
    ciudad: "Medellín"
};
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Ciudad:", persona.ciudad);
let productos = [
    { nombre: "Laptop", precio: 2500 },
    { nombre: "Mouse", precio: 50 },
    { nombre: "Teclado", precio: 120 },
    { nombre: "Monitor", precio: 800 }
];
console.log("Productos:");
for (let i = 0; i < productos.length; i++) {
    console.log(`Producto: ${productos[i].nombre} - Precio: ${productos[i].precio}`);
}
// Ejercicio 9
let productoMasCaro = productos[0];
for (let i = 1; i < productos.length; i++) {
    if (productos[i].precio > productoMasCaro.precio) {
        productoMasCaro = productos[i];
    }
}
console.log(`El producto más caro es: ${productoMasCaro.nombre} con un precio de ${productoMasCaro.precio}`);
let inventario = [
    { nombre: "Laptop", precio: 2500, cantidad: 5 },
    { nombre: "Mouse", precio: 50, cantidad: 20 },
    { nombre: "Teclado", precio: 120, cantidad: 15 },
    { nombre: "Monitor", precio: 800, cantidad: 8 }
];
let totalInventario = 0;
for (let i = 0; i < inventario.length; i++) {
    totalInventario += inventario[i].precio * inventario[i].cantidad;
}
console.log("Valor total del inventario:", totalInventario);
let listaEstudiantes = [
    {
        nombre: "Laura",
        semestre: 3,
        materias: [
            { nombre: "Matemáticas", nota: 4.2 },
            { nombre: "Programación", nota: 4.8 },
            { nombre: "Bases de Datos", nota: 3.9 }
        ]
    },
    {
        nombre: "Andrés",
        semestre: 2,
        materias: [
            { nombre: "Matemáticas", nota: 3.0 },
            { nombre: "Programación", nota: 2.8 },
            { nombre: "Física", nota: 3.2 }
        ]
    },
    {
        nombre: "Sofia",
        semestre: 4,
        materias: [
            { nombre: "Cálculo", nota: 4.5 },
            { nombre: "Algoritmos", nota: 4.0 },
            { nombre: "Redes", nota: 4.2 }
        ]
    }
];
let sumaPromediosTodos = 0;
let promediosEstudiantes = [];
for (let i = 0; i < listaEstudiantes.length; i++) {
    let est = listaEstudiantes[i];
    let sumaNotas = 0;
    for (let j = 0; j < est.materias.length; j++) {
        sumaNotas += est.materias[j].nota;
    }
    let promEstudiante = sumaNotas / est.materias.length;
    promediosEstudiantes.push({ nombre: est.nombre, promedio: promEstudiante });
    sumaPromediosTodos += promEstudiante;
    console.log(`Promedio de ${est.nombre}: ${promEstudiante.toFixed(2)}`);
}
let promedioGeneral = sumaPromediosTodos / listaEstudiantes.length;
console.log(`Promedio de todos los estudiantes: ${promedioGeneral.toFixed(2)}`);
// Ejercicio 12
console.log("Estudiantes con promedio mayor a 3.5:");
for (let i = 0; i < promediosEstudiantes.length; i++) {
    if (promediosEstudiantes[i].promedio > 3.5) {
        console.log(promediosEstudiantes[i].nombre);
    }
}
