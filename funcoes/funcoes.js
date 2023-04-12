// Aula 5.2 Funções

// A função isola um bloco de código
    // a função tem dois momentos: 1º) Declara a função 2º) Executa a função (1 ou mais vezes)
    // Há três formas de escrever funções

//1º) Declarando a função
    // Forma: declaração de função

                      //parâmetro
function imprimeTexto(texto) {
    console.log(texto)
}

// //2º) Executando a função (1 ou mais vezes)
// imprimeTexto("oi");
//     // output: oi
// imprimeTexto("outro texto");
//     //Reutilizando a função
//     // output: outro texto

// Podem ser feitas outras operações com as funções

function soma() {
    // Nesse exemplo não foi preciso passar uma parâmetro

    // const somatorio = 2 + 2;

    // return somatorio;
    //     // Retornará o valor da variável com o resultado da operação

    return 2+2;
        // Retornará diretamente o resultado da operação

    // O "return" retorna o valor para quem chamou a função e leva esse valor para fora do bloco de código da função
    // O "return" é colocado no fim da função, antes de fechar o bloco

}

// console.log(soma());
//     // Chamando a função para ser executado;
//     // output: 4

// Colocando uma função dentro de outro função
imprimeTexto(soma());
    // É executado a função "soma()"
    // pega o resultado e joga dentro do parâmetro da função "imprimeTexto()"
    // e a função "imprimeTexto(soma())" irá imprimir o parâmetro que recebeu dentro da sua função, que é o Retorno da função "soma()".