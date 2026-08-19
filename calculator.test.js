const {
  add,
  subtract,
  multiply,
  divide
} = require('./calculator');

test('deve realizar uma soma corretamente', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(10, 20)).toBe(30);
  expect(add(100, 50)).toBe(150);
});

test('deve realizar uma subtração corretamente', () => {
  expect(subtract(10, 4)).toBe(6);
  expect(subtract(20, 5)).toBe(15);
  expect(subtract(100, 40)).toBe(60);
});

test('deve realizar uma multiplicação corretamente', () => {
  expect(multiply(3, 4)).toBe(12);
  expect(multiply(5, 6)).toBe(30);
  expect(multiply(10, 10)).toBe(100);
});

test('deve realizar uma divisão corretamente', () => {
  expect(divide(10, 2)).toBe(5);
  expect(divide(20, 4)).toBe(5);
  expect(divide(7, 2)).toBe(3.5);
});

test('não deve permitir divisão por zero', () => {
  expect(() => divide(10, 0)).toThrow(
    'Divisão por zero não é permitida.'
  );
});