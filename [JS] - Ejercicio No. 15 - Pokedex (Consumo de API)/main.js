let porPagina = 10;
let paginasTotales = [1, 100];
let paginaActual = 1;
window.onload = (event) => {








    inyeccionDeElementos(porPagina);
    creacionDeNumeracion();

}

const inyectarPokemon = (pokemon = {}) => {
    pokemones.innerHTML += `
        <div class="pokemon">
            <div class="info">
                <span class="number"># <u>${pokemon.id.toString().padStart(3, '0')}</u></span>
                <div class="img-container">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="">
                </div>
                <h3 class="name">${pokemon.name}</h3>
                <small class="type">Type: <span>${pokemon.types[0].type.name}</span></small>
            </div>
        </div>
    `;
    //container.innerHTML += pokemonElementInnerHTML;
}

const creacionDeNumeracion = () => {
    paginacion.innerHTML = `
        <div class="input-group input-group-sm inputNavegacion">
            <div class="input-group-prepend">
                <button class="btn btn-outline-secondary" onclick="primera()">Primera</button>
            </div>
            <div class="input-group-prepend">
                <button class="btn btn-outline-secondary" onclick="previo()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                    </svg>
                </button>
            </div>
            <input type="text" class="form-control" id="inputText" placeholder="[${paginasTotales[0]} - ${paginasTotales[1]}]" onchange="cambiarPagina(this.value)">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" onclick="siguiente()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                    </svg>
                </button>
            </div>
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" onclick="ultima()">Ultima</button>
            </div>
            <div class="input-group-append">

                <label for="itemsPerPage">Pokemons por página:</label>
                <input type="number" class="form-control" id="itemsPerPage" placeholder="Max" value="${porPagina}" style="width: 70px" onchange="cambiarCantidad(this.value)">
            


            </div>
        </div>
    `;
}
inyeccionDeElementos = () => {
    pokemones.innerHTML = '';
    const fetchPromises = [];
    for (let i = (porPagina * paginaActual) - porPagina + 1; i <= porPagina * paginaActual; i++) {
        fetchPromises.push(
            fetch(`https://pokeapi.co/api/v2/pokemon-form/${i}`)
                .then(response => response.json())
        );
    }

    Promise.all(fetchPromises)
        .then(pokemonDataArray => {
            pokemonDataArray.forEach(pokemon => {
                //console.log(pokemon);
                inyectarPokemon(pokemon);
                h2.innerHTML = `Página actual: ${paginaActual}`;
            });
        })
        .catch(error => {
            console.error('Error fetching Pokemon data:', error);
        });

}
const cambiarCantidad = (numero) => {
    inputText.value = "";
    try {
        if (numero == "") throw new Error('No es número');
        numero = parseInt(numero);
        if (!Number.isInteger(numero)) throw new Error('Número inválido');
        if (numero > 0 && numero <= 1000) {
            porPagina = numero;
            paginaActual = 1;
            inyeccionDeElementos();
            paginasTotales[1] = parseInt(1000 / porPagina);
            inputText.placeholder = `[${paginasTotales[0]} - ${paginasTotales[1]}]`;

        } else {
            throw new Error('Número fuera de rango');
        }
    } catch (error) {
        //pokemones.innerHTML = `<p>Entrada inválida <u>${numero}</u></p>`;
        pokemones.innerHTML = `<p>${error.message}</p>`;
    }
}
cambiarPagina = (numero) => {
    // paginaActual = numero;
    // inyeccionDeElementos();
    try {
        if (numero == "") throw new Error('No es número');
        numero = parseInt(numero);
        if (!Number.isInteger(numero)) throw new Error('Número inválido');
        if (numero > 0 && numero <= paginasTotales[1]) {
            paginaActual = numero;
            inyeccionDeElementos();

        } else {
            throw new Error('Número fuera de rango');
        }
    } catch (error) {
        //pokemones.innerHTML = `<p>Entrada inválida <u>${numero}</u></p>`;
        pokemones.innerHTML = `<p>${error.message}</p>`;
    }
}
const previo = () => {
    if (paginaActual > 1) {
        paginaActual--;
        inyeccionDeElementos();
        inputText.value = paginaActual;
    }
    else {
        pokemones.innerHTML = `<p>Ya está en la primera página</p>`;
    }
}
const siguiente = () => {
    if (paginaActual < paginasTotales[1]) {
        paginaActual++;
        inyeccionDeElementos();
        inputText.value = paginaActual;
    }
    else {
        pokemones.innerHTML = `<p>Ya está en la última página</p>`;
    }

}
const primera = () => {
    paginaActual = 1;
    inyeccionDeElementos();
    inputText.value = paginaActual;

}
const ultima = () => {
    paginaActual = paginasTotales[1];
    inyeccionDeElementos();
    inputText.value = paginaActual;

}
