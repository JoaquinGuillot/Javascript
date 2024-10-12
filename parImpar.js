const parImpar = (a) => {
    let b;
    if ((a % 2) === 0){
        console.log('El numero ' + a + ' es par');
        b = "par";
    }else {
        console.log('El numero ' + a + ' es impar');
        b= "impar";
    }
    return b;
  };
  console.log("Funcion ParImpar");
  parImpar(10);
  parImpar(5);
  
  const buttonParImpar = document.getElementById('buttonParImpar')
  
  buttonParImpar.addEventListener('click', function apareceParImpar() {
    console.log("ParImpar usuario");
    let numero = prompt('Ingrese un numero para determinar si es par o impar');
    alert('El numero '+ numero +' es ' + parImpar(numero))
  });