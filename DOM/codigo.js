let etqP =document.getElementById("parrafo1");
etqP.innerHTML = "Dayro Henao";
etqP.style.color = "green";

let clasep = document.getElementsByClassName("parrafo");
console.log(clasep.length);
clasep[1].innerHTML = "Estudiante CESDE";
clasep[1].style.fontSize = "30px";

let porEtiquta = document.getElementsByTagName("p");
console.log(porEtiquta.length);
porEtiquta[2].innerHTML = "Salida: 6:15 pm";
porEtiquta[2].style.backgroundColor = "red";
porEtiquta[2].style.color = "blue"