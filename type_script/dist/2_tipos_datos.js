/**
 * Tipos de Datos
 */
// Boolean
let isDone = false;
// Let se introduce para evitar problemas de scope de las variables declaradas con var
// el scope de let es mucho mas intuitivo y funciona correctamente
// Number
let decimal = 6; // El tipo se infiere del valor asignado en la declaracion
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// String
let color = "blue";
color = 'red';
let fullName = `Bob Bobbington`;
let age = 37;
// Podemos usar templates
let sentence = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;
// Arrays
let list1 = [1, 2, 3];
let list2 = [1, 2, 3];
let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // imprime 1
console.log(rest); // imprime [ 2, 3, 4 ]
// first actua como una variable por lo tanto no podemos utilizarla nuevamente en este scope
// podemos crear un scope nuevo usando {}
{
    let [first, segundo] = [1, 2, 3, 4];
    console.log(first); // outputs 1
}
let [, second, , fourth] = [1, 2, 3, 4];
// Tuplas
// El tipo de datos que representa a las tuplas se llama tuple. El tipo tuple es inmutable
let x;
x = ["hello", 10];
// Cuando accedemos a los datos tipados, el tipo de dato correcto es retornado y podemos operar acorde a eso
console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
// Enum
var ColorA;
(function (ColorA) {
    ColorA[ColorA["Red"] = 0] = "Red";
    ColorA[ColorA["Green"] = 1] = "Green";
    ColorA[ColorA["Blue"] = 2] = "Blue";
})(ColorA || (ColorA = {}));
;
let c1 = ColorA.Green;
var ColorB;
(function (ColorB) {
    ColorB[ColorB["Red"] = 1] = "Red";
    ColorB[ColorB["Green"] = 2] = "Green";
    ColorB[ColorB["Blue"] = 3] = "Blue";
})(ColorB || (ColorB = {}));
;
let c2 = ColorB.Green;
var ColorC;
(function (ColorC) {
    ColorC[ColorC["Red"] = 1] = "Red";
    ColorC[ColorC["Green"] = 2] = "Green";
    ColorC[ColorC["Blue"] = 4] = "Blue";
})(ColorC || (ColorC = {}));
;
let c3 = ColorC.Green;
// Any
let notSure = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
//El valor de retorno se especifica al final
function suma(a, b) {
    return a + b;
}
// El valor de retorno se infiere del return
function suma1(a, b) {
    return a + b;
}
// Void se usa para indicar que una funcion no retorna nada
function warnUser() {
    alert("This is my warning message");
}
// ? indica que es opcional
function keepWholeObject(wholeObject) {
    let { a, b = 1001 } = wholeObject;
}
// Const
const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
};
//# sourceMappingURL=2_tipos_datos.js.map