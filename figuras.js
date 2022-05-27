// Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado (lado){
    return lado * 4;
} 

function areaCuadrado (lado){
    return lado * lado;
}

console.groupEnd();


// Código del triangulo

console.group("triangulo");

function perimetroTriangulo(l1, l2, base){
    return l1+l2+base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();


// Código del circulo 

console.group("Círculo");

const pi = Math.PI;

function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

function areaCirculo(radio){
    return (radio * radio) * pi;
}



console.groupEnd();

// Aquí interactuamos con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreatroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input = document.getElementById("Lado1");
    const input2 = document.getElementById("Lado2");
    const input3 = document.getElementById("Base");


    const value = parseInt(input.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);
    
    const perimetro = perimetroTriangulo(value, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input = document.getElementById("Base");
    const input2 = document.getElementById("Altura");


    const value = parseInt(input.value);
    const value2 = parseInt(input2.value);
  
    
    const area = areaTriangulo(value, value2);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");

    const value = input.value;
    
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");

    const value = input.value;
    
    const area = areaCirculo(value);
    alert(area);
}