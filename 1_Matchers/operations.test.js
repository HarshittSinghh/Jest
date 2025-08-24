const { sum, subtract, multiply, divide } = require('./operations');

describe("Addition Operation", () => {
  test("sum of 2 and 3 is 5", () => {
    expect(sum(2, 3)).toBe(5);
  });
  test("sum of 0 and 3 is 3", () => {
    expect(sum(0, 3)).toBe(3);
  });
  test("sum of -5 and 10 is 5", () => {
    expect(sum(-5, 10)).toBe(5);
  });
});

describe("Subtraction Operation", () => {
  test("subtraction of 5 and 3 is 2", () => {
    expect(subtract(5, 3)).toBe(2);
  });
  test("subtraction of 0 and 3 is -3", () => {
    expect(subtract(0, 3)).toBe(-3);
  });
  test("subtraction of -5 and -10 is 5", () => {
    expect(subtract(-5, -10)).toBe(5);
  });
});

describe("Multiplication Operation", () => {
  test("multiplication of 5 and 3 is 15", () => {
    expect(multiply(5, 3)).toBe(15);
  });
  test("multiplication of 0 and 3 is 0", () => {
    expect(multiply(0, 3)).toBe(0);
  });
  test("multiplication of -5 and -10 is 50", () => {
    expect(multiply(-5, -10)).toBe(50);
  });
});

describe("Division Operation", () => {
  test("division of 6 and 3 is 2", () => {
    expect(divide(6, 3)).toBe(2);
  });
  test("division of 0 and 3 is 0", () => {
    expect(divide(0, 3)).toBe(0);
  });
  test("division of -10 and -2 is 5", () => {
    expect(divide(-10, -2)).toBe(5);
  });
  test("division by zero should throw error", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero is not allowed.");
  });
});

test("Basic Matchers Operations", () => {   
    expect({name:'Harshit'}).toEqual({name:'Harshit'}); 
    expect([1,2,3,4,5,6]).toContain(2,3,4);
    expect(5+5).toBeGreaterThan(9);
    expect(5+5).toBeLessThan(11);
    expect(5+5).toBeGreaterThanOrEqual(10);
    expect("harshita").toMatch(/harshit/);
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect(5+5).toBeTruthy();
    expect(5-5).toBeFalsy();
});
