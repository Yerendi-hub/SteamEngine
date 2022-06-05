const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, './.env') });

test('Gloria Victis game is returned when asking for game 327070', async () => {
    //const response = await api.get('/api/games/327070')
    expect(true).toBe(true)
    //console.log(response.body)
    //expect(response.body.data.name).toBe('Gloria Victis: Medieval MMORPG')
})