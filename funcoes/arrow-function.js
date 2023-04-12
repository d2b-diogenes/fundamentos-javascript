//Aula 5.8 Arrow Function
        
    // Arrow Function não pode ser nomeada e não há opção para nomear

// > Função Declarada

function apresentar(nome) {

    return `Meu nomo é ${nome}`

}

// > Arrow Function com apenas 1 parâmetro e em apenas 1 linha

const apresentarArrow = nome => `Meu nomo é ${nome}`;
    // 1 Parâmetro: "nome" é o único parâmentro e devido ser único, não precisa dos parênteses
    // 1 linha de código, não precisa colocar as chaves para fechar o bloco de código


// > Arrow Function com 2 parâmetros e em apenas 1 linha

const soma = (num1, num2) => num1 + num2;
    // 2 Parâmetros: "num1" e "num2" devido ter mais de 1 parâmentro, é preciso usar os parênteses
    // 1 linha de código, não precisa colocar as chaves para fechar o bloco de código


// > Arrow Function com 2 parâmetros e mais de 1 linha de instrução

const somarNumerosPequenos = (num1, num2) => {
    // Mais de um linha de código, é necessário as chaves para o bloco de código

    if (num1 > 10 || num2 > 10) {
        return "somente números de 1 a 9";
    } else {
        return num1 + num2;
    }

}


/*
Declaração de Função - estrutura padrão de criar uma função
    // É feita a hoisting, pois é feito apenas na declaração da função completa

Expressão de Função
    // Em relação ao hoisting, ela não é içada para o topo como a Declaração de Função

Arrow Function - é uma estrutura mais simples, rápica e curta de escrever uma função
    // Ela tem vantagens quando se está trabalhado com objetos
    // Em relação ao hoisting, ela não é içada para o topo como a Declaração de Função
*/