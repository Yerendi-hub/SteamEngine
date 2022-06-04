import {useEffect, useState} from 'react'
import Header from './components/Header'
import Input from './components/Input'
import gamesService from "./services/games"
import RequestGameButton from "./components/RequestGameButton"
import Game from "./components/Game"
import Home from "./components/Home"
import {
    BrowserRouter as Router,
    Routes, Route, Link
} from "react-router-dom"

const App = () => {
    const [requestedGame, setRequestedGame] = useState('')
    const [game, setGame] = useState('')
    const [isGameSet, setIsGameSet] = useState(false)
    const [games, setGames] = useState(undefined)

    useEffect(() =>
    {
        getTopGames()
    }, [])

    const setRequestedGameValue = (event) => {
        setRequestedGame(event.target.value)
    }

    const getGameData = () =>{
        if(Number(requestedGame))
        {
            gamesService.getByID(requestedGame)
                .then(gameResponse =>{
                    setGame(gameResponse)
                    setIsGameSet(true)
                })
        }
        else{
            gamesService.getByName(requestedGame)
                .then(gameResponse =>{
                    setGame(gameResponse)
                    setIsGameSet(true)
                })
        }
    }

    const getTopGames = () =>{
        gamesService.getTopGames()
            .then(games => {
                setGames(games)
            })
    }

    return (
        <Router>
            <div>
            </div>

            <Routes>
                <Route path="/game" element={<Game game={game} isGameSet={isGameSet}/>} />
                <Route path="/" element={<Home games={games}/>} />
            </Routes>

            <div>
                <i>SteamEngine, Konrad Kowalczyk 2022</i>
            </div>
        </Router>

        /*<div>
            <Header text={'SteamEngine'}/>
            <Input val={requestedGame} onChange={setRequestedGameValue} label={'gameid'}/>
            <RequestGameButton action={getGameData} />
            <Game game={game} isGameSet={isGameSet}/>
           </div>*/
    )
}

export default App