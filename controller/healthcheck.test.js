const request = require("supertest")
const app = require("../server/index")

describe("Test /Healthcheck", () => {

    test("Should response with a 200 and a JSON status", async () => {

        const response = await request(app).get("/healthcheck")

        expect(response.body).toStrictEqual({ "status": "UP" })
        expect(response.statusCode).toBe(200)
    })
    

})