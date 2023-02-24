
//aqui se deben agregar las demas importaciones
import { buscarNombre, filtrarSexo, filtrarDisciplina, filtrarEspecialidad, filtrarMedalla, filtrarPais,ordenAlfabetico } from './data.js'; //aqui se deben agregar las demas importaciones
import athletes from './data/athletes/athletes.js';
// import { example } from '../data/athletes/athletes.js';
// import data from './data/lol/lol.js';
import data from './data/athletes/athletes.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(buscarNombre, data);

//Declaracion de variables
const infoAtletas = data.athletes;//.slice(0,10);//esta var me muestra todos los datos de los atletas//Guardo los resultados de la data del js en una variable
const buscarNombrePersona = document.getElementById("busqueda");//asigno a var buscarNombreAtleta el input que se encuentra en html por medio del id"busqueda"
const seleccionarSexoAtleta = document.getElementById("sexo-filtrar"); //se coloca el id del select en html
const seleccionarDisciplina = document.getElementById("disciplinas-filtrar");//se coloca el id del select en html
const seleccionarEspecialidad = document.getElementById("especialidad-filtrar");//se coloca el id del select en html
const seleccionarMedalla = document.getElementById("medalla-filtrar");
const seleccionarPais = document.getElementById("pais-filtrar");
const SeleccionarOrdenAlfabetico=document.getElementById("orden-alfabetico-ordenar");


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
  document.getElementById("contenedor-tarjetas").innerHTML = data.map((item) =>
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

// FUNCION FILTRAR SEXO ATLETA EN BOX BUSCADOR
function mostrarResultadosFiltrarSexo() {
  if (this.value === "F" || this.value === "M") {
    const valorSeleccionadoSexo = seleccionarSexoAtleta.value;//aqui se coloca el nombre dela const filtarSexoAtleta
    const seleccionSexo = filtrarSexo(infoAtletas, valorSeleccionadoSexo); // despues de asignar la variable,se debe asignar de impor filtrarSexo y pasar los valores de infoAtletas y valorSeleccionadoSexo
    printCards(seleccionSexo);
  }
  else {
    printCards(infoAtletas);
  }
}

// 1.-FUNCION FILTRAR DISCIPLINA, LLENADO DINAMICAMENTE AL HTML (BOX), FILTRA QUE NO SE REPITAN LOS DATOS EN LA LISTA Y LAS ORDENA ALBABETICAMENTE
function llenadoOpcionesDisciplinas(options_list) {
  const options = options_list;
  const modelList = document.getElementById("disciplinas-filtrar");
  const arraySports = []

  for (let index = 0; index < options.athletes.length; index++) {
    if (!arraySports.includes(options.athletes[index].sport)) {
      arraySports.push(options.athletes[index].sport)
      const opt = document.createElement("option");
      // le damos un valor
      opt.value = options.athletes[index].sport;
      // le ponemos un texto
      opt.textContent = options.athletes[index].sport;

      // lo agregamos al select
      modelList.options.add(opt);
    }
  }
  //   const arraySports = []
  //   for (let index = 0; index < options.athletes.length; index++) {
  //     if(!arraySports.includes( options.athletes[index].sport))
  //   arraySports.push( options.athletes[index].sport)

  //   }
  //   console.log(arraySports);


  //   for (let i in arraySports) {
  //   // for (let i in unico) { 
  // //console.log(options_list);
  //     // creamos un elemento de tipo option
  //     let opt = document.createElement("option");
  //     // le damos un valor
  //     opt.value = arraySports[i];
  //     // le ponemos un texto
  //     opt.textContent = arraySports[i];

  //     // lo agregamos al select
  //     modelList.options.add(opt);
  //   }
  llenadoOpciones(athletes);

  //MUESTRA EL RESULTADO DE FILTRAR DISCIPLINA
  function mostrarResultadosFiltrarDisciplina() {
    const valorSeleccionadoDisciplina = seleccionarDisciplina.value;
    const seleccionDisciplina = filtrarDisciplina(infoAtletas, valorSeleccionadoDisciplina);
    printCards(seleccionDisciplina);
  }

  // 1.-FUNCION FILTRAR ESPECIALIDAD, LLENADO DINAMICAMENTE AL HTML (BOX), FILTRA QUE NO SE REPITAN LOS DATOS EN LA LISTA Y LAS ORDENA ALBABETICAMENTE
  function llenadoOpcionesEspecialidad(options_list) {
    const options = options_list;
    const modelList = document.getElementById("especialidad-filtrar");
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
      const opt = document.createElement("option");
      // le damos un valor
      opt.value = arrayEspecialidad[i];
      // le ponemos un texto
      opt.textContent = arrayEspecialidad[i];

      // lo agregamos al select
      modelList.options.add(opt);

    }
    // console.log(arraySports);
  }
}
llenadoOpcionesEspecialidad(athletes);

function mostrarResultadosFiltrarEspecialidad(){
  const valorSeleccionadoEspecialidad=seleccionarEspecialidad.value;
  const seleccionEspecialidad=filtrarEspecialidad(infoAtletas,valorSeleccionadoEspecialidad);
  printCards(seleccionEspecialidad);
}

// FUNCION FILTRAR MEDALLA
function mostrarResultadosFiltrarMedalla() {
  const valorSeleccionadoMedalla = seleccionarMedalla.value;
  const seleccionMedalla = filtrarMedalla(infoAtletas, valorSeleccionadoMedalla);
  printCards(seleccionMedalla);
}

