const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, './.env') });
