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

/* ej 19 */
const arreglo = ['simon', 'freddy', 'alberto']

console.log(arreglo.length);
// 20.	Declara una variable objeto y asígnale un objeto con al menos tres propiedades. Muestra en consola una de las propiedades del objeto.
const objeto = {nombre: 'diego', apellido: 'jaramillo', edad: 26 }

console.log(objeto.nombre);
// 21.	Declara una variable nulo y asígnale el valor null. Muestra en consola su tipo de dato utilizando el operador typeof().
let nulo = null;
console.log(typeof(nulo));
// 22.	Declara una variable indefinido y no le asignes ningún valor. Muestra en consola su tipo de dato utilizando el operador typeof().
let indefinido
console.log(typeof(indefinido));
// 23.	Declara una variable decimal y asígnale un número decimal. Muestra en consola su tipo de dato utilizando el operador typeof().
let decimal = 1.5;
console.log(typeof(decimal));
// 24.	Declara una variable negativo y asígnale un número negativo. Muestra en consola su tipo de dato utilizando el operador typeof().
let negativo = -5;
console.log(typeof(negativo));
// 25.	Utiliza el método indexOf() para encontrar la posición del carácter 'a' en la cadena "Casa" e imprime el resultado en consola.
let cad = 'casa';
console.log(cad.indexOf('a'));
// 26.	Comprueba si la cadena "Javascript" incluye el substring "Script" utilizando el método includes() e imprime el resultado en consola.
console.log("Javascript".includes('Script'));
// 27.	Concatena las cadenas "Hola" y "Mundo" utilizando el método concat() y muestra el resultado en consola.
console.log('Hola'.concat(' Mundo'));
// 28.	Concatena las cadenas "Hola" y "Mundo" utilizando el operador + y muestra el resultado en consola.
console.log('Hola' + ' ' + 'Mundo');
// 29.	Utiliza template strings para concatenar las cadenas "Hola" y "Mundo" e imprime el resultado en consola.
const cad1 = 'Hola';
const cad2 = 'Mundo'
console.log(`${cad1} ${cad2}`);
// 30.	Declara una variable cadenaConEspacios con el valor " Ejemplo con espacios ". Utiliza el método trimStart() y trimEnd() para eliminar los espacios en blanco al principio y al final, respectivamente, e imprime el resultado en consola.
let cadenaConEspacios = " Ejemplo con espacios ";
console.log(cadenaConEspacios.trimEnd() + cadenaConEspacios.trimStart());
// 31.	Reemplaza la palabra "azul" por "rojo" en la cadena "El cielo es azul" utilizando el método replace() e imprime el resultado en consola.
// 32.	Utiliza el método slice() para obtener los últimos cuatro caracteres de la cadena "Programación" e imprime el resultado en consola.
// 33.	Utiliza el método substring() para obtener una subcadena de la cadena "JavaScript" que comience en el índice 2 e imprime el resultado en consola.
// 34.	Repite la cadena "Hola" tres veces utilizando el método repeat() e imprime el resultado en consola.
// 35.	Divide la cadena "Esto es una oración de ejemplo" en un array de palabras y muestra el resultado en consola.
// 36.	Convierte la cadena "Javascript" a mayúsculas utilizando el método toUpperCase() e imprime el resultado en consola.
// 37.	Convierte la cadena "EJEMPLO" a minúsculas utilizando el método toLowerCase() e imprime el resultado en consola.
// 38.	Declara una variable numero y asígnale un número. Muestra en consola su tipo de dato utilizando el operador typeof().
// 39.	Declara una variable booleana y asígnale un valor booleano. Muestra en consola su tipo de dato utilizando el operador typeof().
// 40.	Declara una variable arreglo y asígnale un array con al menos tres elementos. Muestra en consola la longitud del array.
// 41.	Declara una variable objeto y asígnale un objeto con al menos tres propiedades. Muestra en consola una de las propiedades del objeto.
// 42.	Declara una variable nulo y asígnale el valor null. Muestra en consola su tipo de dato utilizando el operador typeof().
// 43.	Declara una variable indefinido y no le asignes ningún valor. Muestra en consola su tipo de dato utilizando el operador typeof().
