const gamesRouter = require('express').Router()
const rq = require("request");

const games = {}

gamesRouter.get('/:id', (request, response) => {
    const id = Number(request.params.id)
    const url = 'http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/' +
        `v2/?key=${process.env.STEAM_KEY}&appid=` +
        id;
    rq.get(url, function(error, steamHttpResponse, steamHttpBody) {
        console.log(steamHttpBody)
        response.setHeader('Content-Type', 'application/json');
        response.send(steamHttpBody);
    });
})

gamesRouter.get('/byname/:name', (request, response) => {
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

const getGames = () => {
    rq.get(`http://api.steampowered.com/ISteamApps/GetAppList/v0002/?key=${process.env.STEAM_KEY}`, function(error, steamHttpResponse, steamHttpBody) {
        const result = JSON.parse(steamHttpBody);

        for (let i = 0; i < result.applist.apps.length; i++) {
            const game = result.applist.apps[i];

            if(!games[game.name.toLowerCase()])
            {
                games[game.name.toLowerCase()] = game.appid;
            }
        }
    });
}


module.exports = { gamesRouter, getGames }
//
//