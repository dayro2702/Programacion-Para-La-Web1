/*let num = 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
num += 1;



let num = 100;  //Valor inicial
while (num >= 0){  // Condicion VERDADERA
    console.log(num);
    num -= 10;
} 



let num = 2;
do {
    console.log(num);
    num += 2;
} while (num <= 30);



for (let num = 1; num <= 30; num += 2){
    console.log(num);
}



//EJERCICIO 1
let temperatura, menores, iguales, mayores;
menores = 0;
iguales = 0;
mayores = 0;

while (temperatura !== 99 && temperatura !== -99) {
    temperatura = parseInt(prompt("Ingrese una temperatura:"));

    if (temperatura == 99 || temperatura == -99) {
        break;
    }

    if (temperatura < 0) {
        menores++;
    } else if (temperatura == 0) {
        iguales++;
    } else {
        mayores++;
    }
}
document.write("Temperaturas menores que 0: " + menores);
document.write("<br>");
document.write("Temperaturas iguales a 0: " + iguales);
document.write("<br>");
document.write("Temperaturas mayores que 0: " + mayores);
document.write("<br>");



//EJERCICIO 2
let numero, d1, d2, d3, d4;

do {

    numero = Number(prompt("Ingrese un número de 4 dígitos"));

    if (numero < 1000 || numero > 9999) {
        document.write("Error: número no válido <br>");
    }

} while (numero < 1000 || numero > 9999);

d1 = parseInt(numero / 1000);
d2 = parseInt(numero / 100) % 10;
d3 = parseInt(numero / 10) % 10;
d4 = numero % 10;

if (d1 % 2 === 0) {
    document.write("Hay aeronave en el aire <br>");
} else {
    document.write("No hay aeronave en el aire <br>");
}

if (d2 === 1) {
    document.write("Avión militar <br>");
} else if (d2 === 2) {
    document.write("Avión civil de carga <br>");
} else if (d2 === 3) {
    document.write("Avión civil de pasajeros <br>");
} else if (d2 === 4) {
    document.write("Aeronave sin permiso <br>");
} else if (d2 === 5) {
    document.write("Aeronave de supertransporte <br>");
} else if (d2 === 6) {
    document.write("Aeronave enemiga <br>");
} else if (d2 === 7) {
    document.write("Avión mixto <br>");
} else if (d2 === 8) {
    document.write("Helicóptero <br>");
} else if (d2 === 9) {
    document.write("Globo aerostático <br>");
} else {
    document.write("Dirigible <br>");
}

document.write("Distancia: " + d3 + " km <br>");

if (d4 === 0 || d4 === 1) {
    document.write("Dirección: Norte <br>");
} else if (d4 === 2 || d4 === 3) {
    document.write("Dirección: Sur <br>");
} else if (d4 === 4 || d4 === 5) {
    document.write("Dirección: Oriente <br>");
} else if (d4 === 6 || d4 === 7) {
    document.write("Dirección: Occidente <br>");
} else {
    document.write("Dirección: Desconocida <br>");
}*/



//EJERCICIO HUEVOS
let tipo1, tipo2, tipo3, cant1, cant2, cant3, canTotal, PrecioT;
let frec, dia;
do {
    cant1 = prompt("Cantidad de huevos Tipo A: ");
    } while (cant1 < 0);
do {
    cant2 = prompt("Cantidad de huevos tipo AA: ")
    } while (cant2 < 0);
do {
    cant3 = prompt("Cantidad de huevos tipo AAA: ")
    } while (cant3 < 0);
do {
    frec = prompt("Si el cliente frecuente digita 1, de lo contrario 0: ")
    } while (frec != 1 && frec != 0);
do {
    dia = prompt("Digite 1 si compro de L-V; 2 si compro el sabado; 3 si compro el domingo ")
    } while (dia < 1 || dia > 3);