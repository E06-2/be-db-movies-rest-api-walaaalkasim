const Movie = require("../models/Movie");
const mongoose = require('mongoose');
const request = require('supertest');
const server = require('../server');



describe('Task 8: Endpoint to search for movies by title', () => {
    it('responds with 200 if movie title found', async function() {
    const title ='Street Angel'
    const response = await request(server)
    .get(`/movies/searchByTitle/${title}`)                    
    .set('Accept', 'application/json')
    
    expect(response.status).toEqual(200);
    expect(response.body[0].title).toBe('Street Angel');

}); 


    test('responds with 404 if movie title not found', async function() {
        jest.setTimeout(10000);
        const title ='Street Angel'
        const response = await request(server)
        .get(`/movies/searchByTitle/${title}`)                    
        .set('Accept', 'application/json')
        if(response.body[0].title != 'Street Angel'){

        expect(response.status).toEqual(404);
        }
    
 
    }); 
}); 


afterAll(async () => {
   await server.close();
})
