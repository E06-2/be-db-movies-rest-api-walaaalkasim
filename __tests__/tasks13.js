const Movie = require("../models/Movie");
const mongoose = require('mongoose');
const {Types} =require("mongoose")
mongoose.connect = jest.fn().mockResolvedValue();
const server = require('../server');
describe('Task 13: Endpoint to search and delete movies by id', () => {
    test('1.Create an endpoint `/delete` in your `movies` router` router with DELETE endpoint and id params', async () => {
            const mockUser = {
              _id: Types.ObjectId()
            
            };
            const spy = jest.spyOn(Movie, "findByIdAndRemove").mockReturnValueOnce(mockUser);
            Movie.findByIdAndRemove(mockUser._id);
        
            const spyDeletedUser = spy.mock.results[0].value;
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spyDeletedUser._id).toEqual(mockUser._id);
            spy.mockReset();
          });

afterAll(async () => {
   await server.close();
})
})


