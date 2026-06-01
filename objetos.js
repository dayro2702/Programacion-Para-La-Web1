console.log(Math.round(2.95))
console.log(Math.round(2.92))
console.log(Math.ceil(2.95))
console.log(Math.ceil(2.91))
console.log(Math.floor(2.97))
console.log(Math.floor(2.94))
console.log(Math.sin(45))
console.log(Math.cos(90))
console.log(Math.exp(2))
console.log(Math.log(10))
console.log(Math.abs(-10))
console.log(Math.max(120, 35, 78, 390, 456))
console.log(Math.min(120, 35, 78, 390, 456))
console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.round(Math.random()*10))
console.log(Math.sqrt(225))
console.log(Math.pow(2,7))


//Funciones de texto (String)
let texto = 'Estimados estudiantes de SISTEMAS ATENEA 2. No duerman tanto. No hablen tanto. NO se les aconseja.'
console.log(texto.length);
console.log(texto.slice(0, 21));
let cadena =texto.substring(25,42); 
console.log(cadena)
console.log(texto.replace(cadena, "CESDE"))
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
console.log(texto.concat(cadena))
let mastexto = 'E S T I M A D O S  e s t u d i a n t e s'
console.log(mastexto.trim())
console.log(mastexto.split("S"))


let frutas  = ['Mora', 'Uva', 'Piña', 'Fresa', 'Pera'];
console.log(frutas.length) //Cantidad de elementos del arreglo (length)
console.log(frutas[3])
frutas[5] = "Kiwi"
console.log(frutas)
let masFrutas = frutas.with(3, "Lima") 
console.log(masFrutas)
console.log(frutas.at(-1))


let letras  = ["A", "B", "C", "D", "E"];
console.log(letras.pop())
console.log(letras.push("F", "G"))
console.log(letras)
console.log(letras.shift())
console.log(letras.unshift("C","E","S","D","E"))
console.log(letras.sort())
console.log(letras.reverse())


let numeros  = [10, 15, 42, 35, 13, 85, 22, 22, 99, 75];
for (let num of numeros) {
     document.write(num);
     document.write('<br>');
}
let i=0;
while(i<numeros.length){
  document.write(numeros[i]);
  document.write('<br>');
  i++;
}
i = 0;
do {
  document.write(numeros[i]);
  document.write('<br>');
  i++;
} while(i<numeros.length)
suma = 0
for (i = 0; i < numeros.length; i++) {
     suma=suma+numeros[i];
}
document.write(suma)


