// Aula 4.6 Template String

// Uma das formas de trabalhar com o template string
// Template String = String Modelo

// Concatenando strings

const nome = "Diógenes";

const idade = 2023 - 2008;

const maiorIdade = 18;

const localNascimento = "Belém";

const bebidaParaMaior = "cerveja";

const bebidaParaMenor = "suco";

// const apresentacao = "Meu nome é " + nome + ", eu tenho " + idade + " anos e nasci em " + localNascimento + ".";

// console.log(apresentacao);

// Usando Template String para concatenar strings

const apresentacao = `Meu nome é ${nome}, a minha idade é ${idade} anos e nasci na cidade de ${localNascimento}.`;
    //aceita "\n" para quebrar linha

console.log(apresentacao);

    // O template string surgiu para facilitar a juntar uma variedade de variáveis em um texto

// Praticando

console.log(`${nome} diz: "por favor, eu quero beber ${idade >= maiorIdade ? bebidaParaMaior : bebidaParaMenor}".`);