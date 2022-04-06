  const fs = require('fs');
const path = require('path')


describe('Task.6 Creating the Movies route', () => {
    test('1.Create the file `movies.js` in the folder `routes`', () => {
        expect(fs.existsSync(path.join(__dirname, '/../routes/movies.js'))).toBe(true);
    })
     test('2.Express should be imported', () => {
        const rewire = require('rewire');
        const movie =  rewire('./../routes/movies.js');
        const expr = movie.__get__('express')
        expect(expr).toBeTruthy()
         
    }) 

    test('3.Router instance should be created', () => {
        const fs = require('fs');
        const scriptText = fs.readFileSync(__dirname +"/../routes/movies.js", "utf8");
        expect(scriptText.includes("router") || scriptText.includes("router")).toBeTruthy();  
      
    })
    test('4.Router should be exported', () => {
        const fs = require('fs');
        const scriptText = fs.readFileSync(__dirname +"/../routes/movies.js", "utf8");
        expect(scriptText.includes("module.exports = router") || scriptText.includes("module.exports = router")).toBeTruthy();  
    })
 
    test('5.route should be imported into server.js', () => {
        const fs = require('fs');
        const scriptText = fs.readFileSync(__dirname +"/../server.js", "utf8");
        expect(scriptText.includes("./routes/movies") || scriptText.includes("./routes/movies")).toBeTruthy();  
    })

    test('6.app.use() should be used to use movies router and path /movies should be used ', () => {
        const fs = require('fs');
        const scriptText = fs.readFileSync(__dirname +"/../server.js", "utf8");
        expect(scriptText.includes('app.use("/movies", movieRoutes);') || scriptText.includes('app.use("/movies", movieRoutes);')).toBeTruthy();  
    })  
})
