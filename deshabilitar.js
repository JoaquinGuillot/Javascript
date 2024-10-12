const buttonDeshabilitar = document.getElementById('buttonDeshabilitar');
const buttonHabilitar = document.getElementById('buttonHabilitar');
const textoHabilitable = document.getElementById('textoHabilitable');

const habilitar = () => {    
    textoHabilitable.disabled = false;
};
const deshabilitar = () => {
    textoHabilitable.disabled = true;
};
buttonDeshabilitar.addEventListener('click',deshabilitar);
buttonHabilitar.addEventListener('click',habilitar);

