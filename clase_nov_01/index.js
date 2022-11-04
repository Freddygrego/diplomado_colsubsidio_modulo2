const lista = document.getElementById("lista_dinamica");

console.log(lista);

let conjunto = ["primer elemento", "segundo elemento", "tercer elemento"]

conjunto.forEach(Element =>{    

const eleLista = document.createElement("li");

eleLista.textContent = Element;

lista.appendChild(eleLista);
})



