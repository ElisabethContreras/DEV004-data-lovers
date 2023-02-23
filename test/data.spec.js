import {imprimirData,} from '../src/atletasMain.js';


describe(imprimirData, () => {
  it('is a function', () => {
    expect(typeof imprimirData).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
