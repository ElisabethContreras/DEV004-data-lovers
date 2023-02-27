
//aqui se deben agregar las demas importaciones
import { buscarNombre, filtrarSexo, filtrarDisciplina, filtrarEspecialidad, filtrarMedalla, filtrarPais,ordenAlfabetico,calcularPorcentaje } from './data.js'; //aqui se deben agregar las demas importaciones
import athletes from './data/athletes/athletes.js';

import data from './data/athletes/athletes.js';// importo toda la bbdd desde atletas.js, que ya fue exportada desde el .json a js

//Declaracion de variables
const infoAtletas = data.athletes.slice(0,10);//esta var me muestra todos los datos de los atletas//Guardo los resultados de la data del js en una variable
const buscarNombrePersona = document.getElementById("busqueda");//asigno a var buscarNombreAtleta el input que se encuentra en html por medio del id"busqueda"
const seleccionarSexoAtleta = document.getElementById("sexo-filtrar"); //se coloca el id del select en html
const seleccionarDisciplina = document.getElementById("disciplinas-filtrar");//se coloca el id del select en html
const seleccionarEspecialidad = document.getElementById("especialidad-filtrar");//se coloca el id del select en html
const seleccionarMedalla = document.getElementById("medalla-filtrar");
const seleccionarPais = document.getElementById("pais-filtrar");
const SeleccionarOrdenAlfabetico=document.getElementById("orden-alfabetico-ordenar");
const resultadocalculo=document.getElementById("calculo");


//console.log(buscarNombre, data);

//Escucha de las acciones
buscarNombrePersona.addEventListener("keyup", buscarPorNombre);
seleccionarSexoAtleta.addEventListener("change", mostrarResultadosFiltrarSexo); //depues de crear la funcion agrego el nombre de ella despues del change
seleccionarDisciplina.addEventListener("change", mostrarResultadosFiltrarDisciplina);
seleccionarEspecialidad.addEventListener("change", mostrarResultadosFiltrarEspecialidad);
seleccionarMedalla.addEventListener("change", mostrarResultadosFiltrarMedalla);
seleccionarPais.addEventListener("change", mostrarResultadosFiltrarPais);
SeleccionarOrdenAlfabetico.addEventListener("change", mostrarOrdenAlfabetico);


// <!-- ** tarjetas  -->
//me traigo las datos de la bbdd y creo desde atletasMain.js items en el HTML para visualizarlos. 
function printCards(data) {
  document.getElementById("cards-container").innerHTML = data.map((item) =>
    `<section class="caja">
  <figure>
     <h2 class="nombre">${item.name}</h2>
     <img class="frontal" src="Imagenes/generales/rio2.png" width="300" height="350" alt="" >
        <figcaption class="trasera">
           <div class="infotarjetas">
               <p class="tamaño-parrafo" ><strong class="tamaño-texto"> Sexo: </strong> ${item.gender} </p>
               <p class="tamaño-parrafo"><strong class="tamaño-texto"> Altura: </strong> ${item.height} </p>
               <p class="tamaño-parrafo"><strong class="tamaño-texto"> Peso: </strong> ${item.weight} </p>
               <p class="tamaño-parrafo"><strong class="tamaño-texto"> Disciplina: </strong> ${item.sport} </p>
               <p class="tamaño-parrafo"><strong class="tamaño-texto"> Equipo: </strong> ${item.team} </p>
               <p class="tamaño-parrafo"><strong class="tamaño-texto"> País: </strong> ${item.noc} </p>
               <p class="tamaño-parrafo"><strong class="tamaño-texto"> Edad: </strong> ${item.age} </p>
               <p class="tamaño-parrafo"><strong class="tamaño-texto"> Especialidad: </strong> ${item.event} </p>
               <p class="tamaño-parrafo"><strong class="tamaño-texto"> Medalla: </strong> ${item.medal} </p>
           </div>
       </figcaption>
   </figure>

</section>
    `).join('');
}
printCards(infoAtletas);

// function imprimirData (data){
//   document.getElementById("contenedor-tarjetas").innerHTML=data.map((item)=>
//     `<section class="caja">
//            <figure>
//               <h2 class="nombre">${item.name}</h2>
//               <img class="frontal" src="Imagenes/generales/rio2.png" width="300" height="350" alt="" >
//                  <figcaption class="trasera">
//                     <div class="infotarjetas">
//                         <p class="tamaño-parrafo" ><strong class="tamaño-texto"> Sexo: </strong> ${item.gender} </p>
//                         <p class="tamaño-parrafo"><strong class="tamaño-texto"> Altura: </strong> ${item.height} </p>
//                         <p class="tamaño-parrafo"><strong class="tamaño-texto"> Peso: </strong> ${item.weight} </p>
//                         <p class="tamaño-parrafo"><strong class="tamaño-texto"> Disciplina: </strong> ${item.sport} </p>
//                         <p class="tamaño-parrafo"><strong class="tamaño-texto"> Equipo: </strong> ${item.team} </p>
//                         <p class="tamaño-parrafo"><strong class="tamaño-texto"> País: </strong> ${item.noc} </p>
//                         <p class="tamaño-parrafo"><strong class="tamaño-texto"> Edad: </strong> ${item.age} </p>
//                         <p class="tamaño-parrafo"><strong class="tamaño-texto"> Especialidad: </strong> ${item.event} </p>
//                         <p class="tamaño-parrafo"><strong class="tamaño-texto"> Medalla: </strong> ${item.medal} </p>
//                     </div>
//                 </figcaption>
//             </figure>

