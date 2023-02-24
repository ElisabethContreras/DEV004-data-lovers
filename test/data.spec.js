import {buscarNombre } from '../src/data.js';
import data from '../src/data/athletes/athletes.js';


describe(buscarNombre, () => {
  it('debería ser una función', () => {
    expect(typeof buscarNombre).toBe('function');
  });

  // // it('Retorna array vacio cuando no existe un atleta con el nombre indicado', () => {
  // //   const infoAtletas = data.athletes.slice(0,10); // Arrange
  // //   const resultadoObtenido =buscarNombre(infoAtletas, "Giovarrrnni") // Act
  // //   expect(resultadoObtenido).toStrictEqual([]) // Assert
  // //   // expect(example()).toBe('example');
  // // });

  // // it('Retorna array con 1 elemento si se busca el nombre Giovanni', () => {
  // //   const infoAtletas = data.athletes.slice(0,10); // Arrange
  // //   const resultadoObtenido =buscarNombre(infoAtletas, "Giovanni") // Act
  // //   expect(resultadoObtenido).toStrictEqual([]) // Assert
  // //   // expect(example()).toBe('example');
  // });
  it('Retorna array vacio cuando no existe un atleta con el nombre indicado', () => {
    const infoAtletas = data.athletes.slice(0,10); // Arrange
    const resultadoObtenido =buscarNombre(infoAtletas, "Giovarrrnni") // Act
    expect(resultadoObtenido).toStrictEqual([]) // Assert
    // expect(example()).toBe('example');
  });

  it('Retorna array con 1 elemento si se busca el nombre Giovanni', () => {
    const infoAtletas = data.athletes.slice(0,10); // Arrange
    const nombreBuscado=infoAtletas.filter((atleta)=>atleta.name.toLowerCase())  //includes(name.toLowerCase()));
    const resultadoObtenido =buscarNombre(infoAtletas, nombreBuscado, "Giovanni") // Act
    expect(resultadoObtenido).toStrictEqual([]) // Assert
    // expect(example()).toBe('example');
  });
});

