const Comment = require("../models/Comment");
const mongoose = require('mongoose');
const {Types} =require("mongoose")
mongoose.connect = jest.fn().mockResolvedValue();
const server = require('../server');
describe('Task 12: Endpoint to search and update comments by id', () => {
    test('1.Create an endpoint `/update` in your `comments` router with PATCH and id params', async () => {
        const mockUser = {
            _id: Types.ObjectId(),
            text: "new text",
            
            
          };
          const spy = jest.spyOn(Comment, "findByIdAndUpdate").mockReturnValueOnce(mockUser );
          Comment.findByIdAndUpdate(mockUser._id, {
            text: "new text"
            
          }, {
            new: true,
          });
      
          const spyUpdatedUser = spy.mock.results[0].value;
          expect(spy).toHaveBeenCalledTimes(1);
          expect(spyUpdatedUser.text).toEqual("new text");
          spy.mockReset();        
   })     
afterAll(async () => {
   await server.close();
})
})


