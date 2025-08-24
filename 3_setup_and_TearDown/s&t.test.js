let animals = ["cat", "dog", "bat", "rat", "elephant"];

beforeEach(() => {
  animals = ["cat", "dog", "bat", "rat", "elephant"];
})

describe("Array operations", () => {
    it("should add an animal to the end of the array", () => {
        animals.push("pussy")
        expect(animals).toContain("pussy");
        expect(animals.length).toBe(6);
        expect(animals[animals.length - 1]).toBe("pussy");
        expect(animals[0]).toBe("cat");
        expect(animals[2]).toBe("bat");
    })

    it("show have initial length of 5",()=>{
        expect(animals.length).toBe(5);
    })
})

afterEach(() => {
    console.log("Test finished, cleaning up...");
    animals = []
    console.log(animals.length);
})