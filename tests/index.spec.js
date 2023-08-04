
import app from '../src/app'
import  request  from 'supertest'


//devuelve un codigo de estado 200
describe('GET/tasks', ()=>{
    test("should respond with a 200 status code", async ()  =>  { 
        const response =  await request(app).get('/tasks').send();
        expect(response.status).toBe(200);
    });

    //devuelve un array en formato json
    test("should respond with an array", async () => {
        const response = await request(app).get('/tasks').send();
        expect (response.body).toBeInstanceOf(Array);
        
    });

  

});

describe('POST /tasks',()=>{
    test('should respond with a 200 status code', async () => {
        const response = await request(app).post('/tasks').send();
        expect(response.statusCode).toBe(200);
    });

    test('should have a content-type: application/json in header ', async () => {
        const response = await request (app).post('/tasks').send();
        expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"))
    });

    test('should ', () => {
        
    });
})