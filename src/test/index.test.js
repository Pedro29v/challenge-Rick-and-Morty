import app from "../src/routes/location-routes.js";
import request from "supertest";

//LOCATION

describe("GET charCounter", () => {
  test("Should be respond with a status 200", async () => {
    const response = await request(app).get("/charCounter");
    expect(response.statusCode).toBe(200);
  });

  test("Should be string", async () => {
    const response = await request(app).get("/charCounter");
    expect(response.header["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });
});
