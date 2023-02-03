/*Iniciemos con un ejemplo:
    Hay 2 personas, una en la calle(Variable de Scope Global) y 
    otra en una casa(Variable de Scope local), ambas comen helado.

    la persona que esta en la casa puede saber cuantos helados come la persona en la calle,
    la persona en la calle no sabe que esta siendo observada por ende, 
    no sabe cuantos helados come la otra persona.

    con este ejemplo podemos iniciar la definicion de Scope...
    Scope es el alcance que tiene una variable desde su lugar de declaracion. 
*/

let variableGlobal = "Diego"

function imprimirNombre(dato){
    let variableLocal = "Rodriguez"
    //console.log(variableSuperLocal); //undefined
    console.log(variableLocal);
    console.log(variableGlobal);

    function funcionLocal(){
        let variableSuperLocal = "Hola";
        console.log(variableSuperLocal);
        console.log(variableLocal);
        console.log(variableGlobal);
    }
    funcionLocal();

    return (`Mi nombre es ${variableGlobal} ${variableLocal}`)
}


console.log(imprimirNombre());
console.log(variableGlobal);
// console.log(variableLocal); //undefined
// console.log(variableSuperLocal); //undefined
