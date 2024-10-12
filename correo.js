const form = document.getElementById('formCorreo');
const correoInput = document.getElementById('correo');
const correoGuardadoDiv = document.getElementById('correoGuardado');
const eliminarCorreo = document.getElementById('eliminarCorreo');

const guardarCorreo = (correo) => {
  localStorage.setItem('correo', correo);
};

const mostrarCorreoGuardado = () => {
  const correoGuardado = localStorage.getItem('correo');
  if (correoGuardado) {
    correoGuardadoDiv.innerText = 'Correo guardado: ' + correoGuardado;
    eliminarCorreo.style.display = 'block';
  } else {
    correoGuardadoDiv.innerText = '';
    eliminarCorreo.style.display = 'none';
  }
};

const eliminarCorreoClick = () => {
  const correoGuardado = localStorage.getItem('correo');
  if (correoGuardado) {
    localStorage.removeItem('correo');
    correoGuardadoDiv.innerText = ''; // Actualiza el texto del div
    eliminarCorreo.style.display = 'none';
  }
};

eliminarCorreo.addEventListener('click', eliminarCorreoClick);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const correo = correoInput.value;
  guardarCorreo(correo);
  mostrarCorreoGuardado();
});

mostrarCorreoGuardado();