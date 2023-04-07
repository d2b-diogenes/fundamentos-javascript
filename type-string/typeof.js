// Aula 1.8

// "typeof" - Distinção entre String primitiva e objeto String
    //Artigo: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
    
var s_prim = "foo";
var s_obj = new String(s_prim);

console.log(s_prim);
    //foo
console.log(s_obj);
    //[String: 'foo']

console.log(typeof s_prim);
    //string
console.log(typeof s_obj);
    //objetct

    // Another examples:


console.log(typeof 42);
// output:  "number"

console.log(typeof 'blubber');
// output: "string"

console.log(typeof true);
// output: "boolean"

console.log(typeof undeclaredVariable);
// output: "undefined"

console.log(typeof s_obj);
// output: "objetc"
