function fetchData() {
    return Promise.resolve("Hello, World!");
}

describe("async/await Function Tests", () => {
    test("fetchData returns Hello World", async () => {
        const data = await fetchData();
        expect(data).toBe("Hello, World!");
    });
})

describe('Promise test', () => {
    test('the data is Hello World', () => {
        return fetchData().then(data => {
            expect(data).toBe('Hello, World!');
        });
    });
})

function callbackFetchData(callback) {
    setTimeout(() => {
        callback("Hello, World!");
    }, 1000);
}   

describe("Callback Function Tests", () => {
    test("callbackFetchData returns Hello World", (done) => {
        function callback(data) {
            try {
                expect(data).toBe("Hello, World!");
                done();
            } catch (error) {
                done(error);
            }
        }
        callbackFetchData(callback);
    });
});