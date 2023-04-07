// 2.3 Null e Undefined

// Undefined - quando uma variável é inicializada sem valor, ela ganha do JS o valor de undefined

let minhaVar;

console.log(minhaVar);
    // output: undefined
    // Não foi definida.


// Null - Representa ausenca de dado. Quando é preenchido o formulário e o campo vem vazio

let varNull = null;

console.log(varNull);
    // output: null
    // tinha sido definida como ausência de valor

//Verificando o tipo da variável

console.log(typeof minhaVar);
    // output: undefined

console.log(typeof varNull);
    // output: objeto
    // Foi um erro que quando o JS foi criado, onde o null foi criado como um objeto e não simplesmente como null