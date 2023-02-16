
//aqui se deben agregar las demas importaciones
import { buscarNombre } from './data.js'; //aqui se deben agregar las demas importaciones
// import { example } from '../data/athletes/athletes.js';
// import data from './data/lol/lol.js';


import data from './data/athletes/athletes.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(buscarNombre, data);

const infoAtletas = data.athletes; // aquí estoy guardando la información del arreglo que esta en athletes.js

function imprimirData (data){
document.getElementById("contenedor-tarjetas").innerHTML=data.map((item)=>
//item.name me trae desde mi athletes.js la información de los nombres contenidos allí
`<section class="caja">
<h2 class="nombre">($item.name)</h2> 

</section>
`).join("")
}

//funciones, practicar como traer la data para que aparezca en la pag.2
//20 datos de atletas para probar y hacer los test.
//Buscar el como hacer los test.