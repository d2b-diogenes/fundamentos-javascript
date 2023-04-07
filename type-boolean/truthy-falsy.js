// Aula 2.3 Trithy e Falsy

// boolean
    // true
    // false

const usuariologado = true;
const contapaga = false;

//truthy (tipo verdadeira) e falsy (tipo falso)
    //Não true e nem false, mas que para o JS equivalem ao true e ao false

console.log( 0 == false );
    // output: true
    // zero é igual a false

console.log("" == false);
    // output: true
    // string vazia é igula a false

console.log(1 == true);
    // output: true
    // 1 é igual ao true


// Demonstando que o JS comprende o 1 como truthy e o 0 como falsy

let usuarioConectado = false;
    // A constante recebeu um valor booleano "false"

console.log(Number(usuarioConectado));
    // output: 0
    // O JS entende o O como "false", falsy

usuarioConectado = true;
    // A constante recebeu um valor booleano "true"

console.log(Number(usuarioConectado));
    // output: 1
    // O JS entende o 1 como "true", truthy