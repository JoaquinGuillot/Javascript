const convertirCelsius = (c) => {
    let f = (c*1.8)+32;
    console.log(c+'°C son equivalentes a '+ f+'°F');
    return f;
  };
  console.log('ConvertirCelsius');
  convertirCelsius(10);
  convertirCelsius(5);
  const buttonConvertir = document.getElementById('buttonConvertir')
  buttonConvertir.addEventListener('click', function apareceConvertir() {
    console.log("ConvertirCelsius usuario");
    let numero = prompt('Ingrese un numero para determinar su equivalente en °F');
    alert(numero +'°C son equivalentes a ' + convertirCelsius(numero)+ '°F')
  });