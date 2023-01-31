/*
    Un array es un objeto que contiene una colección ordenada de valores. 
    Cada valor se almacena en una posición específica dentro del array, y se puede acceder a estos 
    mediante un índice numérico que determina su posicion.

    Los arrays en JavaScript son muy versátiles y se utilizan para almacenar y manipular datos de varios tipos, 
    como números, cadenas, objetos, etc. 
    
    Se pueden crear arrays vacíos o con elementos iniciales, y se pueden modificar y acceder a los elementos 
    de un array mediante métodos y propiedades específicas.
*/

let colores = ["Azul", "Verde", "Naranja", "Rojo","Beige"];

console.log(colores);

//¿Que es iterar?: Iterar es el proceso de recorrer un conjunto de datos, como una lista o un array.

//Acceder a indices
    console.log(colores[0]);
    console.log(colores[1]);
    console.log(colores[2]);
    console.log(colores[3]);
    console.log(colores[4]);







//Modificar Indice
    console.log(colores);

    colores[1]="Rosado";
    console.log(colores);





/* *******   Metodos de Arrays   ******* */

//length: Retorna la longitid de un array.
    console.log(colores.length);


//push: Agrega elementos al final de un array.

    console.log(colores);

    colores.push("Blanco","Negro");
    console.log(colores);









//unshift: Agrega elementos al inicio de un array.
    console.log(colores);

    colores.unshift("Gris","Plateado");
    console.log(colores);







//pop: Elimina el elemento al final de un array.
    console.log(colores);

    let ultimoEliminado = colores.pop();
    console.log(ultimoEliminado);

    console.log(colores);








//shift: Elimina el elemento al inicio de un array.
    let primeroEliminado = colores.shift();
    console.log(primeroEliminado);
    console.log(colores);





//index-of: Devuelve la posición de la primera aparición de un valor en un array. (Si no existe el valor retorna -1)
    console.log(colores.indexOf("Beige"));
    console.log(colores[5]);



/*  filter: es una función de los arrays que permite filtrar los elementos 
    mediante una función de retorno booleana. 

    La función de retorno booleana se aplica a cada elemento del array y solo los elementos 
    para los cuales la función devuelve true se incluyen en el nuevo array resultante.

    En pocas palabras, este método crea un nuevo array con todos los elementos que 
    pasan la prueba implementada por la función dada.
*/

    //Ejemplo 1 (filter):
let numeros = [1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1];

let numerosPares = numeros.filter(
    function(numeros) {
    // Funcion de retorno booleana, donde se evalua si el numero es par, 
    // en caso positivo filter retorna el numero.
        return numeros % 2 === 0;
        //return numeros % 2 === 1;
    }
);

console.log(numerosPares);



//Ejemplo 2 (filter):
let frutas = ["🍇","🍍","🍇","🍓","🍇","🍎","🍇"]; 
console.log(frutas);


// Crear un nuevo array llamado uvas y filtrar todos los elementos 
// del array frutas que sean "🍇".

let uvas = frutas.filter(
    function(frutas) {
        return frutas === "🍇";
    }
);

console.log(uvas);



