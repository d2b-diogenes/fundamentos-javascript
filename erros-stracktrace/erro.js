// Aula 3.3 Erros e straktrace

// const numero;
//     //Apresentará erro de inicialização, pois as contantes já devem ser inicializadas com um valor.
//     // Erro informado no Node: SyntaxError: Missing initializer in const declaration

const numero = 0;
    // Não apresentará erro, pois não tem nenhum problema com esse código.

// console.log(numero;
//         // Apresentará erro devido a falta do parênteses fechando.
//         // Erro informado no Node: SyntaxError: Missing ) after argument list

console.log(numero);
    // Não apresentará erro, pois não tem nenhum problema com esse código.

// const minhaVar = "oi";
//     // Declarando a variável "minhaVar" para resolver o problema de Erro de Referência, onde não foi declarada a variável antes de ser chamada

console.log(minhaVar);
    // Apresentará erro, pois a variável não foi declarada em momento nenhum do código e foi chamada.
    // Erro informado no Node: ReferenceError: minhaVar is not defined

// Usando o console.log para tratar o ERRO

