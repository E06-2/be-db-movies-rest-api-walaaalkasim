const fs = require('fs');
const path = require('path')

describe('Task.4 Movies Schema & Model.', () => {
    test('1.models Folder should be exist.', () => {
        expect(fs.existsSync(path.join(__dirname, '/../models'))).toBe(true);
    })
    test('2.MovieSchema Schema should be defined', () => {
        const fs = require('fs');
        const scriptText = fs.readFileSync(__dirname +"/../models/Movie.js", "utf8");
        expect(scriptText.includes("MovieSchema") || scriptText.includes("MovieSchema")).toBeTruthy();  
    })

    test('3.model should be created', () => {
        const fs = require('fs');
        const scriptText = fs.readFileSync(__dirname +"/../models/Movie.js", "utf8");
        expect(scriptText.includes("model") || scriptText.includes("model")).toBeTruthy();  
    })
})