//     </section>
//     `).join("");// se creó un subtitulo "nombre", extrayendo del athletes.js
// }
// imprimirData(infoAtletas);





//*************************** */

// FUNCION BUSCAR NOMBRE DEL ATLETA EN BUSCADOR
function buscarPorNombre(event) {
  const nombrePersona = buscarNombre(infoAtletas, event.target.value);
  printCards(nombrePersona);
}

// FUNCION FILTRAR ** SEXO ** ATLETA EN BOX BUSCADOR
function mostrarResultadosFiltrarSexo() {
  if (this.value === "F" || this.value === "M") {
    const valorSeleccionadoSexo = seleccionarSexoAtleta.value;//aqui se coloca el nombre dela const filtarSexoAtleta
    const seleccionSexo = filtrarSexo(infoAtletas, valorSeleccionadoSexo); // despues de asignar la variable,se debe asignar de impor filtrarSexo y pasar los valores de infoAtletas y valorSeleccionadoSexo
    printCards(seleccionSexo);
    mostrarPorcentaje(infoAtletas, seleccionSexo);
    // seleccionarSexoAtleta.options[(seleccionarSexoAtleta.selectedIndex=[0])];
    seleccionarDisciplina.options[(seleccionarDisciplina.selectedIndex=[0])];
    seleccionarEspecialidad.options[(seleccionarEspecialidad.selectedIndex=[0])];
    seleccionarMedalla.options[(seleccionarMedalla.selectedIndex=[0])];
    seleccionarPais.options[(seleccionarPais.selectedIndex=[0])];

  }
  else {
    printCards(infoAtletas);
  }
}
// function imagenSexo(params) {
//   if (this.value==="F"){
//     return "hola👩";

//   }
// }


// 1.-FUNCION FILTRAR DISCIPLINA, LLENADO DINAMICAMENTE AL HTML (BOX), FILTRA QUE NO SE REPITAN LOS DATOS EN LA LISTA Y LAS ORDENA ALBABETICAMENTE
function llenadoOpcionesDisciplinas(options_list) {
  let options = options_list;
  let modelList = document.getElementById("disciplinas-filtrar");
  const arraySports = []

  for (let index = 0; index < options.athletes.length; index++) {
    if (!arraySports.includes(options.athletes[index].sport)) {
      arraySports.push(options.athletes[index].sport);
    }
  }
  // Ordenar el array alfabéticamente
  arraySports.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  // Recorrer el array ordenado y agregar cada opción al select
  for (let i = 0; i < arraySports.length; i++) {

    let opt = document.createElement("option");
    // le damos un valor
    opt.value = arraySports[i];
    // le ponemos un texto
    opt.textContent = arraySports[i];

    // lo agregamos al select
    modelList.options.add(opt);
  }
}
llenadoOpcionesDisciplinas(athletes);

//MUESTRA EL RESULTADO DE FILTRAR DISCIPLINA
function mostrarResultadosFiltrarDisciplina() {
  if (this.value==="otros") {
    printCards(infoAtletas);
  }else{
    const valorSeleccionadoDisciplina = seleccionarDisciplina.value;
    const seleccionDisciplina = filtrarDisciplina(infoAtletas, valorSeleccionadoDisciplina);
    printCards(seleccionDisciplina);
    mostrarPorcentaje(infoAtletas, seleccionDisciplina);
    seleccionarSexoAtleta.options[(seleccionarSexoAtleta.selectedIndex=[0])];
    // seleccionarDisciplina.options[(seleccionarDisciplina.selectedIndex=[0])];
    seleccionarEspecialidad.options[(seleccionarEspecialidad.selectedIndex=[0])];
    seleccionarMedalla.options[(seleccionarMedalla.selectedIndex=[0])];
    seleccionarPais.options[(seleccionarPais.selectedIndex=[0])];
  }
  
}

// 1.-FUNCION FILTRAR ESPECIALIDAD, LLENADO DINAMICAMENTE AL HTML (BOX), FILTRA QUE NO SE REPITAN LOS DATOS EN LA LISTA Y LAS ORDENA ALBABETICAMENTE
function llenadoOpcionesEspecialidad(options_list) {
  let options = options_list;
  let modelList = document.getElementById("especialidad-filtrar");
  const arrayEspecialidad = [] //arrayEspecialidad significa que es un arreglo de la especialidad (event es especiliadad en ingles y asi esta en el json athetes)

  for (let index = 0; index < options.athletes.length; index++) {
    if (!arrayEspecialidad.includes(options.athletes[index].event)) {
      arrayEspecialidad.push(options.athletes[index].event)
    }
  }
  // Ordenar el array alfabéticamente
  arrayEspecialidad.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  // Recorrer el array ordenado y agregar cada opción al select
  for (let i = 0; i < arrayEspecialidad.length; i++) {
    let opt = document.createElement("option");
    // le damos un valor
    opt.value = arrayEspecialidad[i];
    // le ponemos un texto
    opt.textContent = arrayEspecialidad[i];

    // lo agregamos al select
    modelList.options.add(opt);
  }
}
llenadoOpcionesEspecialidad(athletes);

