const rewire = require('rewire');
const request = require('supertest');

describe('Task.3 Preparing our server to receive requests', () => {
    const server = rewire('../server');
    const app = server.__get__('app');
    const listen =  server.__get__('listen');
    test('check  server required `cors` package', () => {
        const cors = server.__get__('cors');
        expect(cors).toBeTruthy();
    })
    test('check app uses corse as middleware', async () => {
        const { headers } = await request(app).get('/');
        expect(headers['access-control-allow-origin']).toEqual('*');
    })
    test('check app uses express.json() as middleware', async () => {
        app.post('/test', (req, res) => {
            res.json(req.body);
        })
        const response = await request(app).post("/test").send({
            Hello: "Hello"
        })
        expect(response.body.Hello).toBeDefined()
    })
    afterAll(() => {
       listen.close();
    })
})