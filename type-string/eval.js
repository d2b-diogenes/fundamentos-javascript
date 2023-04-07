// Aula 1.8

// eval() - Avalia uma expressão aritmética construida como uma string
// Eval diferencia as expressões construídas como string primitiva e string objeto

var s1 = "2 + 2";
var s2 = new String ("2 + 2");

console.log(eval(s1));
    // 4
console.log(eval(s2));
    // [String: '2 + 2']
    // Retorna um objeto String em vez de avaliar a string. Se o argumento não é uma string, irá retornar o argumento inalterado

//valueOf() - Usado para converter um objeto string em um string primitivo

console.log(eval(s2.valueOf()));
    // 4

//.toString() - Usado para converter um objeto string em um string primitivo
console.log(eval(s2.toString()));
    // 4