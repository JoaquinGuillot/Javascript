
let esAzul = false;

const alternarColorParrafos = () => {    
    const parrafos = document.querySelectorAll('p');
    
    if (!esAzul) {
        parrafos.forEach(p => p.style.color = 'blue');
        buttonCambiarColor.textContent = 'Revertir color';
        esAzul = true;
    } else {
        parrafos.forEach(p => p.style.color = 'black');
        buttonCambiarColor.textContent = 'Cambiar color a azul';
        esAzul = false;
    }
};

const buttonCambiarColor = document.getElementById('buttonCambiarColor');
buttonCambiarColor.addEventListener('click', alternarColorParrafos);