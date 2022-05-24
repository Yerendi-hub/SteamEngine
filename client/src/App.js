import {useState} from 'react'
import Header from './components/Header'
import Input from "./components/Input";
import gamesService from "./services/games";
import RequestGameButton from "./components/RequestGameButton";
import Game from "./components/Game";

const App = () => {
    const [requestedGame, setRequestedGame] = useState('')
    const [game, setGame] = useState('')
    const [isGameSet, setIsGameSet] = useState(false)

    const setRequestedGameValue = (event) => {
        setRequestedGame(event.target.value)
    }

    const getGameData = (event) =>{
        gamesService.getByID(requestedGame)
            .then(gameResponse =>{
                setGame(gameResponse)
                setIsGameSet(true)
            })
    }

    return (
        <div>
            <Header text={'SteamEngine'}/>
            <Input val={requestedGame} onChange={setRequestedGameValue} label={'gameid'}/>
            <RequestGameButton action={getGameData} />
            <Game game={game} isGameSet={isGameSet}/>
           </div>
    )
}

export default App