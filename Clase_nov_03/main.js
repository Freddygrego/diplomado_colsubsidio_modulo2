const tarjeta = document.getElementById("tarjeta");
tarjeta.setAttribute("class", "w-50 text-center mx-auto")

const fragment = document.createDocumentFragment();

const principal = document.createElement("div");
principal.setAttribute("class", "card")
fragment.appendChild(principal);

const imagen = document.createElement("img");
imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbSRcq6xLXaCCXeWzbMf3GOAXby712syUg4hq9PCT-nA&s"
imagen.setAttribute("class", "card-img-top")
principal.appendChild(imagen);

const cuerpo = document.createElement("div");
cuerpo.setAttribute("class", "card-body")
principal.appendChild(cuerpo);

const titulo = document.createElement("h5");
titulo.setAttribute("class", "card-title")
titulo.textContent = "card title";
cuerpo.appendChild(titulo);

const texto = document.createElement("p");
texto.setAttribute("class", "card-text")
texto.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content."
cuerpo.appendChild(texto);

const boton = document.createElement("button");
boton.setAttribute("class", "btn btn-primary")
boton.textContent = "Go somewhere";
cuerpo.appendChild(boton);

fragment.appendChild(principal);

tarjeta.appendChild(fragment);