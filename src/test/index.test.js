import app from "../routes/indexRoutes";
import request from "supertest";

//LOCATION

describe("GET charCounter", () => {
  test("Should be respond with a status 200", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });

  test("Should be string", async () => {
    const response = await request(app).get("/");
    expect(response.header["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });
});
