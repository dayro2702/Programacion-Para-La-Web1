let num1, num2;

function suma(){
    let num1, num2, suma;
    num1 = parseInt(prompt("Numero 1"));
    num2 = parseInt(prompt("Numero 2"));
    suma = num1 + num2;
    document.write("El resultado de la suma es: " + suma);
    document.write("<br>");
}

function resta(num1, num2){
    let resta;
    resta = num1 - num2;
    document.write("El resultado de la resta es: " + resta);
    document.write("<br>");
}

function mult(num1, num2){
    let result;
    result = num1 * num2;
    return result;
}

suma();
num1 = parseInt(prompt("Numero 1"));
num2 = parseInt(prompt("Numero 2"));
resta(num1, num2);
document.write("El resultado de la multiplicacion es: " + (mult(num1, num2)));
