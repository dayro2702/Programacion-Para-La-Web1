/*let nombre, edad;
nombre = prompt("Ingrese su nombre ...");
edad = prompt('Ingrese su edad');
if (edad >= 18) {
    document.write('BIENVENIDO ', nombre);
} else {
    if (edad < 18) {
        document.write(nombre, ' es menor de edad');
    } 
    else {
        document.write('NO HA INGRESADO DATOS');
    }
} //Ctrl + F (Buscar), Ctrl + H (Reemplazar), Alt + Shif + F (Organizar codigo), Ctrl + A (Selecciinar todo el texto) 
// Dado un numero entre 1 y 5, determine el dia laboral que corresponde. (Alt + Z ajustar todo en el tamño de la pantalla)



let dia;
dia = prompt("Ingrese un numero entre 1 y 5");
if (dia == 1) { //Para comparacion es doble igual (==) 
    document.write("Lunes");
} else if (dia == 2) {
        document.write("Martes");
    } else if (dia == 3) {
            document.write("Miercoles");
        } else if (dia == 4) {
                document.write("Jueves");
            } else if (dia == 5) {
                    document.write("Viernes");
                } else {
                    document.write("ERROR. Numero incorrecto");
                }



//Utilizando SWITCH
var dia;
dia = parseInt(prompt("Ingrse un numero entre 1 y 5"));
switch (dia){
    case 1: document.write("Lunes"); break;
    case 2: document.write("Martes"); break;
    case 3: document.write("Miercoles"); break;
    case 4: document.write("Jueves"); break;
    case 5: document.write("Viernes"); break;
    default: document.write("Numero Incorrecto"); break;
}



//CONDICIONALES CON EL OPERADOR LOGICO &&
var notaPractica, notaTeorica, notaDef;
notaTeorica = parseFloat(prompt("Ingrese nota Teorica"));
notaPractica = parseFloat(prompt("Ingrese nota Practica"));
if (notaPractica >= 4 && notaTeorica >= 4) {
    notaDef = notaTeorica * 0.65 + notaPractica * 0.35;
} else {
    notaDef = 0;
}
 document.write("Nota Definita: " + notaDef);



var valorVenta, cantidadAutos, comision;
valorVenta = prompt("Ingrese valor en ventas: ");
cantidadAutos = prompt("Ingrese cantidad de autos vendidos: ");
if (valorVenta > 500000000 || cantidadAutos > 10) {
    comision = valorVenta * 0.025;
} else {
    comision = 0;
} 
document.write("Comision: $" + comision);*/