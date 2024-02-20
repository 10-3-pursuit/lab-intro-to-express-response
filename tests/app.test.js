const app = require('../app.js')
const request = require('supertest')


//  it('Testing to see if supertest works', () => {
//    expect(1 + 2).toBe(3)
//  })


 describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app)
            .get('/')
            .then(res => {
                expect(res.statusCode).toBe(200)
            })
    })
 })
 
//  describe("Test the root path", () => {
//     test("It should response the GET method", () => {
//       return request(app)
//         .get("/poetic-justice")
//         .then(response => {
//           expect(response.statusCode).toBe(418)
//         })
//     })
//   })