let numero;
const mayorA100 = () =>{
    do{
        numero = prompt('Ingrese un numero mayor a 100:')
    } while  (numero<=100);
    console.log('Ingresaste un numero mayor a 100: '+ numero);
    return numero;
}

        const buttonMayor100 = document.getElementById('buttonMayor100')
      
        buttonMayor100.addEventListener('click', function apareceMayorA100() {
            console.log('Numero mayor a 100');
            mayorA100();
        });