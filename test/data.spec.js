import { buscarNombre, filtrarSexo, filtrarDisciplina, filtrarEspecialidad, filtrarMedalla,} from '../src/data.js'; // de donde se estan importando los datos
import data from '../src/data/athletes/athletes.js';

const infoAtletas = data.athletes.slice(0,10); 
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
   
  });

  it('Retorna array con información del atleta si se busca el nombre Giovanni', () => {
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
  it('Retorna "F" para Femenino', () => {
const seaMujer = filtrarSexo(infoAtletas, "F")
expect(seaMujer).toEqual(
  expect.not.arrayContaining(giovanni),
);
console.log(seaMujer);
    
  });
  it('Retorna "M" para Masculino', () => {
    const seaHombre = filtrarSexo(infoAtletas, "M")
    expect(seaHombre).toEqual(
      expect.not.arrayContaining(patimat),
    );
    console.log(seaHombre);
   });
});
describe('filtrarDisciplina',() => {
  it('Debería ser una función', () => {
    expect(typeof filtrarDisciplina).toBe('function');
  });
  it('Retorna lista de atletas que participaron en la disciplina seleccionada', () => {
    const opcionDisciplina =filtrarDisciplina(infoAtletas, "Rowing") // Act
    expect(infoAtletas).toEqual(
      expect.arrayContaining(opcionDisciplina),
      );
      console.log(opcionDisciplina);
    
  });
  it('Retorna todas las disciplinas al seleccionar la opción "limpiar filtro"', () => {
    const todasLasDisciplinas = filtrarDisciplina(infoAtletas, "limpiar filtro");
    expect(infoAtletas).toEqual(expect.arrayContaining(todasLasDisciplinas),
    );
    console.log(todasLasDisciplinas);
   });
  });
  describe('filtrarEspecialidad',() => {
    it('Debería ser una función', () => {
      expect(typeof filtrarEspecialidad).toBe('function');
    });
    it('Retorna lista de atletas que participaron en la especialidad seleccionada', () => {
      const opcionEspecialidad =filtrarEspecialidad(infoAtletas, "Taekwondo Women's Flyweight") // Act
      expect(infoAtletas).toEqual(
        expect.arrayContaining(opcionEspecialidad),
        );
      console.log(opcionEspecialidad);
      
    });
    it('Retorna todas las especialidades al seleccionar la opción "limpiar filtro"', () => {
      const todasLasEspecialidades = filtrarEspecialidad(infoAtletas, "limpiar filtro");
      expect(infoAtletas).toEqual(expect.arrayContaining(todasLasEspecialidades),
      );
      console.log(todasLasEspecialidades);
     });
    });
    describe('filtrarMedalla',() => {
      it('Debería ser una función', () => {
        expect(typeof filtrarMedalla).toBe('function');
      });
      it('Retorna lista de atletas que participaron ganaron medallas de oro', () => {
        const opcionMedalla =filtrarMedalla(infoAtletas, "gold") // Act
        expect(infoAtletas).toEqual(expect.arrayContaining( opcionMedalla),
        );
        console.log(opcionMedalla);
        
      });
      it('Retorna todas las disciplinas al seleccionar la opción "limpiar filtro"', () => {
        const todasLasMedallas = filtrarMedalla(infoAtletas, "limpiar filtro");
        expect(infoAtletas).toEqual(expect.arrayContaining(todasLasMedallas),
        );
        console.log(todasLasMedallas);
       });
      });
      