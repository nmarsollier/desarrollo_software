
console.out("Texto seleccionado : " + document.getElementById("texto").value);

function isEmailValid(email) {
    const emailRegex =
        new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

    let valid = emailRegex.test(email);

    if (!valid) {
        alert("Please enter a valid email address");
    }

    return valid
}
