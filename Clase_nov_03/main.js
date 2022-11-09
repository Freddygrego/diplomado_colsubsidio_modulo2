let variasTarjetas = 
[
    {
        "title": "Card 1",
        "content": "Este es el texto que debe observarse en el card-text",
        "buton": "Pulsame"

    },
    {
        "title": "Card 2",
        "content": "Este es el texto que debe observarse en el card-text",
        "buton": "Pulsame"
    },
    {
        "title": "Card 3",
        "content": "Este es el texto que debe observarse en el card-text",
        "buton": "Pulsame"
    },
    {
        "title": "Card 4",
        "content": "Este es el texto que debe observarse en el card-text",
        "buton": "Pulsame"
    },
    {
        "title": "Card 5",
        "content": "Este es el texto que debe observarse en el card-text",
        "buton": "Pulsame"
    },
    {
        "title": "Card 6",
        "content": "Este es el texto que debe observarse en el card-text",
        "buton": "Pulsame"
    }    
]

const tarjeta = document.getElementById("tarjeta");

tarjeta.setAttribute("class", "w-50 text-center mx-auto")

const createCard = (elemento) => {

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
    titulo.textContent = elemento.title;
    cuerpo.appendChild(titulo);

    const texto = document.createElement("p");
    texto.setAttribute("class", "card-text")
    texto.textContent = elemento.content;
    cuerpo.appendChild(texto);

    const boton = document.createElement("button");
    boton.setAttribute("class", "btn btn-primary")
    boton.textContent = elemento.buton;
    cuerpo.appendChild(boton);

    tarjeta.appendChild(fragment);
} 

variasTarjetas.forEach(elemento => createCard(elemento));

//elemento.title 




