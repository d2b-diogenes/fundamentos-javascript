// Aula 2.4

// // tipo de dado

// // Conversão implícita
// // const numero = 456;

// // const stringNumero = "456";

// console.log(numero === stringNumero);
//     // outrput: false
//     // Quando é utlizado 3 iguais é feita a comparação por tipo e do valor da constate
//     // Reconhece como diferentes as contantes do tipo número e do tipo texto, pois a comparação é feita pelo tipo e eles são diferentes 

// console.log(numero == stringNumero);
//     // output: true
//     // Quando é utlizado 2 iguais é feita a comparação do valor da constate
//     // Reconhece  como equivalente as contantes do tipo número e do tipo texto, pois implicitamente foi feita a conversão da constante número para o tipo String e por isso foi possível fazer a comparação

// console.log(numero + stringNumero);
//     // output: 456456
//     // Quando é utilizado o + é feita uma contatenção quando é utilizado com strings
//     // Ao fazer a contatenção de uma constante do tipo número e uma do tipo string, a constante do tipo número é convertida para String e é feita a contatenação das strings
    

// Conversão explícita
    // Transformando usando duas funções do JavaScript

    //Number() - Usada para transformar uma string em um número
    //String() - Usada para transformar um número em uma string

const numero = 456;

// const stringNumero = "456";

// console.log(numero + Number(stringNumero));
    //output: 912
    // Foi convertido a constante do tipo string em um tipo número
    // Com a conversão, passou a ter 2 constantes do tipo número e o sinal + passou a fazer a operação de soma

const stringNumero = Number("456");
    // Passando Number dentro da variável
    // Foi convertida string em um número
    // Com 2 constantes do tipo número, o sinal + passou a fazer a operação de soma 

console.log(numero + stringNumero);
    //output: 912
    // Foi convertido a constante do tipo string em um tipo número
    // Com 2 constantes do tipo número, o sinal + passou a fazer a operação de soma

// Tentar converter uma string que tenha uma letra irá dar NaN

console.log(Number("234a"));
    // NaN
    // Devido a string possuir uma letra, não é possível transfromar em um número





