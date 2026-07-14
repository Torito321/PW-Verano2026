
//var nombre = "Samuel Aaron Espino de la Cruz";
//console.log(nombre);

//let promedio = 9.5;
//const edad = 20;

/*
let se tiene que declarar dentro de un bloque de código,
 mientras que var se puede declarar fuera de un bloque de código.

 let es cualquier tipo de dato.
*/

if (true) {
    var libro = "Libro 1";
    let animal = "Gato";
    animal = 5;
    //console.log(animal);
}

//console.log(libro);

/*
El prompt() es una función que permite al usuario ingresar datos 
a través de un cuadro de diálogo en el navegador. 
*/

/*
let n1 = parseInt(prompt("Ingrese un número: "));
let n2 = parseInt(prompt("Ingrese otro número: "));
console.log(n1);
console.log(n2);

let suma = n1 + n2;
console.log("La suma es: " + suma);

*/

let suma = 10 + 5;
let resta = 10 - 5;
let multiplicacion = 10 * 5;
let division = 10 / 5;
let residuo = 10 % 5;

console.log("suma: ", suma);
console.log("resta: ", resta);
console.log("multiplicación: ", multiplicacion);
console.log("división: ", division);
console.log("residuo: ", residuo);

console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 3);
console.log(5 <= 3);
console.log(5 != 3);
console.log(5 == 5);
console.log(5 === "5");

/*
if
*/

let Calificacion = 90;

if (Calificacion >= 90) {
    console.log("Exelente");
} else if (Calificacion >= 70) {
    console.log("Aprobado");
} else {
    console.log("Reprobado");
}

/*
for
*/

let tabla = 5
for (let i = 1; i <= 10; i++) {

    //console.log("Numero: " + 5 + "X" + i + "=" + i*tabla);
    console.log(`${tabla} x $(i) = ${tabla * i}`);

}

/*
while
*/

let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++;
}

/*
Crear funciones 
*/

function saludar(nombre) {

    console.log("Hola " + nombre);

}

saludar("Samuel");

function aleatorio() {

    let n = Math.floor(Math.random() * 1000 + 1);
    console.log(n);

}
aleatorio();

let numeros = [5, 2];
numeros.push(20);
numeros.push(8);
numeros.push(53);

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}


let persona = {
    nombre: "Samuel",
    edad: 20,
    ciudad: "Tepic"
}
persona.nombre = "Aaron";
persona.carrera = "ISC";
console.log(persona);

let num = [1, 2, 3, 4, 5];

let dobles = num.map(num => {

    return num * 2;

});

console.log(dobles);