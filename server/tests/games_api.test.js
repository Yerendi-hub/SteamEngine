const supertest = require('supertest')
const app = require('../app')
const dotenv = require('dotenv')

const api = supertest(app)

const OLD_ENV = process.env

afterEach(() => {
    dotenv.config()
    jest.clearAllMocks()
    jest.resetModules()
    process.env = { ...OLD_ENV }
    delete process.env.NODE_ENV
})

test('Gloria Victis game is returned when asking for game 327070', async () => {
    const response = await api.get('/api/games/327070')
    expect("Gloria Victis").toBe('Gloria Victis')
})

test('Gloria Victis game is returned when asking for game Gloria Victis', async () => {
    const response = await api.get('/api/games/327070')
    expect(response.body.game.gameName).toBe('Gloria Victis')
})