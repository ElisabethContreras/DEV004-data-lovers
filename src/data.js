//exporto la bbdd para buscar por nombre
//la const debe ser igual a la de la importacion del main
//toLowerCase() : convierte la cadenaen minusculas
//includes() : devuelve true/false si el dato buscado esta en el array
export const buscarNombre = (infoAtletas, name) => { //name corresponde al nombre en la bbdd
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

// Filtrar por Especialidad //La var filtrarEspecialidad se debe llevar al main.js y agregar en el import
export const filtrarEspecialidad = (infoAtletas, event) => {
  const resultadoEspecialidad = infoAtletas.filter((atleta) => atleta.event.toLowerCase() === event.toLowerCase());
  return resultadoEspecialidad;
};

// Filtrar por Medalla //La var filtrarMedalla se debe llevar al main.js y agregar en el import
export const filtrarMedalla = (infoAtletas, medal) => {
  const resultadoMedalla = infoAtletas.filter((atleta) => atleta.medal.toLowerCase() === medal.toLowerCase());
  return resultadoMedalla;
};

// Filtrar por Pais //La var filtrarPais se debe llevar al main.js y agregar en el import
export const filtrarPais = (infoAtletas, noc) => {
  const resultadoPais = infoAtletas.filter((atleta) => atleta.noc.toLowerCase() === noc.toLowerCase());
  return resultadoPais;
};

export const ordenAlfabetico = (infoAtletas, orden) => {
  const copyPersonsInfo = [...infoAtletas];
 
  if (orden === "AZ") {
    return copyPersonsInfo.sort((a, z) => a.name.toLowerCase() > z.name.toLowerCase() ? 1 : -1)
  } else {
    return copyPersonsInfo.sort((a, z) => a.name.toLowerCase() < z.name.toLowerCase() ? 1 : -1)
  }
};

export const calcularPorcentaje = (infoAtletas, seleccionar) => {
  const resultadoPorcentaje = parseFloat((seleccionar.length * 100) / infoAtletas.length).toFixed(2); // parseFloat crea una cadena y devuelve un número como flotante. Es decir, un número decimal.
  return resultadoPorcentaje;// toFixed nos permite redondear número aproximados.
};





// export const athetesPais = (infoAthetas, noc) => {
//   const namePais=infoAthetas.filter()
//   return 'example';
// };
