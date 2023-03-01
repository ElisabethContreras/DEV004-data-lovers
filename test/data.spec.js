import { buscarNombre, filtrarSexo, filtrarDisciplina, filtrarEspecialidad, filtrarMedalla,filtrarPais,ordenAlfabetico, calcularPorcentaje} from '../src/data.js'; // de donde se estan importando los datos
import data from '../src/data/athletes/athletes.js';

const infoAtletas = data.athletes.slice(0,10); 
console.log(infoAtletas);
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
    expect(typeof buscarNombre).toBe('function'); //toBe: se usa para comparar valores primitivos, salvo arrays y objetos.
  });
  it('Retorna array vacio cuando no existe un atleta con el nombre indicado', () => {
    const resultadoObtenido =buscarNombre(infoAtletas, "Maria") // Act
    expect(resultadoObtenido).toStrictEqual([]) // Assert
   //toStrictEqual: Se usa para probar que los objetos tengan el mismo tipo y estrcutura. También se usa para los array
  });

  it('Retorna array con información del atleta si se busca el nombre Giovanni', () => {
       const resultadoObtenido =buscarNombre(infoAtletas, "Giovanni") // Act
      //  console.log(buscarNombre(infoAtletas, "Giovanni"));
    expect(resultadoObtenido).toHaveLength(1) // toHaveLength(): Para probar el largo de un objeto (.lenght) y le dé un valor numérico.
    //Es especifico para buscar el valor de un arreglo o cadena. Ej: expect([1, 2, 3]).toHaveLength(3);
    expect(resultadoObtenido).toStrictEqual(giovanni)
  });
});

describe('filtrarSexo', () => {
  it('Debería ser una función', () => {
    expect(typeof filtrarSexo).toBe('function');
  });
  it('Retorna "F" para Femenino', () => {
const seaMujer = filtrarSexo(infoAtletas, "F")
expect(seaMujer).toEqual(expect.not.arrayContaining(giovanni), 
);//expect.not.arrayContaining():La matriz esperada NO contiene el subconjunto definido. Es el inverso de eexpect.arrayContaining()
// console.log(seaMujer);
    
  });
  it('Retorna "M" para Masculino', () => {
    const seaHombre = filtrarSexo(infoAtletas, "M")
    expect(seaHombre).toEqual(expect.not.arrayContaining(patimat),
    );
    // console.log(seaHombre);
   });
});
describe('filtrarDisciplina',() => {
  it('Debería ser una función', () => {
    expect(typeof filtrarDisciplina).toBe('function');
  });
  it('Retorna lista de atletas que participaron en la disciplina seleccionada', () => {
    const opcionDisciplina =filtrarDisciplina(infoAtletas, "Rowing") // Act
    expect(infoAtletas).toEqual(expect.arrayContaining(opcionDisciplina),
      );
      // console.log(opcionDisciplina);
    
  });
  it('Retorna todas las disciplinas al seleccionar la opción "limpiar filtro"', () => {
    const todasLasDisciplinas = filtrarDisciplina(infoAtletas, "limpiar filtro");
    expect(infoAtletas).toEqual(expect.arrayContaining(todasLasDisciplinas),
    );
    // console.log(todasLasDisciplinas);
   });
  });
  describe('filtrarEspecialidad',() => {
    it('Debería ser una función', () => {
      expect(typeof filtrarEspecialidad).toBe('function');
    });
    it('Retorna lista de atletas que participaron en la especialidad seleccionada', () => {
      const opcionEspecialidad =filtrarEspecialidad(infoAtletas, "Taekwondo Women's Flyweight") // Act
      expect(infoAtletas).toEqual(expect.arrayContaining(opcionEspecialidad),
        );
      // console.log(opcionEspecialidad);
      
    });
    it('Retorna todas las especialidades al seleccionar la opción "limpiar filtro"', () => {
      const todasLasEspecialidades = filtrarEspecialidad(infoAtletas, "limpiar filtro");
      expect(infoAtletas).toEqual(expect.arrayContaining(todasLasEspecialidades),
      );
      // console.log(todasLasEspecialidades);
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
        // console.log(opcionMedalla);
        
      });
      it('Retorna todas las disciplinas al seleccionar la opción "limpiar filtro"', () => {
        const todasLasMedallas = filtrarMedalla(infoAtletas, "limpiar filtro");
        expect(infoAtletas).toEqual(expect.arrayContaining(todasLasMedallas),
        );
        // console.log(todasLasMedallas);
       });
      });
      describe('filtrarMedalla',() => {
        it('Debería ser una función', () => {
          expect(typeof filtrarPais).toBe('function');
        });
        it('Retorna lista de atletas que participaron ganaron medallas de oro', () => {
          const opcionMedallaOro =filtrarMedalla(infoAtletas, "gold") // Act
          expect(infoAtletas).toEqual(expect.arrayContaining( opcionMedallaOro),
          );
          // console.log(opcionMedallaOro);
          
        });
        it('Retorna lista de atletas que participaron ganaron medallas de bronce', () => {
          const opcionMedallaBronce =filtrarMedalla(infoAtletas, "bronze") // Act
          expect(infoAtletas).toEqual(expect.arrayContaining( opcionMedallaBronce),
          );
          // console.log(opcionMedallaBronce);
        });
        it('Retorna lista de atletas que participaron ganaron medallas de plata', () => {
          const opcionMedallaPlata =filtrarMedalla(infoAtletas, "silver") // Act
          expect(infoAtletas).toEqual(expect.arrayContaining( opcionMedallaPlata),
          );
          // console.log(opcionMedallaPlata);
        });
        it('Retorna todas las tarjetas al seleccionar la opción "limpiar filtro"', () => {
          const todasLasMedallas = filtrarMedalla(infoAtletas, "limpiar filtro");
          expect(infoAtletas).toEqual(expect.arrayContaining(todasLasMedallas),
          );
          // console.log(todasLasMedallas);
         });
        });
        describe('filtrarPais',() => {
          it('Debería ser una función', () => {
            expect(typeof filtrarPais).toBe('function');
          });
          it('Retorna lista de atletas que pertenecen al país seleccionado', () => {
            const opcionPais =filtrarPais(infoAtletas, "Italia") // Act
            expect(infoAtletas).toEqual(expect.arrayContaining(opcionPais),
            );
            console.log(opcionPais);
          });
          it('Retorna array vacio cuando no encuentra el país con el nombre indicado', () => {
            const noEstaPais =filtrarPais(infoAtletas, "Argentina") // Act
            expect(noEstaPais).toStrictEqual([]) // Assert
           //toStrictEqual: Se usa para probar que los objetos tengan el mismo tipo y estrcutura. También se usa para los array
          });
          it('Retorna todas las tarjetas al seleccionar la opción "limpiar filtro"', () => {
            const todosLosPaises = filtrarMedalla(infoAtletas, "limpiar filtro");
            expect(infoAtletas).toEqual(expect.arrayContaining(todosLosPaises),
            );
            // console.log(todosLosPaises);
           });
          });

      