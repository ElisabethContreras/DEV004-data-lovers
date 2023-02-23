
//la const debe ser igual a la de la importacion del main
//toLowerCase() : convierte la cadenaen minusculas
//includes() : devuelve true/false si el dato buscado esta en el array
export const buscarNombre = (infoAtletas, name) => {
  const nombreBuscado=infoAtletas.filter((atleta)=>atleta.name.toLowerCase().includes(name.toLowerCase()));
  // console.log(nombreBuscado);
  return nombreBuscado;
};
// Filtrar por Sexo //La var filtrarSexo se debe llevar al main.js y agregar en el import
export const filtrarSexo = (infoAtletas, gender) => {
  const resultadoSexo = infoAtletas.filter((atleta) => atleta.gender.toLowerCase() === gender.toLowerCase());
  return resultadoSexo;
};
// Filtrar por Disciplina //La var filtrarDisciplina se debe llevar al main.js y agregar en el import
export const filtrarDisciplina = (infoAtletas, sport) => {
  const resultadoDisciplina = infoAtletas.filter((atleta) => atleta.sport.toLowerCase() === sport.toLowerCase());
  return resultadoDisciplina;
};

// export const athetesPais = (infoAthetas, noc) => {
//   const namePais=infoAthetas.filter()
//   return 'example';
// };

