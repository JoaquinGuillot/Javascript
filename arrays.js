
let arr1 = [1,2,3,4,5,6,7,8,9,10];

let arrFinal = [];
const multiplicados = (arr2) => {
    let resultado = []
    for(let i= 0; i < 10; i++){
        resultado[i] = arr1[i] * 2;
    }
    return resultado;
  };

arrFinal = multiplicados(arr1);
console.log('Mostrar Arreglos');
console.log('Numeros Originales: '+ arr1);
console.log('Numeros multiplicados por 2: '+arrFinal);

const mostrarArreglos = document.getElementById('mostrarArreglos')
  mostrarArreglos.addEventListener('click', function apareceMostrarArreglos() {
    console.log("Mostrar Arreglos usuario");
    alert('Numeros Originales: '+ arr1);
    alert('Numeros multiplicados por 2: '+arrFinal);
    console.log('Numeros Originales: '+ arr1);
    console.log('Numeros multiplicados por 2: '+arrFinal);
  });

let pares =[];

console.log('Pares actuales:');
console.log(pares);

const agregarPares = () => {

    for(let i= 1; i < 21; i++){
        if(i % 2 === 0){
            pares.push(i)
        }
    }
  };

const quitarPares = () => {
    pares = [];
};
console.log('Agregando y quitando pares');
agregarPares();
console.log('Se agregaron los primeros 10 pares: ' + pares);
quitarPares();
console.log('Se eliminaron los pares: ' + pares);

const buttonPares = document.getElementById('buttonPares')
buttonPares.addEventListener('click', function aparecePares() {
    if (pares.length === 0){
        console.log('Agregando Pares Usuario');
        agregarPares();
        alert('Se agregaron los primeros 10 pares:' + pares);
        console.log('Se agregaron los primeros 10 pares: ' + pares);
        buttonPares.textContent = "Quitar Pares";
        } else {
            console.log('Quitando Pares Usuario');
            quitarPares();
            alert('Se eliminaron los pares: ' + pares);
            console.log('Se eliminaron los pares: ' + pares);
            buttonPares.textContent = "Agregar Pares";
        }
  });