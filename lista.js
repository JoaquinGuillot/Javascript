const lista = document.getElementById('listaSeleccionable');
const elementos = lista.getElementsByTagName('li');

for (let i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', function() {
    console.log(this.textContent);
    });

}
document.querySelectorAll('#listaSeleccionable li').forEach((li) => {
    li.style.cursor = 'pointer';
});