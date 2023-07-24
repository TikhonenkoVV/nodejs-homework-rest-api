const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const { DB_HOST } = process.env;

describe("Test sign in controller", () => {
    beforeAll(async () => {
        await mongoose.connect(DB_HOST);
    });
    afterAll(async () => {
        await mongoose.connection.close();
    });

    test("signin", async () => {
        const res = await request(app).post("/api/users/signin").send({
            email: "test_user@test.com",
            password: "123456Qs",
        });
        expect(res.statusCode).toBe(401);
        expect(res.body.message).toBe(
            "Email is not verified! Check your mailbox!"
        );
    });
});
