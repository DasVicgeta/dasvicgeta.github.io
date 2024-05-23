document.addEventListener('DOMContentLoaded', () => {
    const removedElements = []; // Lista para almacenar elementos eliminados

    const contenedorTareas = document.querySelector('#contenedor-tareas');
    if (!contenedorTareas) {
        console.error('El contenedor con el ID "contenedor-tareas" no existe.');
        return; // Salir si no se encuentra el contenedor
    }

    document.addEventListener('keyup', e => {
        if (e.target.matches('#buscar')) {
            const searchTerm = e.target.value.toLowerCase();

            document.querySelectorAll('.homeworks').forEach(tarea => {
                const h1Element = tarea.querySelector('h1');
                const tareaText = h1Element ? h1Element.textContent.toLowerCase() : '';

                if (searchTerm === '') {
                    // Si el campo de búsqueda está vacío, volver a agregar todos los elementos eliminados
                    while (removedElements.length > 0) {
                        const elemento = removedElements.pop();
                        contenedorTareas.appendChild(elemento);
                        const elementoH1 = elemento.querySelector('h1');
                        console.log(`Mostrando tarea: ${elementoH1 ? elementoH1.textContent.trim() : ''} (campo de búsqueda vacío)`);
                    }
                } else if (tareaText.includes(searchTerm)) {
                    // Mostrar elementos que coincidan con el término de búsqueda
                    if (!tarea.isConnected) {
                        const index = removedElements.indexOf(tarea);
                        if (index !== -1) {
                            removedElements.splice(index, 1);
                        }
                        contenedorTareas.appendChild(tarea);
                        console.log(`Mostrando tarea: ${h1Element ? h1Element.textContent.trim() : ''}`);
                    }
                } else {
                    // Ocultar elementos que no coincidan con el término de búsqueda
                    if (tarea.isConnected) {
                        removedElements.push(tarea);
                        tarea.remove();
                        console.log(`Ocultando tarea: ${h1Element ? h1Element.textContent.trim() : ''}`);
                    }
                }
            });
        }
    });
});
