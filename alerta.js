const campoTexto = document.getElementById('campoTexto');
const buttonAlerta = document.getElementById('buttonAlerta');

buttonAlerta.addEventListener('click', () => {
    if  (campoTexto.value.length > 0) {
        const valorIngresado = campoTexto.value;
  alert('El valor ingresado es: ' + valorIngresado);
    }else{
        alert('Usted no ingresó ningún valor.');
    }

});