
///Media aritmetica

function calcularMediaAritmetica(lista){
    /* let sumarLista = 0;
    for(let i=0; i < lista.length; i++){
    sumarLista = sumarLista + lista[i];
    }
 */
    const sumarLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumarLista / lista.length;
    return promedioLista
}


// Mediana

function esPar(numero){
    if (numero % 2 === 0){
        return true;
    } else {
        return false;
    }
}


function calcularMediana(lista1){
    let mediana;
    const listaOrdenada = lista1.sort((a, b) => a - b);
    const mitadLista1 = parseInt(listaOrdenada.length / 2);
 
    if (esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadLista1 - 1];
        const elemento2 = listaOrdenada[mitadLista1]; 
    
        mediana = calcularMediaAritmetica([elemento1, elemento2]);
    }else {
        mediana = lista1[mitadLista1];
    }
    console.log(listaOrdenada);
    return mediana;
}

// Moda

function moda(listaModa) {
    const lista1Count = {};
    listaModa.map(
        function (elemento){
            if(lista1Count[elemento]){
            lista1Count[elemento] += 1; 
            }else{
                lista1Count[elemento] = 1; 
            }
        }
    );
    const lista1Array = Object.entries(lista1Count).sort(
        function (elementoA, elementoB){
            return elementoA[1] - elementoB[1]; 
        }
    );
    const moda = lista1Array[lista1Array.length -1];
    return moda;
}


// Promedio geomçetrico
function calcularMediaGeometrica(lista) {
    const multiplicacionLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado * nuevoElemento;
    });
  
    const promedioGeometricoLista = (multiplicacionLista)**(1/lista.length);
  
    return promedioGeometricoLista;
  }



