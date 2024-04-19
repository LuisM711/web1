document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const carrera = document.getElementById('carrera').value;
    const mensaje = `Nombre: ${nombre}<br>Edad: ${edad}<br>Carrera: ${carrera}`;
    document.getElementById('datos').innerHTML = mensaje;
    document.getElementById('formulario').reset();
});