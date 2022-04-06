const fs = require('fs');
const path = require('path')
const Comment = require('../models/Comment.js');

describe('Task.5 CommentSchema & Model.', () => {
    test('1.Comment file should be exist.', () => {
        expect(fs.existsSync(path.join(__dirname, '/../models/Comment.js'))).toBe(true);
    })
    test('2.CommentSchema Schema should be defined', () => {
        const fs = require('fs');
        const scriptText = fs.readFileSync(__dirname +"/../models/Comment.js", "utf8");
        expect(scriptText.includes("CommentSchema") || scriptText.includes("CommentSchema")).toBeTruthy();  
    })

    test('3.movie_id should be defined and  reference to another collection', () => {
        const fs = require('fs');
        const scriptText = fs.readFileSync(__dirname +"/../models/Comment.js", "utf8");
        expect(scriptText.includes("movie_id") || scriptText.includes("movie_id")).toBeTruthy();  
       expect(Comment.schema.path('movie_id').options.ref).toBe('movie'); 
      
    })
    test('4.model should be created', () => {
        const fs = require('fs');
        const scriptText = fs.readFileSync(__dirname +"/../models/Comment.js", "utf8");
        expect(scriptText.includes("model") || scriptText.includes("model")).toBeTruthy();  
    })

})
