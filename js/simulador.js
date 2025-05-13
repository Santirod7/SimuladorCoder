let ciudades = []
let= contadorLista = 0

const Barcelona = {
    pais: "España",
    alcalde: "Jaume Collbon",
    habitantes: "1.628 millones de habitantes"
};

function listarCiudades () {
  document.write(
    `<h2> Lista de ciudades N°${contadorLista} de arreglos  </h2>`)
    document.write(`<ul>`);
    for (let i = 0; i < ciudades.length; i++) {
      document.write(`<li>${ciudades[i]}</li>`);
    }
    document.write(`</ul>`);
    contadorLista=contadorLista+1;
    console.log( `Debería ser la lista numero ${contadorLista}`)
}

for (let i = 0; confirm("¿Quiere ingresar una ciudad?"); i++) {
    ciudades[i] = prompt('Ingrese una ciudad');
  } 
  document.write(
    `<h2>Analisis del arreglo </h2>
    <p>El arreglo tiene: ${ciudades.length} elementos </p>`);
  document.write(`<ul>`);
  for (let i = 0; i < ciudades.length; i++) {
    if(ciudades[i] === "" || ciudades[i] === null){
        ciudades[i]="ERROR *No ingreso el nombre de la ciudad*"
    }
    if(i == 0 || i == 2){
        document.write(`<li>Elemento de la posicion ${i} es: ${ciudades[i]}</li>`);
      }
    }
    document.write(`<li>Elemento de la ultima posicion es: ${ciudades[ciudades.length - 1]}</li>`);
    //Agrego al final de la lista, la ciudad "Paris"
    ciudades.push("Paris");
    document.write(`<li>Elemento de la ultima posicion es: ${ciudades[ciudades.length - 1]}</li>`);
  document.write(`</ul>`);

  
  listarCiudades();
  ciudades[1] = prompt("Se generará una lista donde se cambiará la ciudad de la posición 1. Escribe por pantalla el elemento que ocupa la segunda posición.");
  listarCiudades();
  alert('También, se hará automaticamente otra lista donde vamos a cambiar el elemento del array de posición 2 por "Barcelona"')
  ciudades[2] = "Barcelona"
  listarCiudades(); 
  //Este es un console log del Objeto de Barcelona cargado manualmente
console.log(Barcelona)
  