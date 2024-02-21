const supertest = require('supertest');
const app = require('../app');

// writing test for the root path
describe('Test the root path', () => {
    test('It should respond to the GET method', () => {
        return supertest(app)
            .get("/")
            .then(response => {
                expect(response.text).toBe(`<header><h1>Hello, World</h1><h1><a href="/magic8">Magic 8 Ball</a></h1></header>`);
            }); // testing app.get with "/" path. Output to the webpage
    });
});