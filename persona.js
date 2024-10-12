function Persona(nombre, edad, ciudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.cambiarCiudad = function(nuevaCiudad) {
      this.ciudad = nuevaCiudad;
    };
  }
  function mostrarPersonas() {
    let listaPersonas = '';
    personas.forEach(persona => {
      listaPersonas += 'Nombre: '+persona.nombre+', Edad: '+persona.edad+', Ciudad: '+persona.ciudad+ '//';
    });
    alert(listaPersonas);
    console.log(listaPersonas);
  }

  let personas = [];
  const persona = new Persona('Ana', 30, 'Barcelona')
console.log(persona);
personas.push(persona);
  const buttonPersona = document.getElementById('buttonPersona')
  buttonPersona.addEventListener('click', function aparecePersona() {
    console.log("Persona usuario");
    let nom1 = prompt('Ingrese el nombre de la persona');
    let edad1 = prompt('Ingrese la edad de la persona');
    let ciudad1 = prompt('Ingrese la ciudad de la persona');
    const persona2= new Persona(nom1,edad1,ciudad1)
    personas.push(persona2);
    alert('Persona creada! Nombre: '+nom1+'; Edad: '+edad1+'; Ciudad: '+ciudad1)
    console.log('Persona creada! Nombre: '+nom1+'; Edad: '+edad1+'; Ciudad: '+ciudad1)
  });

const mostrar = document.getElementById('mostrar')
  mostrar.addEventListener('click', function apareceMostrar() {
    mostrarPersonas();
    });

const cambiarCiudad = document.getElementById('cambiarCiudad');
cambiarCiudad.addEventListener('click', function cambiarCiudad() {

    let indicePersona;
    do{
    indicePersona = prompt('Ingrese el índice de la persona (desde 0 hasta' + (personas.length - 1) + ')');
    }while (indicePersona<0 && indicePersona > personas.length)
    let nuevaCiudad = prompt('Ingrese la nueva ciudad');
    personas[indicePersona].cambiarCiudad(nuevaCiudad);
    alert('Ciudad de '+personas[indicePersona].nombre+'cambiada con éxito! Nueva Ciudad: '+nuevaCiudad);
    console.log('');
});
