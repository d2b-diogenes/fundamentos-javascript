//Aula 5.7 Expressão de função

// > Função Declarada

// function minhaFuncao(param) {
//     //bloco de código
// }

// minhaFuncao("param");

// > Expressão de função

// const soma = function (num1, num2) {return num1 + num2}
    // A expressão de função não tem o nome da função, é opcional e geralmente não é dado o nome
    // Foi criada uma variável e atribuiu a ela uma função anônima
    // É importante que seja "const" par que não seja possível trocar o valor dentro dela
    // As melhores práticas recomenda que a expressão de função fique em apenas uma linha e não seja quebrada 

// console.log(soma(1,2));


// > Diferença principal entre a Expressão de Função e a Função Declarada
    // A diferença principal é o HOISTING
    // Onde as funções declaradas e as Variáveis são içadas para o topo do código

console.log(apresentar());

function apresentar() {
    return "olá";
}


// console.log(soma(2,2));

// const soma = function (num1, num2) {return num1 + num2};
//     // output: ReferenceError: Cannot access 'soma' before initialization
//     // Apresentará erro de Referência, pois não é possível acessar "soma" antes da inicialização 
//     // Esse problema ocorre devido as Expressões de Função não serem içadas para o topo do código como a Função Declarada
//     // Devido esse comportamento, é necessário chamar a função somente depois que a "const" é declarada

    
// const soma = function (num1, num2) {return num1 + num2};
//     // Hoje é muito utilizado a Expressão de Função e por isso é muito importante saber do comportamento do HOISTING no JS

// console.log(soma(2,2));
//     // output: 4
//     // Para chamar uma constante que tem uma Expressão de Função dentro dela é preciso que seja chamada depois da declaração da constante.