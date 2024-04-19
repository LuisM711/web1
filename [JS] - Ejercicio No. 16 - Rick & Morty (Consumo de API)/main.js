//https://rickandmortyapi.com/api/character/1

const busqueda = async (query) => {
    try {
        if (!query) {
            throw new Error('No se ingresó un término de búsqueda');
        }
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
        const data = await response.json();
        if(data.error) throw new Error(data.error);
        const results = data.results;
        //console.log(results[0]);
        const personajes = results.map(personaje => {
            return {
                imagen: personaje.image,
                nombre: personaje.name,
                //The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
                genero: personaje.gender === 'Female' ? 'femenino' : personaje.gender === 'Male' ? 'masculino' : 'desconocido',
                //The status of the character ('Alive', 'Dead' or 'unknown').
                estado: personaje.state === 'Alive' ? 'vivo' : personaje.state === 'Dead' ? 'muerto' : 'desconocido',
            };
        });
        //console.log(personajes[0]);
        resultados.innerHTML = `<h2>Resultados de la búsqueda</h2>
        <ul>
        ${personajes.map(personaje => `<li>
            <img src="${personaje.imagen}" alt="${personaje.nombre}">
            <h3>${personaje.nombre}</h3>
            <p>Genero ${personaje.genero}</p>
            <p>Estado ${personaje.estado}</p>
        </li>`).join('')}</ul>`;
    } catch (error) {
        console.info(error);
        resultados.innerHTML = '<h2>No se encontraron resultados o hubo un error en la búsqueda. Intente de nuevo.</h2>';
    }
};
