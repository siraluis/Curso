/*
    ¿Que son selectores?
    Los selectores permiten seleccionar elementos del DOM (elementos HTML) para manipularlos en una página web.
    
    los selectores comunes son:

    Seleccion individual
    .getElementById("id"): selecciona un elemento con un id específico.

    Seleccion multiple
    .getElementsByName("name"): selecciona todos los elementos que contengan un name especifico.
    .getElementsByClassName("class"): selecciona todos los elementos con una clase específica.
    .getElementsByTagName("div"): selecciona todos los elementos con un nombre de etiqueta específico.



    Sintaxis:

    document" es el objeto principal del DOM(Modelo de Objeto del Documento) que representa el 
    documento HTML actual en una página.


    Seleccion individual
    document.getElementById("id");

    Seleccion multiple
    document.getElementsByName("name");
    document.getElementsByClassName("class");
    document.getElementsByTagName("div");


    Los selectores se emplean junto a metodos para realizar diferentes acciones.
*/

// Guardando elemento de id "parrafo" en una variable llamada parrafo
// esta variable se usa en varias ocaciones mas adelante.
let parrafo = document.getElementById("parrafo");
let titulo = document.getElementsByTagName("h1")[0];


console.log(parrafo);
console.log(titulo);



//Medotos usados con selectores:

// elemento.getAttribute: obtiene el(los) valor(es) del atributo indicado en el elemento seleccionado.
console.log("Las clases del elemento son: " + parrafo.getAttribute("class"));




// elemento.setAttribute: establece un atributo con su valor en el elemento seleccionado.
parrafo.setAttribute("style","color: greenyellow");
console.log("El atributo style es: " + parrafo.getAttribute("style"));
