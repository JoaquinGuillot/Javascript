const bajando = () =>{
let baja = 10;
while  (baja > 0) {
    console.log(baja);
    baja--;
    }
}
console.log('Bajando numeros');
bajando();
    const buttonWhile = document.getElementById('buttonWhile')
  
    buttonWhile.addEventListener('click', function apareceWhile() {
        console.log('Bajando numeros usuario');
        bajando();
    });