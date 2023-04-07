// Aula 2.2 Var, Let e Const

// //Var - Era a unica variável quando JS foi criado
//     // Ela pode ser usada antes mesmo de declarar. Por conta disso ela deixou de ser usado, 
//     // pois o uso dela é muito liberado ocasionando muitos problemas, bugs.

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;

// console.log(area);

// var area;

// // Let - é variável usada no lugar do VAR para variáveis que podem ter seu valor alterado ao longo do código.


// let forma = "retângulo";
// let altura = 5;
// let comprimento = 7;
// let area;

// if(forma === "retângulo") {

//     area = altura * comprimento;

// } else {

//     area = (altura * comprimento) / 2;

// }

// console.log(area);

// // let area;
//     // Se o let ficar nessa posição irá ocorrer um erro devido a inicialização ter ocorrido depois do uso da variável


// CONST - É uma variável que precisa de uma atribuição e não pode ser alterada, será constante

const forma = "triângulo";
    //Foi declarado como "const", pois a forma não será alterada
let altura = 5;
let comprimento = 7;
let area;

if (forma === "quadrado") {

    area = altura * comprimento;

} else {

    area = (altura * comprimento) / 2;

}

console.log(area);
