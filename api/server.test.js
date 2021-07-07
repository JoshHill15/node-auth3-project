const request = require("supertest")
const server = require("./server")

describe("server", () => {
  test("run the test", () => {
    expect(true).toBe(true);
  });

  describe("GET /", () => {
    test("SHOULD RETURN 200", async () => {
        // make get request
        // return request(server).get("/").then(res => {
        //     expect(res.status).toBe(200)
        // })
        return await request(server).get("/").then(res => {
            res => expect(res.status).toBe(200)
        })
        //check status code is 200
    });
    test("should return json", () => {
        // make get request
        return request(server).get("/").then(res => {
            expect(res.type).toMatch(/json/i)
        })
        //check status code is 200
    });
    test("should return up", () => {
        // make get request
        return request(server).get("/").then(res => {
            expect(res.body.api).toBe("up")
        })
        //check status code is 200
    });
  });
  
});
