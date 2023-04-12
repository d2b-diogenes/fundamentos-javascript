//4.4 Operador Ternário

// Ele basicamente um IF, onde ele faz uma comparação, mas a escrita dele é mais sucinta
// Em uma linha tem a comparação e a resposta para o caso verdadeiro e para o falso.

const idadeMinima = 18;

let idadeCliente = 16;

// if (idadeCliente >= idadeMinima){

//     console.log("cerveja")

// } else {

//     console.log("suco")

// }

//     //output: suco

console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco");
    // output: suco

idadeCliente = 19;
    // valor da variável alterada para verificar se a comparação está correta

                    //condição             //true      //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco");
// output: cerveja

// Não é uma boa prática usar operador ternário dentro de outro operador ternário
// Se for colocar várias condições, coloque dentro do if. É mais fácil de dar manutenção depois e é uma boa prática.