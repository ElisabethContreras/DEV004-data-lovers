
//aqui se deben agregar las demas importaciones
import { buscarNombre } from './data.js'; //aqui se deben agregar las demas importaciones
// import { example } from '../data/athletes/athletes.js';
// import data from './data/lol/lol.js';


import data from './data/athletes/athletes.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(buscarNombre, data);

const infoAtletas = data.athletes.slice(0,10); // aquí estoy guardando la información del arreglo que esta en athletes.js

function imprimirData (data){
  document.getElementById("contenedor-tarjetas").innerHTML=data.map((item)=>
    `<section class="caja">
        <a href="#">
           <figure>
              <h2 class="nombre">${item.name}</h2>
              <img class="frontal" src="Imagenes/generales/rio2.png" width="300" height="350" alt="" >
                 <figcaption class="trasera">
                    <div class="infotarjetas">
                        <p><strong> Sexo: </strong> ${item.gender} </p>
                        <p><strong> Altura: </strong> ${item.height} </p>
                        <p><strong> Peso: </strong> ${item.weight} </p>
                        <p><strong> Disciplina: </strong> ${item.sport} </p>
                        <p><strong> Equipo: </strong> ${item.team} </p>
                        <p><strong> País: </strong> ${item.noc} </p>
                        <p><strong> Edad: </strong> ${item.age} </p>
                        <p><strong> Especialidad: </strong> ${item.event} </p>
                        <p><strong> Medalla: </strong> ${item.medal} </p>
                    </div>
                </figcaption>
            </figure>
        </a>
    </section>
    `).join("");// se creó un subtitulo "nombre", extrayendo del athletes.js
}
imprimirData(infoAtletas);


//funciones, practicar como traer la data para que aparezca en la pag.2
//20 datos de atletas para probar y hacer los test.
//Buscar el como hacer los test.

