const Comment = require("../models/Comment");
const mongoose = require('mongoose');
const request = require('supertest');
mongoose.connect = jest.fn().mockResolvedValue();
const server = require('../server');
describe('Task 10: Endpoint to search for comment by id', () => {
    test('1.Create an endpoint `/searchById` in your `comments` router.', async () => {
      const id = mongoose.Types.ObjectId();
        Comment.findById = jest.fn().mockResolvedValue({
            _id: id,
            _v:0
        });
        await request(server).get(`/comments/searchById/${id}`);
        expect(Comment.findById).toBeCalledWith(id.toString());
   })

    test('2.Should return status of 200 if found.', async () => {
        const id = mongoose.Types.ObjectId();
        Comment.findById = jest.fn().mockResolvedValue({
            _id: id,
            _v:0
        });

    const response = await request(server).get(`/comments/searchById/${id}`)
      expect(response.status).toEqual(200);
      expect(response.body._id).toStrictEqual(id.toString());
    })

    test('3.Should return status of 404 if not found.', async () => {
        const id = mongoose.Types.ObjectId();
        Comment.findById = jest.fn().mockResolvedValue({
            _id: id,
            _v:0
        });

    const response = await request(server).get(`/comments/searchById/${id}`)
    if(response.body._id !=id.toString()){
        expect(response.status).toEqual(404);
    }
      

    }) 
afterAll(async () => {
   await server.close();
})
})
