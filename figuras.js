// Código del cuadrado
console.group("Cuadrado");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado (lado){
    return lado * 4;
} 
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado (lado){
    return lado * lado;
}
//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Código del triangulo

console.group("triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

//console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

//console.log("La altura del triángulo es: " + alturaTriangulo);

function perimetroTriangulo(l1, l2, base){
    return l1+l2+base;
}

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log("El área del triángulo es: " + areaTriangulo + "cm^2");


console.groupEnd();

// Código del circulo 

console.group("Círculo");

//const radioCirculo = 4;
//const diametroCirculo = radioCirculo * 2;
const pi = Math.PI;

//console.log("El radio del círculo es: " + radioCirculo + "cm");
//console.log("El diámetro del círculo es: " + diametroCirculo + "cm");
//console.log("Pi es: " + pi);

function diametroCirculo(radio){
    return radio*2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

//const perimetroCirculo = diametroCirculo * pi;
//console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

function areaCirculo(radio){
    return (radio * radio) * pi;
}
//const areaCirculo = (radioCirculo * radioCirculo) * pi;
//console.log("El área del triángulo es: " + areaTriangulo + "cm^2");


console.groupEnd();

