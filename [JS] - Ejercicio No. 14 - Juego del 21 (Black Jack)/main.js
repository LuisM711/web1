let [puntosJugador, puntosComputadora] = [0, 0];
let cartasTotales = [];
onload = (event) => {
    cartasTotales = precargarCartas();
    cartasTotales = barajear(cartasTotales);
    console.log(cartasTotales);
    console.log(Object.keys(cartasTotales).length);

    pedir();
    pedir();

}
pedir = () => {
    pedirJugador();
    pedirComputadora();



}
pedirJugador = () => {
    //carta random
    //jugador.appendChild(cartasTotales[cartasTotales[Math.floor(Math.random() * 52)]]);
    // let cartaTemp = Object.keys(cartasTotales)[Math.floor(Math.random() * Object.keys(cartasTotales).length)];
    let cartaTemp = Object.keys(cartasTotales)[0];
    jugador.appendChild(cartasTotales[cartaTemp].imagen);

    console.log("carta valor" + cartasTotales[cartaTemp].valor);
    //quitar la carta temp dentro de cartasTotales
    //puntosJugador += cartasTotales[cartaTemp].valor;
    if (cartasTotales[cartaTemp].valor == 11) {
        let question = 0;
        while (question != 11 && question != 1) {
            question = prompt(`Tienes ${puntosJugador} puntos, ¿Quieres que el as valga 1 o 11?`);
            if (question == 11) {
                puntosJugador += 11;
            }
            else if (question == 1) {
                puntosJugador += 1;
            }
        }
    } else puntosJugador += cartasTotales[cartaTemp].valor;
    jugadorH2.innerHTML = `Jugador (puntaje = ${puntosJugador})`;
    console.log("puntos player" + puntosJugador);
    delete cartasTotales[cartaTemp];
    if (puntosJugador >= 17) {
        btPedir.classList.add("disabled");
        btPedir.disabled = true;
    }

}
pedirComputadora = () => {
    let cartaTemp = Object.keys(cartasTotales)[0];
    //console.log("lenghtthhtrhth "+Object.keys(cartasTotales).length);
    computadora.appendChild(cartasTotales[cartaTemp].imagen);
    //puntosComputadora += cartasTotales[cartaTemp].valor;
    if (cartasTotales[cartaTemp].valor == 11) {
        if (Math.random() < 0.5) {
            puntosComputadora += 11;
        } else {
            puntosComputadora += 1;
        }
    } else puntosComputadora += cartasTotales[cartaTemp].valor;
    console.log("puntos pc" + puntosComputadora);
    computadoraH2.innerHTML = `Computadora (puntaje = ${puntosComputadora})`;
    delete cartasTotales[cartaTemp];
}

detener = () => {
    //alert([puntosJugador, puntosComputadora]);

    if (puntosJugador <= 16) {
        alert("No puedes detenerte con menos de 16 puntos");
        return;
    }

    // no le entiendo muy bien a las reglas profe pero creo que es asi 😥😭
    if (puntosJugador > 21) {
        alert("Perdiste");
    } else if (puntosJugador == 21) {
        alert("Ganaste con blackjack");
    } else if (puntosJugador < puntosComputadora) {
        alert("Perdiste");
    } else if (puntosJugador > puntosComputadora) {
        alert("Ganaste");
    } else if (puntosJugador == puntosComputadora) {
        alert("Empate");
    } else {
        alert("Ganaste");
    }

    window.location.reload();
}






// precargarCartass = () => {
//     const imagenesPrecargadas = {};
//     const imagenes =
//         [
//             '2D', '2D', '2H', '2S', '3C', '3D', '3H', '3S', '4C', '4D', '4H', '4S', '5C', '5D', '5H', '5S',
//             '6C', '6D', '6H', '6S', '7C', '7D', '7H', '7S', '8C', '8D', '8H', '8S', '9C', '9D', '9H', '9S',
//             '10C', '10D', '10H', '10S', 'AC', 'AD', 'AH', 'AS', 'JC', 'JD', 'JH', 'JS', 'KC', 'KD', 'KH', 'KS',
//             'QC', 'QD', 'QH', 'QS'
//         ];

//     imagenes.forEach(nombreImagen => {
//         const imagen = new Image();
//         imagen.src = `cartas/${nombreImagen}.png`;
//         imagenesPrecargadas[nombreImagen] = imagen;
//     });
//     return imagenesPrecargadas;
// }
precargarCartas = () => {
    const imagenesPrecargadas = {};
    const cartas = [
        { nombre: '2D', valor: 2 }, { nombre: '2H', valor: 2 }, { nombre: '2S', valor: 2 },
        { nombre: '3C', valor: 3 }, { nombre: '3D', valor: 3 }, { nombre: '3H', valor: 3 }, { nombre: '3S', valor: 3 },
        { nombre: '4C', valor: 4 }, { nombre: '4D', valor: 4 }, { nombre: '4H', valor: 4 }, { nombre: '4S', valor: 4 },
        { nombre: '5C', valor: 5 }, { nombre: '5D', valor: 5 }, { nombre: '5H', valor: 5 }, { nombre: '5S', valor: 5 },
        { nombre: '6C', valor: 6 }, { nombre: '6D', valor: 6 }, { nombre: '6H', valor: 6 }, { nombre: '6S', valor: 6 },
        { nombre: '7C', valor: 7 }, { nombre: '7D', valor: 7 }, { nombre: '7H', valor: 7 }, { nombre: '7S', valor: 7 },
        { nombre: '8C', valor: 8 }, { nombre: '8D', valor: 8 }, { nombre: '8H', valor: 8 }, { nombre: '8S', valor: 8 },
        { nombre: '9C', valor: 9 }, { nombre: '9D', valor: 9 }, { nombre: '9H', valor: 9 }, { nombre: '9S', valor: 9 },
        { nombre: '10C', valor: 10 }, { nombre: '10D', valor: 10 }, { nombre: '10H', valor: 10 }, { nombre: '10S', valor: 10 },
        { nombre: 'AC', valor: 11 }, { nombre: 'AD', valor: 11 }, { nombre: 'AH', valor: 11 }, { nombre: 'AS', valor: 11 },
        { nombre: 'JC', valor: 10 }, { nombre: 'JD', valor: 10 }, { nombre: 'JH', valor: 10 }, { nombre: 'JS', valor: 10 },
        { nombre: 'KC', valor: 10 }, { nombre: 'KD', valor: 10 }, { nombre: 'KH', valor: 10 }, { nombre: 'KS', valor: 10 },
        { nombre: 'QC', valor: 10 }, { nombre: 'QD', valor: 10 }, { nombre: 'QH', valor: 10 }, { nombre: 'QS', valor: 10 }
    ];

    cartas.forEach(carta => {
        const imagen = new Image();
        imagen.src = `cartas/${carta.nombre}.png`;
        imagenesPrecargadas[carta.nombre] = { imagen, valor: carta.valor };
    });
    return imagenesPrecargadas;
}
const barajear = (cartasPrecargadas) => {
    const nombresCartas = Object.keys(cartasPrecargadas);
    const cartasBarajeadas = {};

    for (let i = nombresCartas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nombresCartas[i], nombresCartas[j]] = [nombresCartas[j], nombresCartas[i]];
    }

    nombresCartas.forEach(nombre => {
        cartasBarajeadas[nombre] = cartasPrecargadas[nombre];
    });

    return cartasBarajeadas;
};
