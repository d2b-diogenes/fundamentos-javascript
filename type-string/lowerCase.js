// Aula 1.8 

// .toLowerCase() - É um método que irá transformar as letras de uma string em minusculas 
    // Artigo: .loLowerCase(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

const cidade = "belo horizonte";

const input = "Belo Horizonte";

// console.log(cidade === input);
// // false, pois o JavaScript é casesensitive

const inputMinusculo = input.toLowerCase(input);
    // É feito o tratamento do input para padronizar e, assim, poder fazer a comparação

console.log(cidade === inputMinusculo);
    // true, pois foi feito o tratamento para que fosse padronizado os termos