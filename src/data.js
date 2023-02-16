//Aqui van solo ls exportaciones de info.
// estas funciones son de ejemplo

// export const example = () => {
//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };

//la const debe ser igual a la de la importacion del main
//toLowerCase() : convierte la cadenaen minusculas
//includes() : devuelve true/false si el dato buscado esta en el array
export const buscarNombre = (infoAtletas, nombre) => {
  const nombreBuscado=infoAtletas.filter((atleta)=>atleta.nombre.toLowerCase().includes(nombre.toLowerCase()));
  console.log(nombreBuscado);
  // return 'nombreBuscado';
};



// export const athetesPais = (infoAthetas, noc) => {
//   const namePais=infoAthetas.filter()
//   return 'example';
// };
