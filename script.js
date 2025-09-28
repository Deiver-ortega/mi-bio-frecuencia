// Archivo: script.js

// 🎵 PARTE 1: CONFIGURACIÓN ROMÁNTICA
// ----------------------------------------------------
// ¡CLAVE FINAL! La chica debe ingresar exactamente "yogurcito"
const CLAVE_CORRECTA = "yogurcito"; 

// Mensaje de amor final (Biología + Ingeniería)
// ¡Ajusta este mensaje para que sea aún más romántico y personal!
const MENSAJE_FINAL = "Mi corazón encontró su frecuencia perfecta en ti. ¡Te Amo!";
// ----------------------------------------------------


// Referencia al área donde se muestra el código
const consola = document.getElementById('consola-salida');
let ejecutando = false;

// Array de líneas de simulación con mensajes adaptados al color verde neón
const lineasSimulacion = [
    "---------------------------------------------------",
    ">> INICIANDO ANÁLISIS DE FRECUENCIA CARDÍACA...",
    ">> Estableciendo conexión con el ADN sentimental...",
    ">> [ERROR]: Acceso restringido. Se requiere CLAVE MUSICAL.",
    ">> Frecuencia Clave recibida: " + CLAVE_CORRECTA.toUpperCase(),
    ">> Procesando información genética y armónica...",
    ">> [OK]: ¡Sincronización de amor al 100%!",
    "---------------------------------------------------",
    ">> DESBLOQUEANDO EL MENSAJE MÁS PURO DE MI CORAZÓN...",
];


// Función para escribir texto letra por letra (typing effect)
function escribirLinea(linea, index, callback) {
    if (index < linea.length) {
        consola.textContent += linea[index];
        setTimeout(() => escribirLinea(linea, index + 1, callback), 20); // 20ms por letra
    } else {
        consola.textContent += '\n'; // Salto de línea
        if (callback) callback();
    }
}

// Función que maneja la simulación línea por línea
function simularAnalisis(indiceLinea) {
    if (indiceLinea < lineasSimulacion.length) {
        escribirLinea(lineasSimulacion[indiceLinea], 0, () => {
            simularAnalisis(indiceLinea + 1);
        });
    } else {
        // Cuando toda la simulación termina, muestra el mensaje final
        mostrarMensajeFinal();
    }
}

// Muestra el mensaje de amor y AHORA inicia el video local
function mostrarMensajeFinal() {
    consola.innerHTML += `<span class="mensaje-final">${MENSAJE_FINAL}</span>`;
    ejecutando = false;

    // 🎥 CÓDIGO PARA REPRODUCIR EL VIDEO LOCAL:
    const videoArea = document.getElementById('video-area');
    const videoPlayer = document.getElementById('video-player');

    // Muestra el contenedor del video
    videoArea.style.display = 'block';

    // Inicia la reproducción
    setTimeout(() => {
        videoPlayer.currentTime = 0; // Asegura que el video empiece desde el inicio
        
        videoPlayer.play().catch(error => {
            console.error("La reproducción automática falló. Algunos navegadores pueden bloquear el autoplay. Intenta hacer clic en el botón de Play del video.");
            // Si falla el autoplay, el usuario puede darle clic a la barra de controles
        });

    }, 1000); 
    // ------------------------------------
}


// Función principal llamada por el botón
function iniciarAnalisis() {
    if (ejecutando) return; // Evita doble clic

    const campoClave = document.getElementById('clave');
    // Normaliza la entrada (todo minúsculas, sin espacios)
    const intento = campoClave.value.toLowerCase().trim();

    if (intento === CLAVE_CORRECTA) {
        ejecutando = true;
        consola.textContent = ''; // Limpia la consola
        simularAnalisis(0); // Inicia la simulación
    } else {
        // Mensaje de error ajustado para el estilo verde neón
        consola.textContent = `[ERROR] Frecuencia "${intento.toUpperCase()}" no encontrada. Por favor, ¡piensa en NUESTRA canción!`;
        ejecutando = false;
        campoClave.value = ''; // Limpia el campo
    }
}