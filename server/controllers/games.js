const gamesRouter = require('express').Router()
const rq = require("request");

const games = {}
const topGames = {}

gamesRouter.get('/', (request, response) => {
    response.send(topGames);
})

gamesRouter.get('/:id', (request, response) => {
    const id = Number(request.params.id)
    const url = 'http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/' +
        `v2/?key=${process.env.STEAM_KEY}&appid=` +
        id;
    rq.get(url, function(error, steamHttpResponse, steamHttpBody) {
        response.setHeader('Content-Type', 'application/json');
        response.send(steamHttpBody);
    });
})

gamesRouter.get('/byname/:name', (request, response) => {
    const name = String(request.params.name.toLowerCase())

    let gameId = 0

    for (const [key, value] of Object.entries(games)) {
        if(key.includes(name) && gameId == 0)
        {
            gameId = value;
        }
        else if(key == name)
        {
            gameId = value;
        }
    }
        const url = `https://store.steampowered.com/api/appdetails?appids=` + gameId;
        rq.get(url, function(error, steamHttpResponse, steamHttpBody) {
            response.setHeader('Content-Type', 'application/json');
            response.send(steamHttpBody);
        });
})

const setInitialData = () =>
{
    getGames((g) =>{
        for (let i = 0; i < g.length; i++) {
            const game = g[i];

            if(!games[game.name.toLowerCase()])
            {
                games[game.name.toLowerCase()] = game.appid;//
            }
        }
    })

    getTopGames(g => {
        for (gameID in g)
        {
            const game = g[gameID];

            if(!topGames[gameID])
            {
                topGames[gameID] = game;//
            }
        }
    })
}

const getGames = (callback) => {
    rq.get(`http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=${process.env.STEAM_KEY}`, function(error, steamHttpResponse, steamHttpBody) {
        const result = JSON.parse(steamHttpBody);
        callback(result.applist.apps)
    });
}

const getTopGames = (callback) => {
    rq.get('http://steamspy.com/api.php?request=top100in2weeks', function(error, steamHttpResponse, steamHttpBody) {
        const result = JSON.parse(steamHttpBody);
        callback(result)
    });
}

module.exports = { gamesRouter, getGames, setInitialData }
//
//