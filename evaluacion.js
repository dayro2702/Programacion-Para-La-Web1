/*let numero_de_cuenta = prompt("Ingrse numero de cuenta (7 digitos unicamente): ");
let estrato = parseInt(prompt("Ingrese el estrato (De 1 a 6): "));
let claseUso = parseInt(prompt("Ingrese clase de uso:\n1. Residencial\n2. Industrial\n3. Comercial"));
let consumo = parseFloat(prompt("Ingrese consumo de agua en m3: "));

if (numero_de_cuenta.length != 7){
    document.write("Numero de cuenta invalido");
} else if (estrato < 1 || estrato > 6){
    document.write("Estracto invalido");
} else if (claseUso < 1 || claseUso > 3){
    document.write("Clase de uso invalida");
} else if (consumo < 0){
    document.write("Consumo invalido");
} else {
    let valorConsumo = 0

    if (consumo < 100){
        valorConsumo = consumo * 33.90;
    } else if (consumo >= 100 && consumo <= 150){
        valorConsumo = consumo * 95.45;
    } else if (consumo >= 150 && consumo < 275){
        valorConsumo = consumo * 245.75;
    } else {
        valorConsumo = consumo * 295.50;
    }

    let cargoFijo = 0;

    if (estrato == 1){
        cargoFijo = 25000;
    } else if (estrato == 2){
        cargoFijo = 32000;
    } else if (estrato == 3){
        cargoFijo = 41500;
    } else if (estrato == 4){
        cargoFijo = 60500;
    } else if (estrato == 5){
        cargoFijo = 90000;
    } else { 
        cargoFijo = 105500;
    }

    let totalAcueducto = cargoFijo + valorConsumo;

    let alcantarillado;

    if (claseUso == 1){
        alcantarillado = totalAcueducto * 0.50;
    } else if (claseUso == 2){
        alcantarillado = totalAcueducto * 0.85;
    } else {
        alcantarillado = totalAcueducto * 0.70;
    }

    let aseo = 0;

    if (estrato == 1 || estrato == 2){
        aseo = 17830;
    } else if (estrato == 3 || estrato == 4){
        aseo = 25750;
    } else {
        aseo = 46550;
    }

    let totalPagar = totalAcueducto + alcantarillado + aseo;

    document.write("===FACTURA DEL CLIENTE===");

    document.write("Numero de cuenta: " + numero_de_cuenta + "<br><br>");
    document.write("Estracto: " + estrato + "<br><br>");
    document.write("Clase de uso: " + claseUso + "<br><br>");
    document.write("Consumo de agua: " + consumo + "m3<br><br>");

    document.write("Valor consumo: $" + valorConsumo + "<br><br>");
    document.write("Cargo fijo: $" + cargoFijo + "<br><br>");
    document.write("Total acueducto: $" + totalAcueducto + "<br><br>");

    document.write("Alcantarillado: $" + alcantarillado + "<br><br>");
    document.write("Aseo: $" + aseo + "<br><br>");
    document.write("---TOTAL A PAGAR---: $" + totalPagar);
}*/



//EJERCICO FABRICA DE CHOCOLATE
let blanca = 0;
let negra = 0;
let ambas = 0;
let ninguna = 0;

for (let i = 1; i <= 100; i++) {

    let respuesta = parseInt(prompt(
        "Persona " + i +
        "\n1. Chocolatina Blanca" +
        "\n2. Chocolatina Negra" +
        "\n3. Ambas" +
        "\n4. Ninguna"
    ));

    if (respuesta < 1 || respuesta > 4) {
        document.write("Respuesta inválida <br>");
    }
    else {

        if (respuesta == 1) {
            blanca++;
        }
        else if (respuesta == 2) {
            negra++;
        }
        else if (respuesta == 3) {
            ambas++;
        }
        else {
            ninguna++;
        }

    }

}

let porcentajeAmbas = (ambas * 100) / 100;
let porcentajeNinguna = (ninguna * 100) / 100;

document.write("===RESULTADO DE LA ENCUESTA===");

document.write("Personas que prefieren Chocolatina Blanca: " + blanca + "<br><br>");

document.write("Personas que prefieren Chocolatina Negra: " + negra + "<br><br>");

document.write("Porcentaje que prefieren ambas: " + porcentajeAmbas + "%<br><br>");

document.write("Porcentaje que no consumen ninguna: " + porcentajeNinguna + "%");
