/*
    Se comoce como operadores de comparacion a los simbolos que nos permiten
    realizar operaciones binarias(entre 2 elementos) de comparacion.
*/

/*
    Ejemplo:
*/
// Asignacion = : como bien su nombre indica se utiliza para asignar un valor.

let asignacion = "Diego";
let numero1 = 1;
let numero2 = 2;
let caracter1 = "1";
//Array
let array = [1,2,3,4,5];
//Objeto
let otroNumero1 = {
    nombre: "Diego", 
    edad: 30, 
    pais: "Alemania"
};



// Igual que == : Devuelve true si los elementos son iguales 
// (No toma en cuenta el tipo de dato, solo el valor).

//true
console.log(numero1 == caracter1);

//false
console.log(numero1 == numero2);



// No es igual que != : Devuelve true si los operandos NO son iguales, es decir
// si son difetentes.

console.log( 1 != 1);
console.log( 1 != 2);
console.log( 1 != "1");
console.log( 1 != "2");


//Estrictamente igual que === : Devuelve true si los operandos son iguales y del mismo tipo de dato.

let numero = 1;
let numero_2 = 2;
let caracter_1 = "1";
let numero_1 = 1;


console.log( numero === caracter_1) ; 
console.log( numero === numero_2) ; 
console.log( numero === 1) ; 
console.log( numero === numero_1) ; 



// Desigualdad estricta !== : Devuelve true si los operandos son del mismo tipo pero no iguales.
//  O si son de diferente tipo.

console.log( 1 !== "1");
console.log( 1 !== 2);
console.log( 1 !== 1);
console.log( 1 !== "2");



// Mayor que > : Devuelve true si el operando izquierdo es mayor que el operando derecho.

let uno = 1;
let dos = 2;
let UNO = 1;

console.log(dos > uno);
console.log(uno > dos);


// Menor que < : Devuelve true si el operando izquierdo es menor que el operando derecho.
console.log(uno < dos);
console.log(dos < uno);


//  Mayor o igual que >= : 	Devuelve true si el operando izquierdo es mayor o igual que el operando derecho.
console.log(uno >= UNO);
console.log(dos >= dos);
console.log(dos >= uno );


//  Menor o igual que <= : Devuelve true si el operando izquierdo es menor o igual que el operando derecho.
console.log(uno <= dos);
console.log(uno <= UNO);
console.log(uno <= 0);