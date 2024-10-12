

const mayor = (a, b) => {
    let c;
    if (a>b){
        c = a;
        
    }else if(a<b){
        c = b; 
    }else{
        c = a
        console.log('Los numeros son iguales');
        alert('Los numeros son iguales')
    }
     console.log('El mayor es: ' + c);
     return c;
  };
  console.log("Funcion mayor")
  mayor(10,5);
  
  const buttonMayor = document.getElementById('buttonMayor')
  
  buttonMayor.addEventListener('click', function apareceMayor() {
    console.log("Mayor usuario")
    let num1 = parseInt(prompt("Ingrese el primer numero"));
    let num2 = parseInt(prompt("Ingrese el segundo numero"));
    let resultado = mayor(num1,num2)
    alert("El mayor es: " + resultado)
    console.log('Numero 1: '+ num1);
    console.log('Numero 2: '+ num2);
    console.log('El mayor es: '+ resultado);
  });