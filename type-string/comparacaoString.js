/// Aula 1.8

//Comparando strings
const a = "a";
const b = "b";

console.log( a < b );
    //true

console.log( a > b );
    //false

console.log( a == b );
    //false

console.log(a.localeCompare(b));
    // -1
    // Retonar -1 pq "a" vem antes de "b"

console.log(b.localeCompare(a));
    // 1
    // Retonar 1 pq "b" vem depois de "a" 