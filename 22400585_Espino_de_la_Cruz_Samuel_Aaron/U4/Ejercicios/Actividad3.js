/*
1-. Elabora un programa que contenga una función llamada potencia y reciba dos parámetros; base y exponente. 
La función deberá retornar la potencia de acuerdo con los parámetros recibidos. El cálculo de la potencia 
se realizará por medio de un ciclo for.
*/

function potencia(base, exponente) {
    let resultado = 1;

    for (let i = 0; i < exponente; i++) {
        resultado = resultado * base;
    }

    console.log(base + " elevado a " + exponente + " es " + resultado);

    return resultado;
}

//potencia(2, 3);

/*
2-. Cajero automático

Simula un cajero con un saldo inicial de $5000.

Mostrar un menú:

Consultar saldo
Depositar
Retirar
Salir

No permitir retirar más dinero del disponible.

*/

function Cajero() {


    let saldo = 5000;
    let opcion;

    do {

        opcion = Number(prompt(
            "CAJERO AUTOMÁTICO\n\n" +
            "1. Consultar saldo\n" +
            "2. Depositar\n" +
            "3. Retirar\n" +
            "4. Salir"
        ));

        switch (opcion) {

            case 1:
                alert("Saldo disponible: $" + saldo);
                break;

            case 2:
                let deposito = Number(prompt("Cantidad a depositar:"));
                saldo += deposito;
                alert("Depósito realizado.");
                break;

            case 3:
                let retiro = Number(prompt("Cantidad a retirar:"));

                if (retiro > saldo) {
                    alert("No hay saldo suficiente.");
                } else {
                    saldo -= retiro;
                    alert("Retiro realizado.");
                }
                break;

            case 4:
                alert("Gracias por usar el cajero.");
                break;

        }

    } while (opcion != 4);

}

//Cajero();

/*
3-. Juego de dados
Genera dos dados hasta que ambos tengan el mismo valor.
*/

function Dados() {

    let dado1, dado2;
    let lanzamientos = 0;

    do {

        dado1 = Math.floor(Math.random() * 6) + 1;
        dado2 = Math.floor(Math.random() * 6) + 1;

        console.log(dado1 + " - " + dado2);

        lanzamientos++;

    } while (dado1 != dado2);

    console.log("Se necesitaron " + lanzamientos + " lanzamientos.");

}

//Dados();

/*
4-. Adivinar número
La computadora genera un número entre 1 y 100. El usuario tiene máximo 7 intentos. Después de cada intento indicar Más grande o Más pequeño.

*/

function AdivNum() {

    let numero = Math.floor(Math.random() * 100) + 1;
    let intento;
    let contador = 1;

    while (contador <= 7) {

        intento = Number(prompt("Intento " + contador + ": Adivina el número (1-100)"));

        if (intento == numero) {
            alert("¡Felicidades! Adivinaste el número.");
            break;
        } else if (intento < numero) {
            alert("Más grande");
        } else {
            alert("Más pequeño");
        }

        contador++;
    }

    if (contador > 7 && intento != numero) {
        alert("Se terminaron los intentos. El número era " + numero);
    }

}

//AdivNum();

/*
5.- Crea un programa que simule el registro de ventas de una tienda. Cada venta debe contener el nombre del vendedor, 
el nombre del producto, la cantidad vendida y el precio unitario.

El programa debe permitir registrar múltiples ventas (solicitándolos mediante prompt()) y al finalizar debe mostrar en 
consola el total de ventas realizadas, el total de ingresos generados, cuántas unidades se vendieron de cada producto y 
cuál fue el vendedor que generó el mayor monto en ventas.

El ejercicio debe aplicar ciclos, arreglos, objetos, condicionales y usar métodos como .push(), .map(), .forEach() o .reduce().
*/

function Ventas() {

    let ventas = [];
    let opcion;

    do {

        let vendedor = prompt("Nombre del vendedor:");
        let producto = prompt("Nombre del producto:");
        let cantidad = Number(prompt("Cantidad vendida:"));
        let precio = Number(prompt("Precio unitario:"));

        ventas.push({
            vendedor: vendedor,
            producto: producto,
            cantidad: cantidad,
            precio: precio
        });

        opcion = prompt("¿Registrar otra venta? (si/no)");

    } while (opcion.toLowerCase() == "si");

    console.log("Total de ventas realizadas: " + ventas.length);

    let totalIngresos = ventas.reduce(function(total, venta) {
        return total + (venta.cantidad * venta.precio);
    }, 0);

    console.log("Total de ingresos: $" + totalIngresos);

    let productos = {};

    ventas.forEach(function(venta) {
        if (productos[venta.producto]) {
            productos[venta.producto] += venta.cantidad;
        } else {
            productos[venta.producto] = venta.cantidad;
        }
    });

    console.log("Unidades vendidas por producto:");

    for (let producto in productos) {
        console.log(producto + ": " + productos[producto] + " unidades");
    }

    let vendedores = {};

    ventas.forEach(function(venta) {
        let total = venta.cantidad * venta.precio;

        if (vendedores[venta.vendedor]) {
            vendedores[venta.vendedor] += total;
        } else {
            vendedores[venta.vendedor] = total;
        }
    });

    let mejorVendedor = "";
    let mayorVenta = 0;

    for (let vendedor in vendedores) {
        if (vendedores[vendedor] > mayorVenta) {
            mayorVenta = vendedores[vendedor];
            mejorVendedor = vendedor;
        }
    }

    console.log("Vendedor con más ventas: " + mejorVendedor + " ($" + mayorVenta + ")");
}

//Ventas();