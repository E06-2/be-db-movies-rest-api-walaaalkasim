const fs = require('fs');
const path = require('path')

 describe("Task 2:check `.env` file.", () => {
    test('1.process.env.DB_USER,process.env.DB_PASS,process.env.DB_HOST,process.env.DB_NAME should be used', () => {
        const fs = require('fs');
        const scriptText = fs.readFileSync(__dirname +"/../server.js", "utf8");
        expect(scriptText.includes('process.env.DB_USER') || scriptText.includes('process.env.DB_USER')).toBeTruthy();  
        expect(scriptText.includes('process.env.DB_PASS') || scriptText.includes('process.env.DB_PASS')).toBeTruthy();  
        expect(scriptText.includes('process.env.DB_HOST') || scriptText.includes('process.env.DB_HOST')).toBeTruthy();  
        expect(scriptText.includes('process.env.DB_NAME') || scriptText.includes('process.env.DB_NAME')).toBeTruthy();  
    })  
    
 })