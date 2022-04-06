const Movie = require("../models/Movie");
const mongoose = require('mongoose');
const request = require('supertest');

const {Types} =require("mongoose")
mongoose.connect = jest.fn().mockResolvedValue();
const server = require('../server');


describe('Task 8: Endpoint to search for movies by title', () => {
test("find movie by title should be used", () => {
    const MovieTitle = [
      {
        _id: Types.ObjectId(),
        title: "Street Angel"     
      },
    ];

    const spy = jest.spyOn(Movie, "find").mockReturnValueOnce(MovieTitle);
    Movie.find(MovieTitle.title);

    const spyFetchedUsers = spy.mock.results[0].value;
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spyFetchedUsers).toHaveLength(1);
    spy.mockReset();
}); 
}); 


afterAll(async () => {
   await server.close();
})
