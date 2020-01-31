const Users = require("./api/models")
const db = require("./dbConfigure")

describe("users model", () => {
    describe("test environment", () => {
        test("should use testing environment", () => {
            expect(process.env.DB_ENV).toBe("testing")
        })
    })
    describe("add()", () => {
        test("adds new user to the db", async () => {
            //call insert passing user

            await Users.add({ username: "Batman", password: "bat123", role: "admin"})
            const users = await db("users")

            //open the db and see that the hobbit is there
            expect(users).toHaveLength(2)
        })
    })
})