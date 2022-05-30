// Funciones Helpers

function esPar(numero){
    /*  if(numero % 2 === 0){
         return true;
     } else{
         return false;
     } */
     return (numero % 2 === 0);
 }
 
 function calcularMediaAritmetica(lista){
 
     const sumarLista = lista.reduce(
         function (valorAcumulado = 0, nuevoElemento) {
             return valorAcumulado + nuevoElemento;
         }
     );
     const promedioLista = sumarLista / lista.length;
     return promedioLista
 }

//Calculadora de mediana

function medianaSalariosCol (lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana general
const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA,salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalariosCol(salariosColSorted);

//Mediana del top 10%

const spliceStart = parseInt((salariosColSorted.length * 90 ) / 100);
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
    );

const medianaTop10Col = medianaSalariosCol(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});