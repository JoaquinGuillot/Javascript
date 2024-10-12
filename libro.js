function Libro(titulo, autor, anio) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.masDe10 = function () {
      if(this.anio<2014){
        console.log(this.titulo + ' es antiguo');
        return this.titulo +' es antiguo'
      }else{
        console.log(this.titulo +' es reciente');
        return this.titulo +' es reciente'
      }
    };
  }
  function mostrarLibros() {
    let listaLibros = '';
    libros.forEach(libro => {
      listaLibros += 'Titulo: '+libro.titulo+', Autor: '+libro.autor+', Año: '+libro.anio+ '//';
    });
    alert(listaLibros);
    console.log(listaLibros);
  }
  let libros = [];

  const libro = new Libro('El señor de las moscas', 'William Golding', 1954)
console.log(libro);
libros.push(libro);
  const buttonLibro = document.getElementById('buttonLibro')
  buttonLibro.addEventListener('click', function apareceLibro() {
    console.log("Libro usuario");
    let tit1 = prompt('Ingrese el titulo del libro');
    let autor1 = prompt('Ingrese el autor del libro');
    let anio1 = prompt('Ingrese el año del libro');
    const libro2= new Libro(nom1,edad1,ciudad1)
    libros.push(persona2);
    alert('Libro creado! Titulo: '+tit1+'; Autor: '+autor1+'; Año: '+anio1)
    console.log('Libro creado! Titulo: '+tit1+'; Autor: '+autor1+'; Año: '+anio1)
  });

  const mostrarLibro = document.getElementById('mostrarLibro')
  mostrarLibro.addEventListener('click', function apareceMostrarLibros() {
    mostrarLibros();
    });

    const esReciente = document.getElementById('esReciente');
esReciente.addEventListener('click', function esReciente() {

    let indiceLibro;
    do{
    indiceLibro = prompt('Ingrese el índice del libro (desde 0 hasta' + (libros.length - 1) + ')');
    }while (indiceLibro<0 && indiceLibro > libros.length)
    alert(libros[indiceLibro].masDe10()); 
    console.log(libros[indiceLibro].masDe10()); 
});