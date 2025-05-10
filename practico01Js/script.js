// TODO: Pedir el nombre con prompt
// TODO: Pedir la edad
// TODO: Calcular el precio de la entrada según la edad
// TODO: Mostrar un mensaje personalizado con alert

// Ejemplo final esperado:
// "Hola Juan, tenés 16 años. Tu entrada cuesta $1500"

const nombre = prompt("Ingrese su nombre").toLowerCase()
alert("Su nombre es: " + nombre)
let edad = parseInt(prompt("Ingrese su edad"))
nombre.toLowerCase()
let total = 0
if (edad <= 5) {
    total = 0
} else if (edad >= 80) {
    total = 0
} else if (edad <= 13){
    total = 1000
} else if (edad <= 17){
    total = 1500
} else if (edad > 17){
    total = 2000
}

alert(`Hola ${nombre}, tenes ${edad} años. Tu entrada cuesta $${total}`)
console.log(nombre);
