const express = require('express')
const app = express()
const cors = require('cors')
const rq = require('request')
const dotenv = require('dotenv')

const requestLogger = (request, response, next) => {
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}

const games = {};
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(requestLogger)

app.get('/api/games/:id', (request, response) => {
    const id = Number(request.params.id)
    const url = 'http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/' +
        `v2/?key=${process.env.STEAM_KEY}&appid=` +
        id;
    rq.get(url, function(error, steamHttpResponse, steamHttpBody) {
        response.setHeader('Content-Type', 'application/json');
        response.send(steamHttpBody);
    });
})

app.get('/api/games/byname/:name', (request, response) => {
    const name = String(request.params.name.toLowerCase())

    if(name in games)
    {
        const id = games[name]
        const url = 'http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/' +
            `v2/?key=${process.env.STEAM_KEY}&appid=` +
            id;
        rq.get(url, function(error, steamHttpResponse, steamHttpBody) {
            response.setHeader('Content-Type', 'application/json');
            response.send(steamHttpBody);
        });
    }


})


const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    const url = 'http://api.steampowered.com/ISteamApps/GetAppList/v0002/' +
        `?key=${process.env.STEAM_KEY}`

    rq.get(url, function(error, steamHttpResponse, steamHttpBody) {
        const result = JSON.parse(steamHttpBody);

        for (let i = 0; i < result.applist.apps.length; i++) {
            const game = result.applist.apps[i];

            if(!games[game.name.toLowerCase()])
            {
                games[game.name.toLowerCase()] = game.appid;
            }
        }
    });
})