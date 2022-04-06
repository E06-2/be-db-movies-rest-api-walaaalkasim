const Movie = require("../models/Movie");
const mongoose = require('mongoose');
const {Types} =require("mongoose")

mongoose.connect = jest.fn().mockResolvedValue();
const server = require('../server');
describe('Task 11: Endpoint to search and update movies by id', () => {
    test('1.Create an endpoint `/update` in your `movies` router with PATCH and id params', async () => {
        const mockUser = {
            _id: Types.ObjectId(),
            pilot: "new pilot",
            title: "new title"
            
          };
          const spy = jest.spyOn(Movie, "findByIdAndUpdate").mockReturnValueOnce(mockUser );
          Movie.findByIdAndUpdate(mockUser._id, {
            pilot: "new pilot",
            title:"new title"
          }, {
            new: true,
          });
      
          const spyUpdatedUser = spy.mock.results[0].value;
          expect(spy).toHaveBeenCalledTimes(1);
          expect(spyUpdatedUser.pilot).toEqual("new pilot");
          expect(spyUpdatedUser.title).toEqual("new title");
          spy.mockReset();

        
   })
   
  
afterAll(async () => {
   await server.close();
})
})