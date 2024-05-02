const agregar = () => {
    const tarea = document.getElementById('inputTarea').value;
    const lista = document.getElementById('tareas');
    if (tarea.length > 0) {
        let tareas = JSON.parse(sessionStorage.getItem('tareas')) || [];
        tareas.push(tarea);
        sessionStorage.setItem('tareas', JSON.stringify(tareas));
        //window.location.reload();
        lista.innerHTML += `<li>${tarea}<button onclick="borrar('${tarea}')">Eliminar</button></li>`;
    }
    inputTarea.value = '';
}

onload = (event) => {
    let tareas = JSON.parse(sessionStorage.getItem('tareas')) || [];
    const lista = document.getElementById('tareas');
    tareas.forEach(tarea => {
        lista.innerHTML += `<li>${tarea}<button onclick="borrar('${tarea}')">Eliminar</button></li>`;
    });
}

const borrar = (tarea = "") => {
    let tareas = JSON.parse(sessionStorage.getItem('tareas')) || [];
    tareas = tareas.filter(t => t !== tarea);
    sessionStorage.setItem('tareas', JSON.stringify(tareas));
    //window.location.reload();

    const elementosLi = document.querySelectorAll('li');
    elementosLi.forEach(li => {
        const textoLi = li.textContent;
        if (textoLi.includes(tarea)) {
            li.innerHTML = `<del>${tarea}</del><span>${tarea}</span>`;
        }
    });



}
