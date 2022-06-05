import {useEffect, useState} from 'react'
import Header from './components/Header'
import Input from './components/Input'
import gamesService from "./services/games"
import RequestGameButton from "./components/RequestGameButton"
import Game from "./components/Game"
import Home from "./components/Home"
import {
    Routes,
    Route,
    Navigate,
    BrowserRouter as Router,
} from "react-router-dom"
import GamesList from "./components/GamesList";

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

        if(event.target.value === '')
        {
            setIsGameSet(false)
        }
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
                <Input val={requestedGame} onChange={setRequestedGameValue} label={'gameid'}/>
                <RequestGameButton action={getGameData} />
            </div>

            <Routes>
                <Route path="/game" element={!isGameSet ? <Navigate replace to="/" replace={true}/> :<GamesList games={game} isGameSet={isGameSet}/>} />
                <Route path="/" element={isGameSet ? <Navigate replace to="/game" replace={true}/> : <Home games={games}/>} />
            </Routes>

            <div>
                <i>SteamEngine, Konrad Kowalczyk 2022</i>
            </div>
        </Router>
    )
}

export default App