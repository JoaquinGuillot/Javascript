let nombre;
const buttonSaludo = document.getElementById('saludo')
buttonSaludo.addEventListener('click', function saludo(){
    nombre=prompt('¿Cómo te llamas?');;
    alert('Hola '+ nombre +' , ¡bienvenido a mi página web!');
    console.log('Hola '+ nombre +', ¡bienvenido a mi página web!')
});
