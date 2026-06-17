let valorFinal = 0;
let historial = [];

function validarHorario(fecha){
    const hora = fecha.getHours();
    return hora >= 5 && hora <= 12;
}

function calcularPago(){
    const tipo =
        document.getElementById("tipoVehiculo").value;
    const placa =
        document.getElementById("placa").value.toUpperCase();
    const ingreso =
        new Date(document.getElementById("ingreso").value);
    const salida =
        new Date(document.getElementById("salida").value);
    if(tipo === ""){
        alert("Seleccione el tipo de vehículo");
        return;
    }

    if(placa.trim() === ""){
        alert("Ingrese una placa");
        return;
    }

    if(salida <= ingreso){
        alert("La fecha de salida debe ser mayor");
        return;
    }

    if(!validarHorario(ingreso) || !validarHorario(salida)){
        alert("Horario permitido: 5:00 AM a 12:00 PM");
        return;
    }

    const minutos =
        Math.ceil((salida - ingreso)/(1000*60));

    let tarifa = 0;

    if(tipo === "Automovil"){
        tarifa = 125;
    }else{
        tarifa = 95;
    }

    let valor = minutos * tarifa;
    let descuento = 0;

    if(tipo === "Automovil"){
        const ultimoDigito =
            parseInt(placa.charAt(placa.length - 1));
        const dia =
            ingreso.getDay();
        if(!isNaN(ultimoDigito) &&
           ultimoDigito % 2 === dia % 2){
            descuento = valor * 0.25;
        }
    }

    valor -= descuento;
    valor = Math.ceil(valor / 50) * 50;
    valorFinal = valor;
    const horas =
        (minutos / 60).toFixed(2);
    document.getElementById("resultado").innerHTML = `
        <p><strong>Tiempo:</strong> ${horas} horas</p>
        <p><strong>Minutos:</strong> ${minutos}</p>
        <p><strong>Descuento:</strong> $${descuento.toLocaleString()}</p>
        <p><strong>Total a pagar:</strong> $${valor.toLocaleString()}</p>
    `;

    const registro = {
        fecha: new Date().toLocaleDateString(),
        tipoVehiculo: tipo,
        placa: placa,
        tiempoHoras: horas,
        valorPagar: valor
    };

    historial.push(registro);
    localStorage.setItem(
        "parqueadero",
        JSON.stringify(historial)
    );
}

function generarCambio(){
    const dinero =
        Number(document.getElementById("dinero").value);
    if(dinero < valorFinal){
        alert("Dinero insuficiente");
        return;
    }

    let cambio =
        dinero - valorFinal;
    const denominaciones =
    [50000,20000,10000,5000,2000,1000,500,200,100,50];

    let resultado =
        `<h3>Cambio: $${cambio.toLocaleString()}</h3><ul>`;
    for(let valor of denominaciones){
        let cantidad =
            Math.floor(cambio / valor);
        if(cantidad > 0){
            resultado += `
                <li>
                    $${valor.toLocaleString()} : ${cantidad}
                </li>
            `;
            cambio %= valor;
        }
    }

    resultado += "</ul>";

    document.getElementById("cambio").innerHTML =
        resultado;
}