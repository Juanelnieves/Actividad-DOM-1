// 001 - Usando JavaScript, agrega una nueva fila a la tabla con los siguientes datos: "Pedro", "28", "Colombia".
let tabla = document.getElementById('miTabla');
let nuevaFila = tabla.insertRow();
nuevaFila.insertCell(0).textContent = 'Pedro';
nuevaFila.insertCell(1).textContent = '28';
nuevaFila.insertCell(2).textContent = 'Colombia';

// 002- Cambia el nombre de "Carlos" a "Juan" y actualiza su edad a "26".
let primeraFilaDatos = tabla.rows[1];
primeraFilaDatos.cells[0].textContent = 'Juan';
primeraFilaDatos.cells[1].textContent = '26';


// 003 - Selecciona y muestra en la consola el nombre de la persona que tiene la edad más alta en la tabla.
let maxEdad = 0;
let nombreMaxEdad = '';

for (let i = 1; i < tabla.rows.length; i++) {
    let edad = parseInt(tabla.rows[i].cells[1].textContent);
    if (edad > maxEdad) {
        maxEdad = edad;
        nombreMaxEdad = tabla.rows[i].cells[0].textContent;
    }
}
console.log(nombreMaxEdad);


// 004 -Agrega una nueva columna al final de cada fila con el texto "Acción" y dentro de cada celda de esta columna agrega un botón con el texto "Eliminar".
// Agregar encabezado de columna si aún no está presente
if (tabla.rows[0].cells.length === 3) {
    let encabezado = tabla.rows[0].insertCell(3);
    encabezado.textContent = 'Acción';
}

// Función para eliminar la fila
function eliminarFila(event) {
    let boton = event.target;
    let fila = boton.parentElement.parentElement;
    tabla.deleteRow(fila.rowIndex);
}

// Agregar botones a las filas existentes y asignar el evento
for (let i = 1; i < tabla.rows.length; i++) {
    let celda;
    if (tabla.rows[i].cells.length === 3) {
        celda = tabla.rows[i].insertCell(3);
        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', eliminarFila);
        celda.appendChild(botonEliminar);
    }
}

