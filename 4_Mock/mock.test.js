describe("Mock function example", () => {
  test("mock function should be called correctly", () => {
    const mockFn = jest.fn();

    mockFn("Hello");

    expect(mockFn).toHaveBeenCalled();     
    expect(mockFn).toHaveBeenCalledTimes(1);  
    expect(mockFn).toHaveBeenCalledWith("Hello");
  });
});

describe("Mock Operations", ()=>{
    test("Mock Addition",()=>{
        const add = jest.fn(()=> 5);
        expect(add(2,3)).toBe(5);
        expect(add(0,5)).toBe(5);
    })
    test("Mock Substraction",()=>{
        const sub = jest.fn(()=> 1);
        expect(sub(3,2)).toBe(1);
        expect(sub(4,3)).toBe(1);
        expect(sub(0,0)).toBe(1);
    })
    test("Real Addition",()=>{
        const RealAdd = jest.fn((a,b)=>a + b );
        expect(RealAdd(2,3)).toBe(5);
        expect(RealAdd(0,5)).toBe(5);
        expect(RealAdd(4,5)).toBe(9);
        expect(RealAdd(50,50)).toBeGreaterThan(99);
    })
    test("Real Substraction",()=>{
        const RealSub = jest.fn((a,b)=>a - b );
        expect(RealSub(2,3)).toBe(-1);
        expect(RealSub(0,5)).toBe(-5);
        expect(RealSub(4,5)).toBe(-1);
        expect(RealSub(10,5)).toBe(5);
    })
});