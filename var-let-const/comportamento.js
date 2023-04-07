// Aula 2.7 Comportament das variáveis

var respostaDeTudo = 42
    // Atribuiu para o VAR "respostaDeTudo" o valor de 42 
let idade = 29
    // Atribuiu para o LET "idade" o valor de 29
const pi = 3.14
    // Atribuiu para a CONST "pi" o valor de 3.14

{
    var respostaDeTudo = 3.14
        // A variável VAR "respostaDeTudo" ganhou uma nova atribuição 3.14
        // O tipo de variável "var" não tem escopo e por isso ele irá levar o valor para fora da função 
    let idade = 42
        // A variável LET "idade" é outra variável e ela receber a atribuição 42
        // A variável LET "idade" de dentro da função não é a mesma variável LET "idade" de fora da função
        // A variável LET irá respeitar o escopo, dentro da função ela irá funcionar localmente e fora da função irá funcionar globalmente  

    const pi = 29
        // A variável COSNT "pi" é outra variável e ela receber a atribuição 29
        // A variável CONST "pi" de dentro da função não é a mesma variável CONST "pi" de fora da função
        // A variável CONST "pi" irá respeitar o escopo, dentro da função ela irá funcionar localmente e fora da função irá funcionar globalmente  
    
    console.log(respostaDeTudo, idade, pi)
        // output: 3.14 42 29
        // 3.14 pegou da última atribuição dada ao var, no caso dentro da função, pois o VAR não respeita escopos
        // 42 pegou da declaração da variável LET "idade" de DENTO da função, pois a declaração e o console.log estáo no escopo local
        // 29 pegou da declaração da variável CONST "pi" de DENTO da função, pois a declaração e o console.log estáo no escopo local 

}

console.log(respostaDeTudo, idade, pi)
    // output: 3.14 29 3.14
    // 3.14 pegou da última atribuição dada ao var, no caso dentro da função
    // 29 pegou da declaração da variável LET "idade" de FORA da função, pois a declaração e o console.log estáo no escopo global
    // 3.14 pegou da declaração da variável CONST "pi" de FORA da função, pois a declaração e o console.log estáo no escopo global
