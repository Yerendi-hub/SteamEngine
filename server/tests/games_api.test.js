const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)



test('Gloria Victis game is returned when asking for game Gloria Victis', async () => {
    const response = await api.get('/api/games/327070')
    expect(response.body.game.gameName).toBe('Gloria Victis')
})