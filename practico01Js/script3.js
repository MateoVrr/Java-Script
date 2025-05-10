let peso = parseFloat(prompt("Ingrese su peso en kilos: "))
let altura = parseFloat(prompt("Ingrese altura en metros: "))
let imc = peso / (altura*altura)

alert(`Su IMC es de: ${imc}`)

if (imc < 18.5){
    alert("Bajo peso")
} else if(imc <= 24.9){
    alert("Peso normal")
} else if(imc <= 29.9){
    alert("Sobrepeso")
} else if(imc > 30){
    alert("Obesidad")
}