const request = require("supertest");
const app = require("../app");

//Passing test
// it("Testing to see if supertest works", () => {
//   expect(1).toBe(2);
// });

//Failing test
// it("Testing to see if supertest works", () => {
//   expect(1).toBe(2);
// });

//Testing for specific text
// describe("Test the root path", () => {
//   test("It should response the GET method", () => {
//     return request(app)
//       .get("/")
//       .then((res) => {
//         expect(res.text).toBe("Hello World!");
//       });
//   });
// });

//Testing for status code
describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .then((res) => expect(res.statusCode).toBe(200));
  });
});
