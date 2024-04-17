/* ej 1 */
const num1 = 15;
const num2 = 30;

console.log(num1+num2);

/* ej 2 */
const simpleString1 = 'Hola';
const simpleString2 = 'Mundo';

console.log(simpleString1.length);
console.log(simpleString2.length);

/* ej 3 */
const stringUsingString1 = String('JavasScript');
const stringUsingString2 = String('Ejercicios');

console.log(stringUsingString1);
console.log(stringUsingString2);

/* ej 4 */
const stringUsingNewString1 = new String('Concatenar');
const stringUsingNewString2 = new String('Strings');

console.log(stringUsingNewString1);
console.log(stringUsingNewString2);
/* ej 5 */
console.log(simpleString1.substring(2));

/* ej 6 */
console.log(simpleString2.substring(2));

/* ej 7 */
console.log(simpleString1.concat(" ", simpleString2));

/* ej 8 */
console.log(simpleString1 + " " + simpleString2);

/* ej 9 */
console.log(`${simpleString1} ${simpleString2}`);

/* ej 10 */
const stringWithSpaces1 = '  TrimStart  ';
const stringWithSpaces2 = '   TrimEnd   ';

console.log(stringWithSpaces1.trimEnd());
console.log(stringWithSpaces1.trimStart());

/* ej 11 */
console.log(simpleString1.replace('o', 'i'));

/* ej 12 */
console.log(simpleString2.slice(0,3));

/* ej 13 */
console.log(simpleString2.substring(2));

/* ej 14 */
console.log(simpleString1.repeat(2));

/* ej 15 */
console.log("Esto es una oraciòn de ejemplo".split(" "));


/* ej 16 */
console.log(simpleString2.toUpperCase());

/* ej 17 */
console.log(simpleString1.toLowerCase());

/* ej 18 */
const booleana = true;

console.log(typeof(booleana));

const arreglo = ['simon', 'freddy', 'alberto']

console.log(arreglo.length);