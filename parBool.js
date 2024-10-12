
const parBool = (a) => {
    return((a % 2) === 0);
  };
  console.log('ParBool');
  console.log('El numero 10 es par: '+ parBool(10));
  console.log('El numero 5 es par: '+ parBool(5));
  const buttonParBool = document.getElementById('buttonParBool')
  
  buttonParBool.addEventListener('click', function apareceParBool() {
    console.log("ParBool usuario");
    let numero = prompt('Ingrese un numero para determinar si es par');
    alert('El numero '+ numero +' es par: ' + parBool(numero))
    console.log('El numero ' +numero+ ' es par: '+ parBool(5));
  });