function mostrarResultadosFiltrarEspecialidad(event) {
  if (this.value==="otros") {
    printCards(infoAtletas);
  }else{
    const valorSeleccionadoEspecialidad = seleccionarEspecialidad.value;
    const seleccionEspecialidad = filtrarEspecialidad(infoAtletas, valorSeleccionadoEspecialidad);
  printCards(seleccionEspecialidad);
  mostrarPorcentaje(infoAtletas, seleccionEspecialidad);
  seleccionarSexoAtleta.options[(seleccionarSexoAtleta.selectedIndex=[0])];
  seleccionarDisciplina.options[(seleccionarDisciplina.selectedIndex=[0])];
  // seleccionarEspecialidad.options[(seleccionarEspecialidad.selectedIndex=[0])];
  seleccionarMedalla.options[(seleccionarMedalla.selectedIndex=[0])];
  seleccionarPais.options[(seleccionarPais.selectedIndex=[0])];
  }
  
}

// FUNCION FILTRAR MEDALLA
function mostrarResultadosFiltrarMedalla() {
  if (this.value==="otros") {
    printCards(infoAtletas);
  }else{
     const valorSeleccionadoMedalla = seleccionarMedalla.value;
     const seleccionMedalla = filtrarMedalla(infoAtletas, valorSeleccionadoMedalla);
     printCards(seleccionMedalla);
     mostrarPorcentaje(infoAtletas, seleccionMedalla);
     seleccionarSexoAtleta.options[(seleccionarSexoAtleta.selectedIndex=[0])];
     seleccionarDisciplina.options[(seleccionarDisciplina.selectedIndex=[0])];
     seleccionarEspecialidad.options[(seleccionarEspecialidad.selectedIndex=[0])];
    //  seleccionarMedalla.options[(seleccionarMedalla.selectedIndex=[0])];
     seleccionarPais.options[(seleccionarPais.selectedIndex=[0])];
  }
 
}

// 1.-FUNCION FILTRAR PAIS, LLENADO DINAMICAMENTE AL HTML (BOX), FILTRA QUE NO SE REPITAN LOS DATOS EN LA LISTA Y LAS ORDENA ALBABETICAMENTE
function llenadoOpcionesPais(options_list) {
  let options = options_list;
  let modelList = document.getElementById("pais-filtrar");
  const arrayPais = [];

  for (let index = 0; index < options.athletes.length; index++) {
    if (!arrayPais.includes(options.athletes[index].noc)) {
      arrayPais.push(options.athletes[index].noc);
    }
  }

  // Ordenar el array alfabéticamente
  arrayPais.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  // Recorrer el array ordenado y agregar cada opción al select
  for (let i = 0; i < arrayPais.length; i++) {
    let opt = document.createElement("option");
    opt.value = arrayPais[i];
    opt.textContent = arrayPais[i];
    modelList.options.add(opt);
  }
}
llenadoOpcionesPais(athletes);

function mostrarResultadosFiltrarPais() {
  if (this.value==="otros") {
    printCards(infoAtletas);
  }else{
    const valorSeleccionadoPais = seleccionarPais.value;
    const seleccionPais = filtrarPais(infoAtletas, valorSeleccionadoPais);
    printCards(seleccionPais);
    mostrarPorcentaje(infoAtletas, seleccionPais);
    seleccionarSexoAtleta.options[(seleccionarSexoAtleta.selectedIndex=[0])];
    seleccionarDisciplina.options[(seleccionarDisciplina.selectedIndex=[0])];
    seleccionarEspecialidad.options[(seleccionarEspecialidad.selectedIndex=[0])];
    seleccionarMedalla.options[(seleccionarMedalla.selectedIndex=[0])];
    // seleccionarPais.options[(seleccionarPais.selectedIndex=[0])];
  }
  
}

function mostrarOrdenAlfabetico(event) {
  const valorSeleccionadoOrder = ordenAlfabetico(infoAtletas, event.target.value);
  printCards(valorSeleccionadoOrder);
 
}

function mostrarPorcentaje(infoAtletas,seleccionar) {
  const resultadoP=calcularPorcentaje(infoAtletas, seleccionar);
  // resultadocalculo.innerHTML="Existen "+ seleccionar.length+" atletas en este filtro y representa "+resultadoP+"% de todos los participantes. "
  resultadocalculo.innerHTML="Participaron "+ seleccionar.length+" atletas  "+ " y representan el "+resultadoP+"% de todos los participantes. "
  
}
