const boton = document.getElementById('agregarParticipate')
const input = document.getElementById('nuevoParticipante')
const lista = document.getElementById('listaParticipantes')
const errorMensaje = document.getElementById('errorMensaje')

boton.addEventListener('click', () => {
    const texto = input.value.trim()
    console.log("texto", texto);

    if (texto === '') {
        errorMensaje.innerText = 'Ingrese un valor'
        return
    } else {
        errorMensaje.innerText = ''
    }

    const li = document.createElement('li')
    li.innerText = texto

    li.addEventListener('click', () => {
        li.classList.toggle("completada")
    })

    const btnEliminar = document.createElement('button')
    btnEliminar.innerText = 'X'
    btnEliminar.style.color = 'red'
    btnEliminar.style.marginLeft = '10px'

    btnEliminar.addEventListener('click', () => {
        lista.removeChild(li)
    })

    
    li.addEventListener('click', () => {
        li.classList.toggle("presente")
    })

    const btnPresente = document.createElement('button')
    btnPresente.innerText = 'Presente'
    btnPresente.style.color = 'green'
    btnPresente.style.marginLeft = '10px'

    li.appendChild(btnPresente)
    li.appendChild(btnEliminar)
    lista.appendChild(li)
    input.value = ''
})