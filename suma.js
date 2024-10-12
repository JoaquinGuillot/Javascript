

const sumar = (a, b) => {
  let c;
  c = a+b;
  return c;
};
console.log("Funcion sumar")
console.log(sumar(10,5));

const buttonSuma = document.getElementById('buttonSuma')

buttonSuma.addEventListener('click', function apareceSuma() {
  console.log("Suma usuario")
  let num1 = parseInt(prompt("Ingrese el primer numero a sumar"));
  let num2 = parseInt(prompt("Ingrese el segundo numero a sumar"));
  let resultado = sumar(num1,num2)
  alert("El resultado es: " + resultado)
  console.log('Numero 1: '+ num1);
  console.log('Numero 2: '+ num2);
  console.log('El resultado es: '+ resultado);
});