// 1.-FUNCION FILTRAR PAIS, LLENADO DINAMICAMENTE AL HTML (BOX), FILTRA QUE NO SE REPITAN LOS DATOS EN LA LISTA Y LAS ORDENA ALBABETICAMENTE
function llenadoOpcionesPais(options_list) {
  const options = options_list;
  const modelList = document.getElementById("pais-filtrar");
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
    const opt = document.createElement("option");
    opt.value = arrayPais[i];
    opt.textContent = arrayPais[i];
    modelList.options.add(opt);
  }
}
llenadoOpcionesPais(athletes);

function mostrarResultadosFiltrarPais() {
  const valorSeleccionadoPais = seleccionarPais.value;
  const seleccionPais = filtrarPais(infoAtletas, valorSeleccionadoPais);
  printCards(seleccionPais);
}

function mostrarOrdenAlfabetico(event) {
  const valorSeleccionadoOrder = ordenAlfabetico(infoAtletas, event.target.value);
  printCards(valorSeleccionadoOrder);
  // showPercentage(infoAtletas, valorSeleccionadoOrder);
  // selectSpecies.options[(selectSpecies.selectedIndex = 0)];
  // selectGender.options[(selectGender.selectedIndex = 0)];z
  // selectStatus.options[(selectStatus.selectedIndex = 0)];
}









//  // Ordenar el array de país alfabéticamente
//  arrayPais.sort();

//  // Agregar opciones ordenadas al select
//  for (let i = 0; i < arrayPais.length; i++) {
//    let opt = document.createElement("option");
//    opt.value = arrayPais[i];
//    opt.textContent = arrayPais[i];
//    // console.log(arrayPais); //al revisar se enuentra ordenado el arreglo
//    modelList.appendChild(opt);
//  }





















//PRUEBA2
// function llenadoOpciones(lista_opciones) {
//   var opciones = lista_opciones;
// //  console.log('var opciones= '+opciones); 
//   var modelList = document.getElementById("disciplinas-filtrar"); 

  
  
//   if (opciones.athletes[i]||opciones.athletes[i]) {
//     // console.log('var opciones[]= '+opciones.athletes[i]); 
//   } else {
    
//   }
//   for (var i in opciones.athletes) { 
//     if (opciones.athletes[i]||opciones.athletes[i]) {
//       console.log(opciones.athletes[i]);
//       // i=i+1;
//     } else {
//        // creamos un elemento de tipo option
//        var opt = document.createElement("option");
//        // le damos un valor
//        opt.value = opciones.athletes[i].athletes;
//        // le ponemos un texto
//        opt.textContent = opciones.athletes[i].sport;
//        // lo agregamos al select
//        modelList.opciones.add(opt);
        
//     }
   
//   }
// }
// llenadoOpciones(athletes);

//PRUEBA3
// function llenadoOpciones(options_list) {
//   let options = options_list; 
//   let modelList = document.getElementById("disciplinas-filtrar"); 
//   // console.log('modelo lista = '+modelList); //me muestra el objeto html
//   for (var i in  options.athletes) { 
   
//     // creamos un elemento de tipo option
//     let opt = document.createElement("option");
//     // console.log('var opt= '+opt.value);

//     // le damos un valor
//     opt.value = options.athletes[i].athletes;
//     // console.log('var options= '+options.athletes[i]);
//   //  console.log('opt.value = '+options.athletes[i].athletes);
   
//     // le ponemos un texto
//     opt.textContent = options.athletes[i].sport;
//     console.log('opt.texContent = '+options.athletes[i].sport);//me muestra los datos del array
//     // console.log('opt.texContent = '+opt.texContent);

//     let lista_atleta = [options.athletes[i].sport]
//     //   {name: "paco", edad:23},
//     //   {name: "paco", edad:23},
//     //   {name: "pepe", edad:25},
//     //   {name: "paco", edad:23},
//     //   {name: "lucas", edad:30},
//     //   {name: "paco", edad:23}
//     // ];
    
//     let sport = athletes.map(function (lista_atleta) { return lista_atleta.sport; });
//     var sorted = sport.sort();
    
//     var unique = sorted.filter(function (value, index) {
//       return value !== sorted[index + 1];
//     });
    
//     console.log('unique= '+unique);


//     // lo agregamos al select
//     modelList.options.add(opt);
//   }
// }
// llenadoOpciones(athletes);






// let persona =[athletes]
// console.log('lista atletas = '+persona);
// //   {name: "paco", edad:23},
// //   {name: "paco", edad:23},
// //   {name: "pepe", edad:25},
// //   {name: "paco", edad:23},
// //   {name: "lucas", edad:30},
// //   {name: "paco", edad:23}
// // ];

// let names = persona.map(function (persona) { return persona.sport; });
// console.log('sport = '+names);
// let sorted = names.sort();

// let unique = sorted.filter(function (value, index) {
//   return value !== sorted[index + 1];
// });

// console.log('unique= '+unique);


// let ff=[athletes.year]
// console.log('lista años = '+ff);

// let deporte =[athletes.sport]
// console.log('lista atletas = '+deporte);

// let names = deporte.map(function (nada) { 
//          return nada; 
// });
// console.log('sport = '+names);


// let sorted = deporte.sort();

// let unico = sorted.filter(function (value, index) {
//   return value !== sorted[index + 1];
// });

// console.log('unique= '+unico);


//funciones, practicar como traer la data para que aparezca en la pag.2
//20 datos de atletas para probar y hacer los test.
//Buscar el como hacer los test.

