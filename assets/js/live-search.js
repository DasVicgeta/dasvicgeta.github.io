document.addEventListener('keyup', e => {
    if (e.target.matches('#buscar')) {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('.homeworks').forEach(tarea => {
            const tareaText = tarea.textContent.toLowerCase();
            if (tareaText.includes(searchTerm)) {
                tarea.classList.remove('filter');
                console.log(`Mostrando tarea: ${tareaText}`);
            } else {
                tarea.classList.add('filter');
                console.log(`Ocultando tarea: ${tareaText}`);
            }
        });
    }
});
