let cuenta = parseInt(prompt("Ingrese el total de la cuenta"))
let servicio = prompt("¿Como le parecio el servicio? malo/bueno/excelente").toLowerCase()
let propina = 0

if (servicio === "malo"){
    propina = cuenta * 0.1
} else if (servicio === "bueno"){
    propina = cuenta * 0.15
} else if (servicio === "excelente"){
    propina = cuenta * 0.2
} else {
    alert("Respuesta erronea")
}

alert(`Total a pagar: $${cuenta + propina}`)