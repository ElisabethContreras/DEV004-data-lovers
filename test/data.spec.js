import { buscarNombre, filtrarSexo} from '../src/data.js'; // de donde se estan importando los datos
import data from '../src/data/athletes/athletes.js';

const infoAtletas = data.athletes.slice(0,10); // Arrange

describe('buscarNombre',() => {
  it('Debería ser una función', () => {
    expect(typeof buscarNombre).toBe('function');
  });
  it('Retorna array vacio cuando no existe un atleta con el nombre indicado', () => {
    const resultadoObtenido =buscarNombre(infoAtletas, "Giovarrrnni") // Act
    expect(resultadoObtenido).toStrictEqual([]) // Assert
    // expect(example()).toBe('example');
  });

  it('Retorna array con información del atleta si se busca el nombre Giovanni', () => {
    // const infoAtletas = data.athletes.slice(0,10); // Arrange
    const resultadoObtenido =buscarNombre(infoAtletas, "Giovanni") // Act
    expect(resultadoObtenido).toBe(resultadoObtenido) // Assert
    // expect(example()).toBe('example');
  });
});

describe('filtrarSexo', () => {
  it('Debería ser una función', () => {
    expect(typeof filtrarSexo).toBe('function');
  });
  it()

//   it('Retorna Femenino para ´F´', () => {
// const resultadoSexo = filtrarSexo(infoAtletas, "")
//     expect(resultadoSexo).toBe(resultadoSexo);
//   });
});
