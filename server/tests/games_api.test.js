const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('Gloria Victis game is returned when asking for game 327070', async () => {
    const response = await api.get('/api/games/327070')
    console.log(response.text)
    const json = JSON.parse(response.text)
    expect(json.game.gameName).toBe('Gloria Victis')
})

test('Gloria Victis game is returned when asking for game Gloria Victis', async () => {
    const response = await api.get('/api/games/327070')
    console.log(response.text)
    const json = JSON.parse(response.text)
    expect(json.game.gameName).toBe('Gloria Victis')
})