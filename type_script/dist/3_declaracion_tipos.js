/**
 * Declaraciones de clases e interfaces
 */
// Las interfaces actuan como una estructura a respetar, las clases en typescript no
// necesariamente implementan interfaces, pero typescript determina en base al contexto si el objeto
// es posible ser utilizado con esa declaracion de interfaz
{
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    let myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
}
// Valores opcionales
{
    function createSquare(config) {
        let newSquare = { color: "white", area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    let mySquare = createSquare({ color: "black", width: 1 });
}
// Readonly es similar a const, pero se usa para interfaces
{
}
// Interfaces funcionales
{
    let mySearch = function (source, subString) {
        let result = source.search(subString);
        return result > -1;
    };
}
// Forzar a implementar interfaces
{
    class Clock {
        constructor(h, m) { }
    }
}
// Herencia de interfaces
{
}
// CLASES
{
    class Greeter {
        constructor(message) {
            this.greeting = message;
        }
        greet() {
            return "Hello, " + this.greeting;
        }
    }
    let greeter = new Greeter("world");
}
// Herencia
{
    class Animal {
        // las propiedades se pueden definir en el constructor poniendo private, public o protected
        constructor(name) {
            this.name = name;
        }
        move(distanceInMeters = 0) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }
    class Snake extends Animal {
        constructor(name) {
            // se puede llamar al constructor de la clase superior
            super(name);
        }
        move(distanceInMeters = 5) {
            console.log("Slithering...");
            super.move(distanceInMeters);
        }
    }
    class Horse extends Animal {
        constructor(name) { super(name); }
        move(distanceInMeters = 45) {
            console.log("Galloping...");
            super.move(distanceInMeters);
        }
    }
    let sam = new Snake("Sammy the Python");
    let tom = new Horse("Tommy the Palomino");
    sam.move();
    tom.move(34);
}
// Restriccion de acceso
{
    class Animal {
        // Podemos definir getters y setters de forma simple encapsultando el contenido
        get name() {
            return this._name;
        }
        set name(name) {
            if (name.length > 0) {
                this._name = name;
            }
        }
        constructor(theName) {
            this._name = theName;
        }
        move(distanceInMeters) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }
    let an = new Animal("Chuwaca");
    console.log(an.name);
    an.name = "";
    console.log(an.name);
    an.name = "Boby";
    console.log(an.name);
}
// protected
{
    class Person {
        constructor(name) {
            this.name = name;
        }
        toString() {
            console.log("Persona : " + this.name);
        }
    }
    class Employee extends Person {
        constructor(name, department) {
            super(name);
            this.department = department;
        }
        toString() {
            console.log("Empleado : " + this.name);
        }
        getEmployeeHello() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }
    let persona = new Employee("Nestor", "UTN");
    if (persona instanceof Employee) {
        console.log("Empleado " + persona.getEmployeeHello());
    }
    else {
        console.log(persona.toString());
    }
}
// constructor
// La sobrecarga no es posible, pero si se puede hacer algo parecido
{
    class Greeter {
        constructor(destinatario, message) {
            if (message) {
                this.message = message;
            }
            else {
                this.message = "Hola";
            }
            this.destinatario = destinatario;
        }
        greet() {
            return this.message + ", " + this.destinatario;
        }
    }
    console.log(new Greeter("Nestor").greet());
}
//# sourceMappingURL=3_declaracion_tipos.js.map