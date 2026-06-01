/*//EJERCICIO
var unidadLong, cantidad, mi, km ,mt;
unidadLong = parseInt(prompt("Digite 1 para Millas - 2 para Kilometros - 3 para Metros"));
cantidad = parseInt(prompt("Digite la distancia"));
switch (unidadLong){
    case 1:
        km = cantidad * 1.6093;
        mt = cantidad * 1609.34;
        document.write(cantidad + "Millas, equivalen a " + km + "Kilometros, y a " + mt + "Metros");
        break;
    case 2:
        mi = cantidad * 0.621371;
        mt = cantidad * 1000;
        document.write(cantidad + "Kilometros, equivalen a " + mi + "Millas, y a " + mt + "Metros");
        break;
    case 3:
        mi = cantidad * 0.000621371;
        km = cantidad / 1000;
        document.write(cantidad + "Metros, equivalen a " + mi + "Millas, y a " + km + "Kilometros");
        break;
    default:
        document.write("Valor INCORRECTO");
        break;
}



//EJERCICIO 2
 var d1, d2, d3, d4, d5, d6, num, coc;
 num = parseInt(prompt("Digite un numero de 6 cifras"));
 d6 = num % 10;
 coc = Math.trunc(num / 10);
 d5 = coc % 10;
 coc = Math.trunc(coc / 10);
 d4 = coc % 10;
 coc = Math.trunc(coc / 10);
 d3 = coc % 10;
 coc = Math.trunc(coc / 10);
 d2 = coc % 10;
 coc = Math.trunc(coc / 10);
 d1 = coc % 10;
 coc = Math.trunc(coc / 10);
 document.write("La suma es: " + (d3 + d4));
 document.write("La multiplicacion es: " + (d1 * d6));
 document.write("La resta es: " + (d2 - d5));

 var suma, mult, rest;
suma = d3 + d4
document.write("La suma de las cifras centrales es: " + suma);
mult = d1 * d6
document.write("La multiplicacion de los extremos es: " + mult);
rest = d2 - d5
document.write("La resta de las cifras es: " + rest);



//EJERCICIO 3
let segundos, minutos, horas;

segundos = parseInt(prompt("Ingrese segundos: "));
minutos = parseInt(prompt("Ingrese minutos: "));
horas = parseInt(prompt("Ingrese horas: "));

segundos = segundos + 1;

if (segundos == 60) {
    segundos = 0;
    minutos = minutos + 1;

    if (minutos == 60) {
        minutos = 0;
        horas = horas + 1;

        if (horas == 24) {  
            horas = 0;
        }
    }
}

alert("Nueva hora: " + horas + ":" + minutos + ":" + segundos);



//EJERCICO 4
var a, b, c, discriminante, x1, x2;

a = parseFloat(prompt("Ingrese el valor de a: "));
b = parseFloat(prompt("Ingrese el valor de b: "));
c = parseFloat(prompt("Ingrese el valor de c: "));

discriminante = (b * b) - (4 * a * c);

if (discriminante > 0) {

    x1 = (-b + Math.sqrt(discriminante)) / (2 * a); //Math.sqrt(Funcion de JavaScript para sacar raiz)
    x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

    alert("Hay dos soluciones reales");
    alert("x1 = " + x1);
    alert("x2 = " + x2);

} else if (discriminante == 0) {

    x1 = (-b) / (2 * a);

    alert("Hay una sola solucion");
    alert("x = " + x1);

} else {

    alert("Hay dos soluciones imaginarias");
}



//EJERCICIO N y X
let x = parseFloat(prompt("Ingresa el valor de X:"));
let n = parseInt(prompt("Ingresa el valor de N (debe ser un número par):"));

let sumaTotal = 0;

for (let i = 2; i <= n; i += 2) {
    let termino = Math.pow(x, i) / i;
    sumaTotal = sumaTotal + termino;
}
console.log("El resultado de la serie es: " + sumaTotal);
alert("El resultado de la serie es: " + sumaTotal);



//EJERCICIO CLASIFICAR PERSONAS POR DEPORTE
let ajedrez = 0;
let atletismo = 0;
let futbol = 0;
let gimnasia = 0;
let natacion = 0;

let totalPersonas = 400;

for (let i = 1; i <= totalPersonas; i++) {

    let opcion = prompt(
        "Persona " + i + " de " + totalPersonas + "\n" +
        "Selecciona el número del deporte que practica:\n" +
        "1. Ajedrez\n" +
        "2. Atletismo\n" +
        "3. Fútbol\n" +
        "4. Gimnasia\n" +
        "5. Natación"
    );

    if (opcion === "1") {
        ajedrez++;
    } else if (opcion === "2") {
        atletismo++;
    } else if (opcion === "3") {
        futbol++;
    } else if (opcion === "4") {
        gimnasia++;
    } else if (opcion === "5") {
        natacion++;
    } else {
        alert("Opción no válida. Esta persona no se sumará a ningún deporte.");
    }
}

let resultados = "--- RESULTADOS DE LA CLASIFICACIÓN ---\n" +
                 "Ajedrez: " + ajedrez + " personas\n" +
                 "Atletismo: " + atletismo + " personas\n" +
                 "Fútbol: " + futbol + " personas\n" +
                 "Gimnasia: " + gimnasia + " personas\n" +
                 "Natación: " + natacion + " personas";

console.log(resultados);
alert(resultados);



//EJERCICIO CONTRASEÑA
const CLAVE_CORRECTA = "Dh123456789";

let intentos = 0;
let accesoConcedido = false;

while (intentos < 3 && accesoConcedido === false) {
    let contraseñaUsuario = prompt("Introduce tu contraseña:");
    intentos++; 

    if (contraseñaUsuario === CLAVE_CORRECTA) {
        alert("Acceso concedido");
        accesoConcedido = true; 
    } else {
        alert("Acceso Denegado");
    }
}
if (accesoConcedido === false) {
    alert("Alerta, intruso");
}



//EJERCICIO NUMEROS PARES
let contadorPares = 0;
let continuar = true;

while (continuar) {
    let numero = parseInt(prompt("Introduce un número par (o un impar para salir):"));

    if (numero % 2 === 0) {
        contadorPares++; // Es par, lo sumamos al contador y el bucle sigue
    } else {
        // Es impar, así que cambiamos la variable para que el bucle se detenga
        continuar = false; 
    }
}
alert("El programa ha terminado porque ingresaste un número impar.");
alert("Cantidad de números pares ingresados: " + contadorPares);



//ARRAYS
//EJERCICIO DIAS DE LA SEMANA
const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
let numero = parseInt(prompt("Por favor digite un numero del 1 al 7: "));

if (isNaN(numero) || numero < 1 || numero > 7) {
    alert("Error: Entrada inválida. Debe ingresar un número entero entre 1 y 7.");
    alert("Error: Debe ingresar un número entero entre 1 y 7.");
} else {
    let diaCorrespondiente = diasSemana[numero - 1];
    
    alert("El día correspondiente al número " + numero + " es: " + diaCorrespondiente);
    alert("El día es: " + diaCorrespondiente);
}



//EJERCICIO SUMA DE NUMEROS
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let suma_total = 0

for (let i = 0; i < numeros.length; i++) {
    suma_total += numeros[i]; 
}

document.write("La suma total es: ", suma_total);



//EJERCICIO CONTADOR NUMEROS PARES INPARES
let numeros = [];

while (true) {
    let entrada = prompt("Introduce un número (0 o texto para terminar):");
    
    if (entrada === null) {
        break;
    }

    if (entrada === "" || entrada === "0") {
        break; 
    }
    
    let numeroConvertido = Number(entrada);
 
    if (numeroConvertido !== numeroConvertido) {
        break;
    }
    
    numeros.push(numeroConvertido);
}

let pares = 0;
let impares = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

alert("Cantidad de números pares: " + pares);
alert("Cantidad de números impares: " + impares);
alert("Array completo: " + numeros);*/
