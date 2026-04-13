/** @jest-environment node */
import request from "supertest";

const BASE_URL = "http://localhost:5000";

describe("Integration Tests products API", () => {
    it("should fetch products", async () => {
        const response = await request(BASE_URL).get("/myecom/products");
        const data = response.body;

        expect(response.status).toBe(200);
        expect(Array.isArray(data.products)).toBe(true);
        expect(data.products.length).toBeGreaterThan(0);
    });

    it("should fetch searched product", async () => {
        const response = await request(BASE_URL).get("/myecom/products?search=Eclipse");
        const data = response.body;

        expect(response.status).toBe(200);
        expect(Array.isArray(data.products)).toBe(true);
        data.products.forEach(product => {
            expect(product.name).toContain("Eclipse");
        })
    })

    it("should fetch searched product with lowercase", async () => {
        const response = await request(BASE_URL).get("/myecom/products?search=eclipse");
        const data = response.body;

        expect(response.status).toBe(200);
        expect(Array.isArray(data.products)).toBe(true);
        data.products.forEach(product => {
            expect(product.name.toLowerCase()).toContain("eclipse");
        })
    })
    it("should fetch searched product with gender Women", async () => {
        const response = await request(BASE_URL).get("/myecom/products?gender=Women");
        const data = response.body;

        expect(response.status).toBe(200);
        expect(Array.isArray(data.products)).toBe(true);
        data.products.forEach(product => {
            expect(product.gender).toBe("Women");
        })
    })
    it("should fetch searched product with gender Women", async () => {
        const response = await request(BASE_URL).get("/myecom/products?gender=Women");
        const data = response.body;

        expect(response.status).toBe(200);
        expect(Array.isArray(data.products)).toBe(true);
        data.products.forEach(product => {
            expect(product.gender).toBe("Women");
        })
    })
    it("should fetch products with limit 3", async () => {
        const response = await request(BASE_URL).get("/myecom/products?limit=3");
        const data = response.body;

        expect(response.status).toBe(200);
        expect(Array.isArray(data.products)).toBe(true);
        expect(data.products).toHaveLength(3);
    })
    it("should fetch products with limit 2", async () => {
        const response = await request(BASE_URL).get("/myecom/products?limit=2");
        const data = response.body;

        expect(response.status).toBe(200);
        expect(Array.isArray(data.products)).toBe(true);
        expect(data.products).toHaveLength(2);
    })
}); 