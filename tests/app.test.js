const app = require('../app.js')
const request = require('supertest')

describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(418);
            })
    })
    test('It should response the GET method for terminator', () => {
        return request(app)
            .get("/terminator")
            .then(response => {
                expect(response.statusCode).toBe(200);
            })
    })
})