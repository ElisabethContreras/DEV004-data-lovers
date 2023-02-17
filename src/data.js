
//la const debe ser igual a la de la importacion del main
//toLowerCase() : convierte la cadenaen minusculas
//includes() : devuelve true/false si el dato buscado esta en el array
export const buscarNombre = (infoAtletas, name) => {
  const nombreBuscado=infoAtletas.filter((atleta)=>atleta.name.toLowerCase().includes(name.toLowerCase()));
  console.log(nombreBuscado);
  // return 'nombreBuscado';
};
// export const athetesPais = (infoAthetas, noc) => {
//   const namePais=infoAthetas.filter()
//   return 'example';
// };
