import { renderProduct } from "../../src/components/Home/Products";
import { products } from "../../src/components/Home/Products";
describe("Products Related tests", () => {
    test("render products should return 8 product", () => {

        expect(renderProduct(products).length).toBe(8);
    })

})