// Array para almacenar los nombres de los amigos
let listaAmigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // Eliminamos espacios extra

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre a la lista y actualizar la vista
    listaAmigos.push(nombre);
    actualizarLista();
    
    // Limpiar el campo de entrada
    input.value = "";
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
    const ulLista = document.getElementById("listaAmigos");
    ulLista.innerHTML = ""; // Limpiar lista antes de actualizar

    listaAmigos.forEach((nombre, index) => {
        const li = document.createElement("li");
        li.textContent = nombre;

        // Botón para eliminar un nombre de la lista
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.classList.add("quitar-btn");
        btnEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(btnEliminar);
        ulLista.appendChild(li);
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    listaAmigos.splice(index, 1); // Eliminar elemento por índice
    actualizarLista(); // Actualizar la vista
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const resultado = `🎉 El amigo secreto es: ${listaAmigos[indiceAleatorio]} 🎉`;

    // Mostrar resultado en la página
    const ulResultado = document.getElementById("resultado");
    ulResultado.innerHTML = ""; // Limpiar resultados previos
    const li = document.createElement("li");
    li.textContent = resultado;
    ulResultado.appendChild(li);
}