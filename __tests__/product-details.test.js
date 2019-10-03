import getAllProducts, { getProductById } from "../product-details.js";

test("gets a product by id from the database", () => {
  expect(getProductById("2")).toEqual(
    getAllProducts().find(product => {
      return product.id === "2";
    }),
  );

  expect(getProductById("0")).toMatchSnapshot();
});

test("returns undefined when passed a non-id", () => {
  expect(getProductById("")).toBe(undefined);
  expect(getProductById(false)).toBe(undefined);
  expect(getProductById(null)).toBe(undefined);
});
