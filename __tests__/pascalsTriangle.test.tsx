import { generate } from '../problems/pascalsTriangle';

describe('generate function', () => {
  test('returns an empty array if numRows is less than 1', () => {
    expect(generate(0)).toEqual([]);
  });

  test('returns the correct values for 1 row', () => {
    expect(generate(1)).toEqual([[1]]);
  });

  test('returns the correct values for 2 rows', () => {
    expect(generate(2)).toEqual([[1], [1, 1]]);
  });

  test('returns the correct values for 5 rows', () => {
    expect(generate(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
  });

  test('returns an empty array if numRows is not a number', () => {
    expect(generate('test')).toEqual([]);
  });
});