import {adder} from "./adder";

describe('adder()', () => {
  test('can add two numbers', () => {
    expect(adder(1, 1)).toBe(2);
  });
});
