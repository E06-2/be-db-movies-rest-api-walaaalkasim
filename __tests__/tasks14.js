const Comment = require("../models/Comment");
const mongoose = require('mongoose');
const {Types} =require("mongoose")
mongoose.connect = jest.fn().mockResolvedValue();
const server = require('../server');
describe('Task 14: Endpoint to search and delete comments by id', () => {
    test('1.Create an endpoint `/delete` in your `comments` router` router with DELETE endpoint and id params', async () => {
            const mockUser = {
              _id: Types.ObjectId()
            
            };
            const spy = jest.spyOn(Comment, "findByIdAndRemove").mockReturnValueOnce(mockUser);
            Comment.findByIdAndRemove(mockUser._id);
        
            const spyDeletedUser = spy.mock.results[0].value;
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spyDeletedUser._id).toEqual(mockUser._id);
            spy.mockReset();
          });

afterAll(async () => {
   await server.close();
})
})


