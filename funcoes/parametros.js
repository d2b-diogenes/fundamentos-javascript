// Aula 5.4 Parâmetros e argumentos

// function soma () {
//     // A função que irá executar a operação de soma

//     return 2 + 2;
//         //Irá retornar a opoeração de soma de 2 + 2
// }

// console.log(soma());
//     // Essa função é não possível de ser reutilizada, pois ela tem a operação fixa internamente


// Parâmetros de função

function soma (numero1, numero2) {
    // A função irá receber 2 funções

    return numero1 + numero2;
        //Irá retornar a operação feita com os parâmetros recebidos
}

// console.log(soma(4,2));
//     //A função é chamaada levando 2 parâmetros que serão usados internamento na função

// // Dessa forma a função fica reutilizável
// console.log(soma(2,3));
// console.log(soma(5,1));
// console.log(soma(-700,60 ));


// // Ordem dos parâmetros

// function nomeIdade(nome, idade) {
//     return `Meu nome é ${nome} e a minha idade é ${idade} anos.`
// }

// console.log(nomeIdade("Diógenes", 31));
//     // Atenção com a ordem passa dos parâmetros na hora de chamar a função, pois a ordem deve seguir a mesma ordem dos parâmetros da função


// 

// function mutiplicacao (numero1, numero2) {

//     return numero1 * numero2;

// }
//                         //9         //6
// console.log(mutiplicacao(soma(6,3), soma(2,4)));
//     //output: 54

// console.log(mutiplicacao(soma(6,3)));
//     //output: NaN
//     // A função espera receber 2 parâmetros e na falta de um dos parâmetros, o segundo é definido como "undefined" e a multiplicação por dará NaN


// console.log(mutiplicacao());
//     //output: undefined
//     // A função espera receber o parâmetro e o retorno será undefined


// Definindo um valor padrão para os parâmetros

function mutiplicacao (numero1 = 1 , numero2 = 1) {
    // "numero1 = 1" Definindo um valor padrão para o parâmentro "numero1"
    // Na falta de algum desses parâmetros, será definido como padrão o valor de "1"

    return numero1 * numero2;

}

console.log(mutiplicacao(soma(6,3)));
    //output: 9
    //Retornou 9 devido ter sido passado 1 parâmentro = 9 e o outro pegou o valor padrõa "1" e foi feita a multiplicação

console.log(mutiplicacao(soma(4,2), soma(3,5)));
    //output: 48


//Os nomes dados para os parâmentros são válidos apenas dentro da função e os nomes podem ser iguais em funções diferenes por conta disso