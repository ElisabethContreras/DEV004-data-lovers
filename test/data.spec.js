import { buscarNombre, filtrarSexo} from '../src/data.js'; // de donde se estan importando los datos
import data from '../src/data/athletes/athletes.js';

const infoAtletas = data.athletes.slice(0,10); 
// const filtroBusqueda = infoAtletas.filter(((atleta)=>atleta.name.toLowerCase().includes(nombre.toLowerCase())));
const giovanni = [{
  name: 'Giovanni Abagnale',
      gender: 'M',
      height: '198',
      weight: '90',
      sport: 'Rowing',
      team: 'Italy',
      noc: 'ITA',
      age: 21,
      event: "Rowing Men's Coxless Pairs",
      medal: 'Bronze'
}]
const patimat = [
  {
    name: 'Patimat Abakarova',
    gender: 'F',
    height: '165',
    weight: '49',
    sport: 'Taekwondo',
    team: 'Azerbaijan',
    noc: 'AZE',
    age: 21,
    event: "Taekwondo Women's Flyweight",
    medal: 'Bronze'
  }
]

describe('buscarNombre',() => {
  it('Debería ser una función', () => {
    expect(typeof buscarNombre).toBe('function');
  });
  it('Retorna array vacio cuando no existe un atleta con el nombre indicado', () => {
    const resultadoObtenido =buscarNombre(infoAtletas, "Maria") // Act
    expect(resultadoObtenido).toStrictEqual([]) // Assert
    // expect(example()).toBe('example');
  });

  it('Retorna array con información del atleta si se busca el nombre Giovanni', () => {
    // const infoAtletas = data.athletes.slice(0,10); // Arrange
    const resultadoObtenido =buscarNombre(infoAtletas, "Giovanni") // Act
       console.log(buscarNombre(infoAtletas, "Giovanni"));
/*
    expect(resultadoObtenido[0]).toContain({
      name: 'Giovanni Abagnale',
      gender: 'M',
      height: '198',
      weight: '90',
      sport: 'Rowing',
      team: 'Italy',
      noc: 'ITA',
      age: 21,
      event: "Rowing Men's Coxless Pairs",
      medal: 'Bronze'
    }) */// Assert
    expect(resultadoObtenido).toHaveLength(1)
    expect(resultadoObtenido).toStrictEqual(giovanni)
  });
});

describe('filtrarSexo', () => {
  it('Debería ser una función', () => {
    expect(typeof filtrarSexo).toBe('function');
  });
  it('Retorna ´F´ para Femenino', () => {
const seaMujer = filtrarSexo(infoAtletas, "F")
expect(seaMujer).toEqual(
  expect.not.arrayContaining(giovanni),
);
console.log(seaMujer);
    //expect(seaMujer).toBeTruthy(seaMujer);
  });
  it('Retorna ´M´ para Masculino', () => {
    const seaHombre = filtrarSexo(infoAtletas, "M")
    expect(seaHombre).toEqual(
      expect.not.arrayContaining(patimat),
    );
    console.log(seaHombre);
   });
});
