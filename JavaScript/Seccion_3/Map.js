/* 
    .map() es una función de los objetos Array que permite transformar cada elemento 
    de un arreglo en un nuevo elemento mediante una función especificada. 
    
    La función ".map()" devuelve un nuevo arreglo con los elementos transformados.
    a diferencia de filter, fill, every y some, .map no realiza ninguna funcion por defecto
    mas que recorrer cada elemento de un array.

    por esta razon, la funcion .map() es mas utilizado ya que permite mayor personalizacion 
    a la hora de trabajar con rrecorridos de arrays.
*/


//Ejemplo 1 (rrecorrer un array e imprimir cada elemento x 2)
let miArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// miArray.map( 
//     function(elemento,indice,algo,algo2){ 
//         console.log(`${miArray[indice] = elemento * 2}`);
//         //console.log(`${miArray[indice]} x 2 = ${miArray[indice] = elemento * 2} /`) 
//     }
// );


//Ejemplo 2 crear un nuevo array. (rrecorrer un array y multiplicar cada elemento x 2)
let miArray2 = [];

miArray.map(
    function(elemento){
        console.log(elemento)
        miArray2.push(elemento * 2)
    }
);

console.log(miArray);
console.log(miArray2);



//Ejemplo 3 (rrecorrer un array y obtener elementos tipo numero y tipo string en variables difetrentes).
let mezcla = [1,2,"3","cuatro",5,"6",7,"8","9",10,"once"];
let numeros = [];
let caracteres = [];

mezcla.map(
    function(elemento){
        (typeof(elemento) === "string")
        ? caracteres.push(elemento)
        : numeros.push(elemento)
    }
);

caracteres;
numeros;