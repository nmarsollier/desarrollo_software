/**
 * Funciones
 */
// parametros opcionales
{
    function buildName(firstName, lastName) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }
    let result1 = buildName("Bob"); // works correctly now
    let result3 = buildName("Bob", "Adams"); // ah, just right
}
// valor por defecto
{
    function buildName2(firstName, lastName = "Smith") {
        return firstName + " " + lastName;
    }
    let result1 = buildName2("Bob"); // works correctly now, returns "Bob Smith"
    let result2 = buildName2("Bob", undefined); // still works, also returns "Bob Smith"
    let result4 = buildName2("Bob", "Adams"); // ah, just right
}
// parametros variables
{
    function buildName3(firstName, ...restOfName) {
        return firstName + " " + restOfName.join(" ");
    }
    let employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");
}
// Sobrecarga
{
    let suits = ["hearts", "spades", "clubs", "diamonds"];
    function pickCard(x) {
        // Check to see if we're working with an object/array
        // if so, they gave us the deck and we'll pick the card
        if (typeof x == "object") {
            let pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        // Otherwise just let them pick the card
        else if (typeof x == "number") {
            let pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }
}
//# sourceMappingURL=4_funciones.js.map