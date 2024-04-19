onload = (event) => {
    let clicks = 0;
    let estado = 0;
    let puntos = 0;
    let n = 0;
    puntaje.innerHTML = `Clicks: ${clicks}`;
    aciertos.innerHTML = `Aciertos: ${puntos}`
    let cartas = [
        'zoro', 'zoro',
        'sanji', 'sanji',
        'nami', 'nami',
        'luffy', 'luffy',
        'ivankov', 'ivankov',
        'chopper', 'chopper',
        'bonchan', 'bonchan',
        'boa', 'boa'
    ];
    precargarImagenes();
    cartasBarajeadas = cartas.sort(() => Math.random() - 0.5);
    cartasBarajeadas = cartasBarajeadas.sort(() => Math.random() - 0.5);

    //esto de la linea de abajo es solo pa calar
    cartasBarajeadas = cartas;
    for (let i = 1; i <= 16; i++) {
        let carta = document.querySelector(`#carta${i}`);
        carta.dataset.valor = cartasBarajeadas[i - 1];
        carta.addEventListener('click', () => {
            if (carta.classList.contains('seleccionada') ||
                carta.classList.contains('adivinada') || estado >= 2) return;
            carta.classList.add('seleccionada');
            estado++
            //carta.classList.remove('seleccionada');
            puntaje.innerHTML = `Clicks: ${++clicks}`;
            carta.style.backgroundImage = `url('img/${carta.dataset.valor}.webp')`;
            if (estado === 2) {
                let seleccionadas = document.querySelectorAll('.seleccionada');
                if (seleccionadas.length === 2) {
                    let [primera, segunda] = seleccionadas;
                    if (primera.dataset.valor === segunda.dataset.valor) {
                        setTimeout(() => {
                            primera.classList.add('adivinada');
                            segunda.classList.add('adivinada');
                            primera.classList.remove('seleccionada');
                            segunda.classList.remove('seleccionada');
                            estado = 0;
                            aciertos.innerHTML = `Aciertos: ${++puntos}`;
                            if (puntos == 8) {
                                ganaste();
                            }
                        }, 100);
                    } else {
                        setTimeout(() => {
                            primera.classList.remove('seleccionada');
                            segunda.classList.remove('seleccionada');
                            //primera.style.backgroundImage = `url('img/logo.jpg')`;
                            //segunda.style.backgroundImage = `url('img/logo.jpg')`;
                            primera.style.removeProperty('background-image');
                            segunda.style.removeProperty('background-image');
                            estado = 0;
                        }, 1000);
                    }
                }
            }

        })
    }

    let intervalo;

    const ganaste = () => {
        let div = document.createElement('div');
        div.innerHTML = `
        <p id="congrats">Felicidades, ganaste! <br>
            Resolviste el memorama en ${n} segundos.
            <button onclick="location.reload()">Jugar de nuevo</button>

        </p>
        
        `;
        //document.querySelector('.container').append(div);
        tiempo.after(div);
        clearInterval(intervalo);
        // location.reload();
    };

    intervalo = setInterval(function () {
        n++;
        tiempo.innerHTML = `Tiempo: ${n}`;
    }, 1000);

}
precargarImagenes = () => {
    const imagenesPrecargadas = {};
    const imagenes =
        ['zoro.webp', 'sanji.webp', 'nami.webp', 'luffy.webp',
            'ivankov.webp', 'chopper.webp', 'bonchan.webp', 'boa.webp'];

    imagenes.forEach(nombreImagen => {
        const imagen = new Image();
        imagen.src = `img/${nombreImagen}`;
        imagenesPrecargadas[nombreImagen] = imagen;
    });
}