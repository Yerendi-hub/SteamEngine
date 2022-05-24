const Game = ({game, isGameSet}) => {
    if(isGameSet)
    {
        return (
            <label>
                {game.game.gameName}
            </label>)
    }
    else
    {
        return (
            <label>
            </label>)
    }


}

export default Game