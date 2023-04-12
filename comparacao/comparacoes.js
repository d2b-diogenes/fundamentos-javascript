// Aula 4.2 Comparação no JS

const numero = 5;

const texto = "5";

console.log(numero == texto);
    // output: true;
    // Retornou "true" devido o JS ter comparado apenas o valor
    // O JS comparou duas Strings, pois ele transformou a variável "número" em um string e depois comparou com a variável string "texto"

console.log(numero === texto);
    // output: false
    // Retornou "false" devido o JS ter comparada o tipo da variável e o valor

// "typeof" para identificar o tipo da variável

console.log(typeof numero);
    //output: number

console.log(typeof texto);
    //output: string
    
// == compara o valor
// === compara o valor e o tipo de dado

// As boas práticas usam 3 iguais ===