/*
1. Escribe un programa que genere dos números aleatorios y que escriba en consola 
qué números se generaron. Además, el programa deberá señalar si los números son iguales y, 
en caso de que no lo sean, mostrará cuál es el mayor.
*/
function Ejercicio1() {
    console.log("Ejercicio: 1");

    let n1 = Math.floor(Math.random() * 10 + 1);
    let n2 = Math.floor(Math.random() * 10 + 1);
    console.log("Valor n1: " + n1);
    console.log("Valor n2: " + n2);

    if (n1 == n2) {
        console.log("Los numeros son iguales");
    } else if (n1 > n2) {
        console.log("n1 es mayor a n2")
    } else {
        console.log("n2 es mayor que n1");
    }
}

//Ejercicio1();

/*
2. Escribe un programa que genere de forma continua números entre el 0 y el 5, 
hasta que salga el número 0.
*/

function Ejercicio2() {
    console.log("Ejercicio: 2");

    let n;

    do {

        n = Math.floor(Math.random() * 6);

        console.log(n);

    } while (n != 0);

}

//Ejercicio2();

/*
3. Elabora un programa que genere un número aleatorio entre el 2 y el 10, y 
después escriba la tabla de multiplicar del número generado.
*/

function Ejercicio3() {
    console.log("Ejercicio: 3");

    let nu1 = Math.floor(Math.random() * 9) + 2;
    let nu2 = Math.floor(Math.random() * 9) + 2;
    console.log("La tabla del:  " + nu1);

    for (let i = 1; i <= 10; i++) {
        console.log(`${nu1} x ${i} = ${nu1 * i}`);
    }

    console.log("La tabla del:  " + nu2);

    for (let i = 1; i <= 10; i++) {
        console.log(`${nu2} x ${i} = ${nu2 * i}`);
    }

}

//Ejercicio3();

/*
4. Escribe un programa que solicite 10 números entre el 1 y el 100, y determine 
cuántos de esos números son pares y cuántos son impares.
*/

function Ejercicio4() {
    console.log("Ejercicio 4");

    let par = 0;
    let impar = 0;
    let = numero = 0;
    for (let i = 1; i <= 10; i++) {
        numero = parseInt(prompt("Ingresa el número " + i + " (1-100):"));
        if (numero >= 1 && numero <= 100) {

            if (numero % 2 == 0) {
                par++;
            } else {
                impar++;
            }

        }
    }

    console.log("Numeros pares: " + par);
    console.log("Numeros impares: " + impar);

}

//Ejercicio4();



/*
5. Una tienda departamental paga a sus empleados el 10% de comisión a quienes
vendan menos de $10,000.00 en artículos, mientras que otorga un 15% a quienes vendan $10,000.00 o más.
Diseña un programa que solicite un número entre $5,000.00 y $30,000.00 
(validando la entrada hasta que sea un número válido) correspondiente a las \
ventas de un empleado, y muestre en pantalla cuánto dinero va a recibir por comisión.
*/

function Ejercicio5() {
    console.log("Ejercicio 5");

    let ventas;

    do {
        ventas = parseFloat(prompt("Ingrese las ventas del empleado ($5,000 - $30,000):"));

        if (isNaN(ventas) || ventas < 5000 || ventas > 30000) {
            alert("Dato inválido. Ingrese un número entre 5000 y 30000.");
        }

    } while (isNaN(ventas) || ventas < 5000 || ventas > 30000);

    let comision;

    if (ventas < 10000) {
        comision = ventas * 0.10;
    } else {
        comision = ventas * 0.15;
    }

    console.log("Ventas: $" + ventas.toFixed(2));
    console.log("Comisión: $" + comision.toFixed(2));

    alert(
        "Ventas: $" + ventas.toFixed(2) +
        "\nComisión: $" + comision.toFixed(2)
    );
}

Ejercicio5();